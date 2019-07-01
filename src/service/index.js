import 'wepy-async-function'
import request from '../lib/request'
import http from '../lib/http'

// import data from ''

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

/**
 * 测试
 * @param {*} param
 */
service.getDemo = function (param) {
  return new Promise((resolve, reject) => {
    request.silenceGet(http.url, param, true).then(res => {
      wx.showToast({
        title: '测试接口调用成功执行',
        icon: 'success',
        duration: 2000
      })
      resolve({
        name: '接口调用成功执行'
      })
    })
  })
}

export default service
