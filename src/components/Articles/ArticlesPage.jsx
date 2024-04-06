import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api-calls";
import { extractArticleBodyPreview } from "../../utils/article-utils";
import { convertTimestampToDate } from "../../utils/utils";

import "./ArticlesPage.css";

export default function ArticlesPage() {
  const [allArticlesData, setAllArticleData] = useState(false);

  useEffect(() => {
    if (!allArticlesData) {
      getArticles().then(({ data }) => {
        const dataMap = data.data.map((article) => {
          return article
        })

        return setAllArticleData(dataMap);
      });
    }
  }, []); 

  return (
    <main id="articlesPage">
      <p id="articleCountInfo">
        {allArticlesData
          ? `Total Articles: ${allArticlesData.length}`
          : `Waiting for articles`}
      </p>
      <h1 id="articlesPageTitle">Latest Articles</h1>

      <section id="articleBoxesSection">
        {allArticlesData ? (
          allArticlesData.map((articleInfo, index) => {
            return (
              <a href={`/articles/${articleInfo.id}`} key={`article${index}`}>
              <article className="articleBox" key={`article${articleInfo.id}`}>
                <img
                  className="articleBoxImg"
                  src={articleInfo.attributes.img1}
                  alt={articleInfo.attributes.alt1}
                />
                <div className="articleBoxInfo">
                  <p className="articleBoxCreatedAt">{`Article Created: ${convertTimestampToDate(articleInfo.attributes.updatedAt)}`}</p>
                  <h3 className="articleBoxTitle">
                      {articleInfo.attributes.title}
                  </h3>
                  <p className="articleBoxText">
                    {extractArticleBodyPreview(articleInfo.attributes.body1)}
                  </p>
                </div>
              </article>
              </a>
            );
          })
        ) : (
          <></>
        )}
      </section>
    </main>
  );
}
