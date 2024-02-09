import { useParams } from "react-router-dom";
import { getTestArticleById, getAllImageData } from "../../utils/api-calls";
import { convertTimestampToDate } from "../../utils/utils";
import { useState, useEffect } from "react";

export default function ArticleTest() {
  const [articleData, setArticleData] = useState(false);
  const [imageData, setImageData] = useState(false)
  const bodyMap = ["body1", "body2", "body3", "body4"];

  const { id } = useParams();

  useEffect(() => {
    if (!articleData) {
      getTestArticleById(id).then(({ data }) => {
        return setArticleData(data.data.attributes);
      })
    }

    if (!imageData) {
      getAllImageData().then(({data}) => {
        return setImageData(data)
      })
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
          return <li>{textRetrieval(
            text.text,
            text.bold,
            text.italic,
            text.underline,
            text.strikethrough,
            text.type === "list-item"
          )}</li>;
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
        return <ul>{listMap}</ul>
      } else if (section.format === "ordered") {
        return <ol>{listMap}</ol>
      }
    } else if (section.type === "image") {
      console.log(section.image.url)
      return <img src={section.image.url} alt={section.image.alternativeText} />
    }
  }

  console.log(articleData.updatedAt)

  return (
    <div>
      <h1>{articleData.title ? articleData.title : "waiting for article"}</h1>
      <p>{articleData ? `Article created on ${convertTimestampToDate(articleData.updatedAt)}` : "shit"}</p>
      {articleData ? (
        bodyMap.map((body) => {
          return articleData[body] ? (
            articleData[body].map((paragraph) => {
              return articleSegment(paragraph);
            })
          ) : (
            <p>No text in this part of the section</p>
          );
        })
      ) : (
        <p>Waiting for section</p>
      )}
    </div>
  );
}
