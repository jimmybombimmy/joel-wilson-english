import axios from "axios"

const strapi = axios.create({
  baseURL: "https://joel-wilson-cms.fly.dev/api"
})

export const getTestArticleById = (id) => {
  return strapi.get(`/article-tests/${id}`)
}