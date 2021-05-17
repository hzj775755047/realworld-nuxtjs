import { request } from '@/plugins/request'


// 用户登录
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}

// 用户登录
export const getFeedArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params
    // headers:{
    //   Authorization:'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTY4NzczLCJ1c2VybmFtZSI6Imh6amhiaCIsImV4cCI6MTYyNjI1MDA1OH0.yuLU8lpV8OBmL0VAEihan3AcT7CLqWjPjOz-qxTt0bE'
    // }
  })
}

export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${ slug }/favorite`
    
  })
}
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}

export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}