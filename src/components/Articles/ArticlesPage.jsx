import { useEffect, useState } from "react";
import { getArticles } from "../../utils/api-calls";
import { extractArticleBodyPreview } from "../../utils/article-utils";

import "./ArticlesPage.css";

export default function ArticlesPage() {
  const [allArticlesData, setAllArticleData] = useState(false);

  useEffect(() => {
    if (!allArticlesData) {
      getArticles().then(({ data }) => {
        return setAllArticleData([
          data.data[0],
          data.data[0],
          data.data[0],
          data.data[0],
          data.data[0],
        ]);
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
          allArticlesData.map((articleInfo) => {
            console.log(articleInfo);
            return (
              <article className="articleBox" key={`article${articleInfo.id}`}>
                <img
                  className="articleBoxImg"
                  src={articleInfo.attributes.img1}
                  alt={articleInfo.attributes.alt1}
                />
                <div className="articleBoxInfo">
                  <p className="articleBoxCreatedAt">{`Article Created: ${articleInfo.attributes.updatedAt}`}</p>
                  <h3 className="articleBoxTitle">
                    <a href={`/articles/${articleInfo.id}`}>
                      {" "}
                      {articleInfo.attributes.title}
                    </a>{" "}
                  </h3>
                  <p className="articleBoxText">
                    {extractArticleBodyPreview(articleInfo.attributes.body1)}
                  </p>
                </div>
              </article>
            );
          })
        ) : (
          <p>Waiting for articles</p>
        )}
      </section>
    </main>
  );
}
