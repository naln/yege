Page({
  data: {
  },

  onLogin() {
    // 这里添加登录逻辑
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  onCancel() {
    // 取消登录逻辑
    wx.showToast({
      title: '已取消登录',
      icon: 'none'
    })
  }
}) 