import { useParams } from "react-router-dom";
import { getTestArticleById } from "../../utils/api-calls";
import { convertTimestampToDate } from "../../utils/utils";
import { useState, useEffect } from "react";

export default function ArticleTest() {
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

  const { id } = useParams();

  useEffect(() => {
    if (!articleData) {
      getTestArticleById(id).then(({ data }) => {
        return setArticleData(data.data.attributes);
      });
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
        return <h1>{textMap}</h1>;
      } else if (section.level === 2) {
        return <h2>{textMap}</h2>;
      } else if (section.level === 3) {
        return <h3>{textMap}</h3>;
      } else if (section.level === 4) {
        return <h4>{textMap}</h4>;
      } else if (section.level === 5) {
        return <h5>{textMap}</h5>;
      } else if (section.level === 6) {
        return <h6>{textMap}</h6>;
      }
    } else if (section.type === "paragraph") {
      return <p>{textMap}</p>;
    } else if (section.type === "list") {
      if (section.format === "unordered") {
        return <ul>{listMap}</ul>;
      } else if (section.format === "ordered") {
        return <ol>{listMap}</ol>;
      }
    } else if (section.type === "quote") {
      return <p className="articleQuote">{textMap}</p>
    }
  }

  return (
    <div>
      <h1>{articleData.title ? articleData.title : "waiting for article"}</h1>
      <p>
        {articleData
          ? `Article created on ${convertTimestampToDate(
              articleData.updatedAt
            )}`
          : ""}
      </p>
      {articleData ? (
        bodyMap.map((body) => {        
          if (body.slice(0,3) === "img") {
            if (articleData[body]) {
              return <img src={articleData[body]} alt={articleData[`alt${body.slice(3)}`]} />
            }
          } else {
            return articleData[body] ? (
              articleData[body].map((paragraph) => {
                if (typeof paragraph === "string") {
                  return;
                }
                return articleSegment(paragraph);
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
  );
}
