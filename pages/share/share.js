Page({
  data: {
    showRules: false
  },

  onLoad() {
    // 页面加载时执行
  },

  onShow() {
    if (typeof this.getTabBar === 'function') {
      this.getTabBar().setData({
        selected: 3
      })
    }
  },

  // 分享按钮点击事件
  onShare() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },

  // 显示规则弹窗
  showRules() {
    this.setData({
      showRules: true
    })
  },

  // 隐藏规则弹窗
  hideRules() {
    this.setData({
      showRules: false
    })
  },

  // 阻止弹窗内容点击事件冒泡
  stopPropagation() {
    return
  }
}) 