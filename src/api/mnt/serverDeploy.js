import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mng/api/serverDeploy',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'mng/api/serverDeploy',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'mng/api/serverDeploy',
    method: 'put',
    data
  })
}

export default { add, edit, del }
