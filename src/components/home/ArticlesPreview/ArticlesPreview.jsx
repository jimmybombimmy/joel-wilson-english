import "./ArticlesPreview.css";
import { ARTICLES } from "../../../data/articles";
import React from "react";

export default function ArticlesPreview() {
  return (
    <section id="articlesPreviewSection">
      <section id="articlesPreviewTop">
        <h2 id="articleSectionTitle">Learning Materials</h2>
        <button id="viewArticlesButton">View All Articles</button>
      </section>
      <section id="threeArticles">
          {ARTICLES.map((article) => {

            
            return (
                <div className="article" key={article.title.replace(/\W+/g, '').toLowerCase()}>
                  <img className="articlePrevImg" src={article.img} alt="" />
                  <article className="articlePrevText">
                  <h3 className="articlePrevTitle">{article.title}</h3>
                  <p className="articlePrevBody">{article.body}</p>
                  <a className="articlePrevReadMore" href="">Read more</a>
                  </article>
                </div>
            );
          })}
      </section>
    </section>
  );
}
