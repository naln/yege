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

  // 充值按钮点击事件
  onRecharge() {
    wx.showToast({
      title: '充值功能开发中',
      icon: 'none'
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

  onShow() {
    if (typeof this.getTabBar === 'function') {
      this.getTabBar().setData({
        selected: 0  // index 页面对应的索引是 0
      })
    }
  }
}) 