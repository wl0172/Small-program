class Touches {
  constructor() {

  }
  /**
   * 获取滑动列表的下标值
   * @param {*} e 
   */
  _getIndex(e) {
    return e.currentTarget.dataset.index
  }
  /**
   * 获取滑动过程中滑动的距离
   * @param {*} e 
   * @param {*} startX 
   */
  _getMoveX(e, startX) {
    return this.getClientX(e) - startX
  }
  /**
   *  获取滑动结束滑动的距离
   * @param {*} e 
   * @param {*} startX 
   */
  _getEndX(e, startX) {
    let touch = e.changedTouches
    if (touch.length === 1) {
      return touch[0].clientX - startX
    }
  }
  /**
   *  重置数据， 把所有的列表 left 置为 0
   * @param {*} dataList 
   */
  _resetData(dataList) {
    for (let i in dataList) {
      dataList[i].left = 0
    }
    return dataList
  }
  /**
   * 获取滑动的横坐标
   * @param {*} e 
   */
  getClientX(e) {
    let touch = e.touches
    if (touch.length === 1) {
      return touch[0].clientX
    }
  }
  /**
   * touchmove 过程中更新列表数据
   * @param {*} e 
   * @param {*} dataList 
   * @param {*} startX 
   */
  touchM(e, dataList, startX) {
    let list = this._resetData(dataList)
    list[this._getIndex(e)].left = this._getMoveX(e, startX)
    return list
  }
  /**
   * touchend 更新列表数据
   * @param {*} e 
   * @param {*} dataList 
   * @param {*} startX 
   * @param {*} width 
   */
  touchE(e, dataList, startX, width) {
    let list = this._resetData(dataList)
    let disX = this._getEndX(e, startX)
    let left = 0
    if (disX < 0) {
      // 判断滑动方向， （向左滑动）
      // 滑动的距离大于删除宽度的一半就显示操作列表 否则不显示
      if(width<=150){
        Math.abs(disX) > width / 2 ? left = -width : left = 0
      }else{
        Math.abs(disX) > width / 4 ? left = -width : left = 0
      }
    } else {
      // 向右滑动复位
      left = 0
    }
    list[this._getIndex(e)].left = left
    return list
  }
  /**
   * 删除功能
   * @param {*} e 
   * @param {*} dataList 
   */
  deleteItem(e, dataList) {
    dataList.splice(this._getIndex(e), 1)
    return dataList
  }
}

export default Touches
