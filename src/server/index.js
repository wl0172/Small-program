import 'wepy-async-function'
import {doPostForm, doGet, doPostJson} from '../lib/request'
import config from '../config/index'

/**
 * 房型产品价格接口
 * @param {*} param
 */
function roomRatePlanDetailInfo(param) {
  return new Promise((resolve, reject) => {
    doPostJson(config.host + '/hotelinfo/roomRatePlanDetailInfo', param).then(res => {
      resolve(res)
    })
  })
}

/**
 * 酒店详情接口
 * @param {*} param
 */
function hotelDetailInfo(param) {
  return new Promise((resolve, reject) => {
    doPostForm(config.host + '/hotelinfo/hotelDetailInfo', param).then(res => {
      resolve(res)
    })
  })
}

/**
 * 酒店图片接口
 * @param {*} param
 */
function hotelImageInfo(param) {
  return new Promise((resolve, reject) => {
    doPostForm(config.host + '/hotelinfo/hotelImageInfo', param).then(res => {
      resolve(res)
    })
  })
}

export {
  roomRatePlanDetailInfo,
  hotelDetailInfo,
  hotelImageInfo
}
