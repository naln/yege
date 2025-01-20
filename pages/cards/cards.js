Page({
  data: {
    currentTab: 0,
    from: ''  // 来源标记
  },

  onLoad(options) {
    if (options.from) {
      this.setData({
        from: options.from
      });
    }
  },

  // 切换标签页
  switchTab(e) {
    const tab = parseInt(e.currentTarget.dataset.tab);
    this.setData({
      currentTab: tab
    });
  },

  // 联系门店
  contactStore() {
    wx.makePhoneCall({
      phoneNumber: '10086' // 这里替换为实际的电话号码
    })
  }
}) 