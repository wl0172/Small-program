import 'wepy-async-function'
import request from '../lib/request'
import http from '../lib/http'

let service = {}

/**
 * 获取用户信息
 * @param {*} param
 */
service.getUserInfo = function (param) {
  return new Promise((resolve, reject) => {
    request.silenceGet(http.url + 'api/getUserInfo', param, true).then(res => {
      resolve(res)
    })
  })
}
