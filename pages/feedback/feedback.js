Page({
  data: {
    phone: '',
    selectedOption: '',
    suggestion: ''
  },

  // 手机号输入
  onPhoneInput(e) {
    this.setData({
      phone: e.detail.value
    });
  },

  // 选项改变
  onOptionChange(e) {
    this.setData({
      selectedOption: e.detail.value
    });
  },

  // 建议输入
  onSuggestionInput(e) {
    this.setData({
      suggestion: e.detail.value
    });
  },

  // 提交表单
  onSubmit() {
    const { phone, selectedOption, suggestion } = this.data;
    
    if (!phone) {
      wx.showToast({
        title: '请输入手机号',
        icon: 'none'
      });
      return;
    }

    if (!selectedOption) {
      wx.showToast({
        title: '请选择反馈类型',
        icon: 'none'
      });
      return;
    }

    // TODO: 提交数据到服务器
    console.log('提交数据：', {
      phone,
      selectedOption,
      suggestion
    });

    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000,
      success: () => {
        setTimeout(() => {
          wx.navigateBack();
        }, 2000);
      }
    });
  }
}); 