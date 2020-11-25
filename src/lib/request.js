import wepy from 'wepy'
import wxsystem from '../lib/wxsystem'
import config from '../lib/config'

/**
 * @description POST请求
 * @author Songjp
 * @augments fullUrl 请求地址
 * @augments param 请求参数
 * @augments token 默认带token
 */
function doPost(fullUrl, param, token = true) {
  return new Promise(function (resolve, reject) {
    let header = { 'Content-Type': 'application/x-www-form-urlencoded' }
    if (token) {
      let _header = {
        token: wxsystem.getToken() || ''
      }
      header = Object.assign(header, _header)
    }
    // console.log(`请求地址：${fullUrl}，请求参数：`)
    // console.log(param)
    wx.request({
      url: fullUrl,
      data: param,
      header: header,
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (res.statusCode === 200) {
          if (res.data.code === 0) {
            resolve(res.data)
          } else if ((res.data.code !== 0) && res.data.msg) {
            wepy.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 1500
            })
            if (res.data.msg === '余额不足,请充值！') {
              wepy.navigateTo({
                url: './charge'
              })
            }
          } else {
            wepy.showToast({
              title: '发生未知错误，请联系客服!',
              icon: 'none',
              duration: 1500
            })
          }
        } else if (res.statusCode === 401) {
          wepy.showToast({
            title: '未授权 ，登录失败！',
            icon: 'none',
            duration: 1500
          })
        } else if (res.statusCode === 404) {
          wepy.showToast({
            title: '服务器找不到您所请求的文件或脚本！',
            icon: 'none',
            duration: 1500
          })
        } else if (res.statusCode === 500) {
          wepy.showToast({
            title: '服务器发生未知错误！',
            icon: 'none',
            duration: 1500
          })
        } else {
          wepy.showToast({
            title: '生未知错误！',
            icon: 'none',
            duration: 1500
          })
        }
      },
      fail: function () {
        wepy.showToast({
          title: '网络超时，请重新操作！',
          icon: 'none',
          duration: 1500
        })
      }
    })
  })
}

/**
 * @description GET请求
 * @author Songjp
 * @augments fullUrl 请求地址
 * @augments param 请求参数
 * @augments token 默认带token
 */
function doGet(fullUrl, param, token = true) {
  return new Promise(function (resolve, reject) {
    let header = { 'Content-Type': 'application/x-www-form-urlencoded' }
    if (token) {
      let _header = {
        token: wxsystem.getToken() || ''
      }
      header = Object.assign(header, _header)
    }
    // console.log(header)
    // console.log(`请求地址：${fullUrl}，请求参数：`)
    // console.log(param)
    wx.request({
      url: fullUrl,
      data: param,
      header: header,
      method: 'GET',
      success: function (res) {
        if (res.statusCode === 200) {
          // 业务状态3
          resolve(res.data)
        } else if (res.statusCode === 401) {
          wepy.showToast({
            title: '未授权 ，登录失败！',
            icon: 'none',
            duration: 1500
          })
        } else if (res.statusCode === 404) {
          wepy.showToast({
            title: '服务器找不到您所请求的文件或脚本！',
            icon: 'none',
            duration: 1500
          })
        } else if (res.statusCode === 500) {
          wepy.showToast({
            title: '服务器发生未知错误！',
            icon: 'none',
            duration: 1500
          })
        } else {
          wepy.showToast({
            title: '生未知错误！',
            icon: 'none',
            duration: 1500
          })
        }
      },
      fail: function () {
        wepy.showToast({
          title: '网络超时，请重新操作！',
          icon: 'none',
          duration: 1500
        })
      }
    })
  })
}

/**
 * @description post 静默请求
 * @author Songjp
 * @augments fullUrl 请求地址
 * @augments param 请求参数
 * @augments token 默认带token
 */
function silencePost(fullUrl, param, token = true) {
  return new Promise(function (resolve, reject) {
    let header = { 'Content-Type': 'application/x-www-form-urlencoded' }
    if (token) {
      let _header = {
        token: wxsystem.getToken() || ''
      }
      header = Object.assign(header, _header)
    }
    // console.log(`请求地址：${fullUrl}，请求参数：`)
    // console.log(param)
    wx.request({
      url: fullUrl,
      data: param,
      header: header,
      method: 'POST',
      success: function (res) {
        resolve(res.data)
      },
      fail: function () {
      }
    })
  })
}

/**
 * @description get 静默请求
 * @author Songjp
 * @augments fullUrl 请求地址
 * @augments param 请求参数
 * @augments token 默认带token
 */
function silenceGet(fullUrl, param, token = true) {
  return new Promise(function (resolve, reject) {
    let header = { 'Content-Type': 'application/x-www-form-urlencoded' }
    if (token) {
      let _header = {
        token: wxsystem.getToken() || ''
      }
      header = Object.assign(header, _header)
    }
    // console.log(`请求地址：${fullUrl}，请求参数：`)
    // console.log(param)
    wx.request({
      url: fullUrl,
      data: param,
      header: header,
      method: 'GET',
      success: function (res) {
        resolve(res.data)
      },
      fail: function () {
      }
    })
  })
}
export default {
  doPost,
  doGet,
  silencePost,
  silenceGet
}
