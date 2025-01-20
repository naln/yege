Page({
  data: {},

  // 开门
  onOpen() {
    wx.showToast({
      title: '开门指令已发送',
      icon: 'none'
    });
  },

  // 关门
  onClose() {
    wx.showToast({
      title: '关门指令已发送',
      icon: 'none'
    });
  },

  // 紧急暂停
  onEmergency() {
    wx.showModal({
      title: '确认暂停',
      content: '确定要紧急暂停吗？',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '暂停指令已发送',
            icon: 'none'
          });
        }
      }
    });
  }
}); 