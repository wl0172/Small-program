import 'wepy-async-function'
import request from '../lib/request'
import http from '../lib/http'

// import data from ''

let service = {}

/**
 * 彩票
 * @param {*} param
 */
service.getLottery = function (param) {
  return new Promise((resolve, reject) => {
    request.silenceGet(http.lottery + 'lottery/types' , param, true).then(res => {
      resolve(res)
    })
  })
}

/**
 * 彩票种类查询
 * @param {*} param
 */
service.getLotteryType = function (param) {
  return new Promise((resolve, reject) => {
    request.silenceGet(http.lottery + 'lottery/query' , param, true).then(res => {
      resolve(res)
    })
  })
}

/**
 * 音乐
 * @param {*} param
 */
service.getMusic = function (param) {
  return new Promise((resolve, reject) => {
    request.silenceGet(http.music + 'searchMusic' , param, true).then(res => {
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
