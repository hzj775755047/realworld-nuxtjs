import { request } from '@/plugins/request'


// 用户登录
export const getTags = () => {
  return request({
    method: 'GET',
    url: '/api/tags',
    
  })
}
