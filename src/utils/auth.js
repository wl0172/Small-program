const Token = "token"

export function getToken() {
  return wx.getStorageSync(Token) || ""
}

export function setToken(data) {
  wx.setStorageSync(Token, data)
}

export function removeToken() {
  wx.removeStorageSync(Token)
}
