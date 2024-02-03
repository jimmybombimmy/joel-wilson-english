import { useParams } from "react-router-dom"
import { getTestArticleById } from "../../utils/api-calls"
import { useState, useEffect } from "react"

export default function ArticleTest() {
  const [articleData, setArticleData] = useState(false)
  const bodyMap = ["body1", "body2", "body3", "body4"]

  const {id} = useParams()

  useEffect(() => {
    if (!articleData) {
    getTestArticleById(id)
    .then(({data}) => {
      return setArticleData(data.data.attributes)
    })
  }}, [articleData])

  function textReturn(text) {
    console.log(text)
  }

  return (
    <div>
      <h1>{articleData.title ? articleData.title : "waiting for article"}</h1>
      <p>Article created at PUT TIME HERE</p>
      <img src="" alt="" />
      {articleData ? bodyMap.map((body) => {
        return (articleData[body] ? articleData[body].map((paragraph) => {
          return (<p>{paragraph.children.map(text => {
            return (text.bold ? (<strong>{text.text}</strong>) : text.text)
          })}</p>)
        }) : <p>No text in this part of the section</p>)
      }) : <p>Waiting for section</p>}
    </div>
  )
}