Page({
  data: {
    platform: 'douyin' // 默认选中抖音
  },

  // 切换平台
  switchPlatform(e) {
    const platform = e.currentTarget.dataset.platform;
    this.setData({
      platform
    });
  },

  // 扫码
  scanCode() {
    wx.scanCode({
      success: (res) => {
        console.log('扫码结果：', res);
        // 处理扫码结果
      }
    });
  },

  // 确认按钮
  onConfirm() {
    // 处理核销逻辑
  }
}); 