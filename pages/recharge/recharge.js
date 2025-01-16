Page({
  data: {
    currentTab: 0,
    rechargeOptions: [
      {
        amount: 50,
        bonus: 15,
        tag: '特效优惠：1元'
      }
      // 可以添加更多充值选项
    ]
  },

  // 切换标签页
  switchTab(e) {
    const tab = parseInt(e.currentTarget.dataset.tab);
    this.setData({
      currentTab: tab
    });
  },

  // swiper切换事件
  swiperChange(e) {
    this.setData({
      currentTab: e.detail.current
    });
  }
}) 