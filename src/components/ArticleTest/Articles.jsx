import { useEffect, useState } from "react"
import { getArticles } from "../../utils/api-calls";

export default function ArticleTest() {
  const [allArticlesData, setAllArticleData] = useState(false);

  useEffect(() => {
    if (!testAllArticlesData) {
      getArticles().then(({ data }) => {
        return setAllArticleData(data.data);
      });
    }
  }, []);

  return (
    <main>
      <h1>Articles</h1>
    {allArticlesData ? (allArticlesData.map((stuff) => {
      return <h5><a href={`/articles/${stuff.id}`}> {stuff.attributes.title}</a> - {stuff.id}</h5>
    })) : (<p>Waiting for articles</p>)}
    </main>
  )
}