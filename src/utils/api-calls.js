import axios from "axios"

const strapi = axios.create({
  baseURL: "https://joel-wilson-cms.fly.dev/api"
})

export const getTestArticleById = (id) => {
  return strapi.get(`/article-tests/${id}`)
}

export const getTestArticles = () => {
  return strapi.get(`/article-tests`)
}

export const getArticlesById = (id) => {
  return strapi.get(`/articles/${id}`)
} 

export const getArticles = () => {
  return strapi.get(`/articles`)
}