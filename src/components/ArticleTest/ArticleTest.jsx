import { useEffect, useState } from "react"
import { getTestArticles } from "../../utils/api-calls";

export default function ArticleTest() {
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
      console.log("stuff", stuff.attributes)
      return <h5><a href={`/secret-article-test-page/${stuff.id}`}> {stuff.attributes.title}</a> - {stuff.id}</h5>
    })) : (<p>Waiting for articles</p>)}
    </main>
  )
}