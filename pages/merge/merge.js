Page({
  data: {},

  onConfirm() {
    wx.showLoading({
      title: '合并中...',
      mask: true
    });

    // TODO: 调用合并接口

    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '合并成功',
        icon: 'success',
        duration: 2000,
        success: () => {
          setTimeout(() => {
            wx.navigateBack();
          }, 2000);
        }
      });
    }, 1500);
  }
}); 