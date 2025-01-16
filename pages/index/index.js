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

  onShow() {
    if (typeof this.getTabBar === 'function') {
      this.getTabBar().setData({
        selected: 0
      })
    }
  }
}) 