Page({
  data: {
    // 页面的初始数据
  },
  onLoad() {
    // 页面加载时执行
  },
  onShow() {
    if (typeof this.getTabBar === 'function') {
      this.getTabBar().setData({
        selected: 2  // scan 页面对应的索引是 2
      })
    }
  }
}) 