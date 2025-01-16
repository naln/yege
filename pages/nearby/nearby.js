Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
  },

  onLoad() {
    this.getLocation()
  },

  onShow() {
    if (typeof this.getTabBar === 'function') {
      this.getTabBar().setData({
        selected: 0  // nearby 页面现在是首页，索引为 0
      })
    }
  },

  // 获取当前位置
  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },

  // 刷新地图
  refreshMap() {
    this.getLocation()
  },

  // 联系门店
  contactStore() {
    wx.makePhoneCall({
      phoneNumber: '10086' // 这里替换为实际的电话号码
    })
  },

  // 导航到店
  navigateToStore() {
    wx.openLocation({
      latitude: this.data.latitude,
      longitude: this.data.longitude,
      name: '网点名称',
      address: '具体地址'
    })
  },

  // 切换地图模式
  switchMapMode() {
    // 实现地图模式切换逻辑
  },

  goToStoreDetail() {
    wx.navigateTo({
      url: '/pages/store/store'
    })
  }
}) 