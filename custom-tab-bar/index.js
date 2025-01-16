Component({
  data: {
    selected: 0,
    color: "#666666",
    list: [{
      pagePath: "/pages/index/index",
      text: "首页",
      iconPath: "/images/tabbar/home.png",
      selectedIconPath: "/images/tabbar/home-active.png"
    }, {
      pagePath: "/pages/nearby/nearby",
      text: "附近门店",
      iconPath: "/images/tabbar/nearby.png",
      selectedIconPath: "/images/tabbar/nearby-active.png"
    }, {
      pagePath: "/pages/scan/scan",
      text: "扫码洗车",
      iconPath: "/images/tabbar/scan.png",
      selectedIconPath: "/images/tabbar/scan-active.png",
      isSpecial: true
    }, {
      pagePath: "/pages/share/share",
      text: "分享有奖",
      iconPath: "/images/tabbar/share.png",
      selectedIconPath: "/images/tabbar/share-active.png"
    }, {
      pagePath: "/pages/mine/mine",
      text: "我的",
      iconPath: "/images/tabbar/mine.png",
      selectedIconPath: "/images/tabbar/mine-active.png"
    }]
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      const index = data.index
      
      // 扫码按钮特殊处理
      if (data.isSpecial) {
        wx.scanCode({
          success: (res) => {
            console.log('扫码结果：', res)
            // 处理扫码结果
          },
          fail: (err) => {
            console.error('扫码失败：', err)
          }
        })
        return
      }

      // 先更新选中状态
      this.setData({
        selected: index
      })

      wx.switchTab({
        url
      })
    }
  }
}) 