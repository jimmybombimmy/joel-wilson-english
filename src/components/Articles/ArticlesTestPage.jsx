import { useEffect, useState } from "react"
import { getTestArticles } from "../../utils/api-calls";

import "./ArticlesTestPage.css"

export default function ArticlesTestPage() {
  const [testAllArticlesData, setAllTestArticleData] = useState(false);

  useEffect(() => {
    if (!testAllArticlesData) {
      getTestArticles().then(({ data }) => {
        return setAllTestArticleData(data.data);
      });
    }
  }, []);

  return (
    <main>
      <h1>Test articles</h1>
    {testAllArticlesData ? (testAllArticlesData.map((stuff) => {
      return <h5 className="testArticleLinks"><a href={`/secret-article-test-page/${stuff.id}`}> {stuff.attributes.title}</a> - {stuff.id}</h5>
    })) : (<p>Waiting for articles</p>)}
    </main>
  )
}