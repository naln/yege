Page({
  data: {
    userInfo: {
      avatarUrl: '',
      nickName: '用户名'
    },
    notices: [
      '客户登录进来自动播放公告内容和语音 播放完公告栏变小',
      ''
    ]
  },

  onLoad: function() {
    // 获取用户信息
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    })
  },

  // 扫码按钮点击事件
  onScanCode() {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },

  // 充值按钮点击事件
  goToRecharge() {
    wx.navigateTo({
      url: '/pages/recharge/recharge'
    })
  },

  // 团购券核销入口点击事件
  goToVerify() {
    wx.navigateTo({
      url: '/pages/verify/verify'
    })
  },

  onShow() {
    if (typeof this.getTabBar === 'function') {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },

  // 跳转到卡包页面
  goToCards(e) {
    const from = e.currentTarget.dataset.from;
    wx.navigateTo({
      url: `/pages/cards/cards?from=${from}`
    })
  },

  // 跳转到门控开关
  goToDoor() {
    wx.navigateTo({
      url: '/pages/door/door'
    });
  }
}) 