// import request from "@/common/request"
// import { getToken } from '@/utils/auth'

// /**
//  * 获取首页模版
//  * @param {*} data
//  */
// export function getDashboardModule(data) {
//   return request.get(
//     '/common-api/m/minipro/index-page/info/get',
//     data
//   )
// }

// /**
//  * 登录
//  * @param {*} data
//  */
// export function authLogin(data) {
//   return request.post(
//     '/sns-api/m/wechat-minipro/auth-login',
//     data
//   )
// }

// /**
//  *  商品详情
//  * @param {*} data
//  */
// export function poductDetail(data) {
//   return request.get(
//     '/mall-api/m/product/detail',
//     data
//   )
// }

// /**
//  *  获取地址信息
//  * @param {*} data
//  */
// export function getRegionList(data) {
//   return request.get(
//     '/common-api/m/region/data-region/get',
//     data
//   )
// }

// /**
//  * 获取商品规格
//  * @param {*} data
//  */
// export function getProductSKU(data) {
//   return request.get(
//     '/mall-api/m/product/specification-detail/get',
//     data
//   )
// }

// /**
//  * 填写订单
//  * @param {*} data
//  */
// export function orderInit(url, data) {
//   return request.post(
//     url,
//     data
//   )
// }


// /**
//  * ljw-地址列表
//  * @param {*} data
//  */
// export function getShippingAddressList(data) {
//   return request.post(
//     '/order-api/m/mall/receipt-address/list',
//     data,
//     { contentType: 'application/x-www-form-urlencoded' }
//   )
// }


// /**
//  * ljw-保存地址
//  * @param {*} data
//  */
// export function addAddress(data) {
//   return request.post(
//     '/order-api/m/mall/v1/receipt-address/save?sid=' + getToken(),
//     data
//   )
// }

// /**
//  * 获取地址/默认地址
//  * @param {*} data
//  */
// export function addAddressList(url, data) {
//   return request.post(
//     url,
//     data
//   )
// }

// /**
//  * 创建订单
//  * @param {*} data
//  */
// export function createOrder(data) {
//   return request.post(
//     '/order-api/m/mall/create?sid=' + getToken(),
//     data
//   )
// }


// /**
//  * 订单算价
//  * @param {*} data
//  */
// export function getCalculate(data) {
//   return request.post(
//     '/order-api/m/mall/price/calculate?sid=' + getToken(),
//     data
//   )
// }

// /**
//  * 获取用户信息
//  * @param {*} data
//  */
// export function getMemberInfo(data) {
//   return request.post(
//     '/user-api/m/member/user-info/get?sid=' + getToken(),
//     data
//   )
// }

// /**
//  * 获取资产信息
//  * @param {*} data
//  */
// export function getAssetsInfo(data) {
//   return request.get(
//     '/asset-api/m/asset/all/get?sid=' + getToken(),
//     data
//   )
// }


// /**
//  * 微信支付
//  * @param {*} data
//  */
// export function wxApply(data) {
//   return request.post(
//     '/pay-api/m/pay/apply/submit?sid=' + getToken(),
//     data
//   )
// }


// /**
//  * 获取订单信息接口
//  * @param {*} data
//  */

// export function getOrderInfo(url, data) {
//   return request.post(
//     url,
//     data
//   )
// }


// /**
//  * 获取支付方式接口
//  * @param {*} data
//  */

// export function getPayMode(url, data) {
//   return request.post(
//     url,
//     data
//   )
// }


// /**
//  * 获取订单各状态数量
//  * @param {*} data
//  */
// export function getOrderCount(param) {
//   return request.post(
//     '/order-api/m/mall/order-state/count/get?sid=' + getToken() + param
//   )
// }


// /**
//  * 删除收货地址
//  * @param {*} data
//  */
// export function delReceiptAddressById(data) {
//   return request.post(
//     '/order-api/m/mall/receipt-address/delete?sid=' + getToken(),
//     data,
//     { contentType: 'application/x-www-form-urlencoded' }
//   )
// }


// /**
//  * 获取模板
//  * @param {*} data
//  */
// export function getModule(data) {
//   return request.post(
//     '/common-api/m/supplier/module/info/3',
//     data,
//   )
// }

// /**
//  * 获取模板列表
//  * @param {*} data
//  */
// export function getModuleList(data) {
//   return request.post(
//     '/mall-api/m/love-product-list/get',
//     data,
//   )
// }

// /**
//  * 获取专题列表
//  * @param {*} data
//  */
// export function getSpecialConfig(data) {
//   return request.get(
//     '/common-api/m/special/broker-show/get?sid=' + getToken(),
//     data,
//   )
// }

// /**
//  * 获取二维码
//  * @param {*} data
//  */
// export function getQrCode(data) {
//   return request.post(
//     '/sns-api/m/wechat-minipro/qr-code/get?sid='+getToken(),
//     data,
//   )
// }
