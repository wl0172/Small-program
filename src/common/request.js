// import config from '@/config/index'
// import { getToken } from '@/utils/auth'

// const HTTP_STATUS = {
//   SUCCESS: 200,
//   CREATED: 201,
//   ACCEPTED: 202,
//   CLIENT_ERROR: 400,
//   AUTHENTICATE: 301,
//   FORBIDDEN: 403,
//   NOT_FOUND: 404,
//   SERVER_ERROR: 500,
//   BAD_GATEWAY: 502,
//   SERVICE_UNAVAILABLE: 503,
//   GATEWAY_TIMEOUT: 504
// }

// export default {
//   /**
//    * @author Kip song
//    * @param {*} params
//    * @param {*} method
//    */
//   baseOptions(params, method = "GET",contentType={}) {
//     return new Promise(function (resolve, reject) {
//       let { url, data } = params
//       let _contentType = "application/json"
//       _contentType = contentType.contentType || _contentType
//       console.log(_contentType)
//       console.log(url.indexOf("http") !== -1 ? url : config.url + url, '请求')
//       if (getToken()) {
//         data = Object.assign({ sid: getToken() || '' }, data)
//       }
//       const option = {
//         url: (url.indexOf("http") !== -1 ? url : config.url + url),
//         data: data,
//         method: method,
//         header: { 'content-type': _contentType, 'sid': getToken() ,packageName:'MINI_PRO_SUPPLY_MALL'},
//         success(res) {
//           console.log(res)
//           if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
//             wx.hideLoading()
//             wx.showToast({
//               title: '服务器找不到您所请求的文件或脚本！',
//               icon: 'none',
//               duration: 1000
//             })
//           } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
//             wx.hideLoading()
//             wx.showToast({
//               title: '服务端异常，请稍后尝试！',
//               icon: 'none',
//               duration: 1000
//             })
//           } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
//             wx.hideLoading()
//             wx.showToast({
//               title: '没有权限访问！',
//               icon: 'none',
//               duration: 1000
//             })
//           } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
//             let _data = res.data
//             if (data && data.ISRETURN) {
//               resolve(_data)
//             }
//             else if (_data.state == 1) {
//               resolve(_data)
//             } else if (_data.state == 3) {
//               resolve(_data)
//             } else {
//               wx.showToast({
//                 title: _data.msg || _data.message || `错误状态${_data.code}`,
//                 icon: 'none',
//                 duration: 1000
//               })
//             }
//           } else {
//             wx.hideLoading()
//             wx.showToast({
//               title: '网络出现故障，请重新尝试！',
//               icon: 'none',
//               duration: 1000
//             })
//           }
//         },
//         fail(e) {
//           wx.showToast({
//             title: '网络超时，请重新操作！',
//             icon: 'none',
//             duration: 1000
//           })
//         }
//       }
//       wx.request(option)
//     })
//   },
//   /**
//      * GET请求
//      * @param url 请求路径
//      * @param data 参数
//      */
//   get(url, data) {
//     let option = { url, data }
//     return this.baseOptions(option, "GET")
//   },
//   /**
//    * POST请求
//    * @param url 请求路径
//    * @param data 参数
//    */
//   post(url, data,contentType) {
//     let option = { url, data }
//     return this.baseOptions(option, "POST",contentType)
//   },
//   /**
//    * PUT请求
//    * @param url 请求路径
//    * @param data 参数
//    */
//   put(url, data) {
//     let option = { url, data }
//     return this.baseOptions(option, "PUT")
//   },
//   /**
//    * DELETE请求
//    * @param url 请求路径
//    * @param data 参数
//    */
//   delete(url, data) {
//     let option = { url, data }
//     return this.baseOptions(option, "DELETE")
//   }
// }
