import request from '@/utils/request'

// 获得数据
export function findUser(params) {
  return request({
    url: '/user',
    method: 'GET',
    params
  })
}

// 删除数据
export function del(id) {
  return request({
    url: '/user/' + id,
    method: 'DELETE'
  })
}

// 表单提交
export function subData(form) {
  return request({
    url: '/user',
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    data: JSON.stringify(form)
  })
}
