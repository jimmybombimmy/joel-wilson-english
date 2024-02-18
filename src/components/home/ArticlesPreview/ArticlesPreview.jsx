import "./ArticlesPreview.css";
import { ARTICLES } from "../../../data/articles";
import { useEffect, useState } from "react";
import { getArticles } from "../../../utils/api-calls";
import { extractArticleBodyPreview } from "../../../utils/article-utils";
import articleNotFound from "../../../data/article404.json";
import articleNotFoundImg from "../../../assets/articles/404-preview.png"

export default function ArticlesPreview() {
  const [threeArticles, setThreeArticles] = useState(false);
  const article404 = {...articleNotFound}
  article404.data[0].attributes.img1 = articleNotFoundImg

  useEffect(() => {
    if (!threeArticles) {
      getArticles().then(({ data }) => {
        const noOfArticles = data.data.length;
        console.log("found article",data.data[noOfArticles - 1])
        return setThreeArticles([
          data.data[noOfArticles - 1] ? data.data[noOfArticles - 1] : articleNotFound.data[0],
          data.data[noOfArticles - 2] ? data.data[noOfArticles - 2] : articleNotFound.data[0],
          data.data[noOfArticles - 3] ? data.data[noOfArticles - 3] : articleNotFound.data[0],
        ]);
      });
    }
  }, []);

  return (
    <section id="articlesPreviewSection">
      <section id="articlesPreviewTop">
        <h2 id="articleSectionTitle">{!threeArticles ? 'Loading' : ''} Learning Materials</h2>
        <button id="viewArticlesButton">View All</button>
      </section>
      <section id="threeArticles">
        {threeArticles ? (
          threeArticles.map(({attributes}) => {
            return (
              <div
                className="article"
                key={attributes.title.replace(/\W+/g, "").toLowerCase()}
              >
                <img className="articlePrevImg" src={attributes.img1} alt={attributes.alt1} />
                <article className="articlePrevText">
                  <h3 className="articlePrevTitle">{attributes.title}</h3>
                  <p className="articlePrevBody">{extractArticleBodyPreview(attributes.body1)}</p>
                  <a className="articlePrevReadMore" href="">
                    {attributes.title === "ERR404: Article Not Found" ? "" : "Read more"}
                  </a>
                </article>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </section>
    </section>
  );
}
