// pages/store/store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 这里可以接收上一页传来的门店信息
    // const { id } = options;
    // 获取门店详情
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

  contactStore() {
    wx.makePhoneCall({
      phoneNumber: '10086' // 这里替换为实际的电话号码
    })
  },

  navigateToStore() {
    wx.openLocation({
      latitude: 23.099994,
      longitude: 113.324520,
      name: '野阁智能洗车房（万达广场店）',
      address: '具体地址'
    })
  }
})