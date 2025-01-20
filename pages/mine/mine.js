// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showServicePopup: false,
    isBlur: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if (typeof this.getTabBar === 'function') {
      this.getTabBar().setData({
        selected: 4  // mine 页面对应的索引是 4
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 跳转到卡包页面
  goToCards(e) {
    const from = e.currentTarget.dataset.from;
    wx.navigateTo({
      url: `/pages/cards/cards?from=${from}`
    })
  },

  // 跳转到意见反馈
  goToFeedback() {
    wx.navigateTo({
      url: '/pages/feedback/feedback'
    });
  },

  // 跳转到卡片合并
  goToMerge() {
    wx.navigateTo({
      url: '/pages/merge/merge'
    });
  },

  // 跳转到消费记录
  goToConsumption() {
    wx.navigateTo({
      url: '/pages/consumption/consumption'
    });
  },

  // 阻止事件冒泡
  stopPropagation() {
    // 空函数，用于阻止事件冒泡
  },

  // 显示客服弹窗
  showService() {
    this.setData({
      showServicePopup: true,
      isBlur: true
    });
  },

  // 隐藏客服弹窗
  hideService() {
    this.setData({
      showServicePopup: false,
      isBlur: false
    });
  },

  // 跳转到门店页面
  goToStore() {
    wx.switchTab({
      url: '/pages/nearby/nearby'
    });
    this.hideService();
  },

  // 拨打客服电话
  callService() {
    wx.makePhoneCall({
      phoneNumber: '400-000-0000' // 替换为实际的客服电话
    });
    this.hideService();
  }
})