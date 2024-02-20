import { useParams } from "react-router-dom";
import { getArticlesById, getTestArticleById } from "../../../utils/api-calls";
import { convertTimestampToDate } from "../../../utils/utils";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./IndividualArticle.css";

export default function IndividualArticle() {
  const [articleData, setArticleData] = useState(false);
  const bodyMap = [
    "img1",
    "body1",
    "img2",
    "body2",
    "img3",
    "body3",
    "img4",
    "body4",
    "img5",
    "body5",
  ];
  const urlPath = useLocation().pathname;

  let pullQuoteCount = 0;

  const { id } = useParams();

  useEffect(() => {
    if (!articleData && urlPath) {
      if (urlPath.slice(1, 7) === "secret") {
        getTestArticleById(id).then(({ data }) => {
          return setArticleData(data.data.attributes);
        });
      } else if (urlPath.slice(1, 8) === "article") {
        getArticlesById(id).then(({ data }) => {
          return setArticleData(data.data.attributes);
        });
      }
    }
  }, []);

  function textRetrieval(text, bold, italic, underline, strikethrough, type) {
    let textReturn = text;
    if (bold) {
      textReturn = <strong>{textReturn}</strong>;
    }
    if (italic) {
      textReturn = <em>{textReturn}</em>;
    }
    if (underline) {
      textReturn = <u>{textReturn}</u>;
    }
    if (strikethrough) {
      textReturn = <s>{textReturn}</s>;
    }
    if (type) {
      textReturn = <li>{textReturn}</li>;
    }
    return textReturn;
  }

  function articleSegment(section) {
    let textMap = section.children.map((text) => {
      return textRetrieval(
        text.text,
        text.bold,
        text.italic,
        text.underline,
        text.strikethrough,
        text.type === "list-item"
      );
    });
    let listMap = section.children.map((item) => {
      if (item.type === "list-item") {
        return item.children.map((text) => {
          return (
            <li>
              {textRetrieval(
                text.text,
                text.bold,
                text.italic,
                text.underline,
                text.strikethrough,
                text.type === "list-item"
              )}
            </li>
          );
        });
      }
    });

    if (section.type === "heading") {
      if (section.level === 1) {
        return <h1 className="articleheader">{textMap}</h1>;
      } else if (section.level === 2) {
        return <h2 className="articleheader">{textMap}</h2>;
      } else if (section.level === 3) {
        return <h3 className="articleheader">{textMap}</h3>;
      } else if (section.level === 4) {
        return <h4 className="articleheader">{textMap}</h4>;
      } else if (section.level === 5) {
        return <h5 className="articleheader">{textMap}</h5>;
      } else if (section.level === 6) {
        return <h6 className="articleheader">{textMap}</h6>;
      }
    } else if (section.type === "paragraph") {
      return <p className="articleText">{textMap}</p>;
    } else if (section.type === "list") {
      if (section.format === "unordered") {
        return <ul className="articleText">{listMap}</ul>;
      } else if (section.format === "ordered") {
        return <ol className="articleText">{listMap}</ol>;
      }
    } else if (section.type === "quote") {
      let floatie;
      if (pullQuoteCount % 2 === 0) {
        floatie = "floatLeft";
      } else {
        floatie = "floatRight";
      }
      pullQuoteCount++;
      return (
        <aside className={`pullQuote ${floatie}`}>
          <blockquote className="articleQuote">
            <p
              style={{
                fontSize: textMap[0].length < 100 ? "1.3rem" : "1.125rem",
              }}
            >
              {textMap}
            </p>
          </blockquote>
        </aside>
      );
    }
  }

  return (
    <main id="articlePage">
      <div id="articleContainer">
        <h1 id="articleTitle">
          {articleData.title ? articleData.title : "Article Loading..."}
        </h1>
        <p id="articleCreated">
          {articleData
            ? `Created on: ${convertTimestampToDate(articleData.updatedAt)}`
            : ""}
        </p>
        {articleData ? (
          bodyMap.map((body) => {
            if (body.slice(0, 3) === "img") {
              if (articleData[body]) {
                return (
                  <div className="imgContainer">
                    <img
                      className="articleImg"
                      src={articleData[body]}
                      alt={articleData[`alt${body.slice(3)}`]}
                    />
                  </div>
                );
              }
            } else {
              return articleData[body] ? (
                articleData[body].map((paragraph) => {
                  if (typeof paragraph === "string") {
                    return;
                  }
                  return articleSegment(paragraph, body);
                })
              ) : (
                <></>
              );
            }
          })
        ) : (
          <p>Waiting for section</p>
        )}
      </div>
    </main>
  );
}
