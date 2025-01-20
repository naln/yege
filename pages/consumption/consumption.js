Page({
  data: {
    currentTab: 0,
    records: []
  },

  // 切换标签
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      currentTab: parseInt(tab)
    });
    this.loadRecords(tab);
  },

  // 加载记录
  loadRecords(tab) {
    // TODO: 根据tab加载不同时间段的记录
    console.log('加载记录:', tab);
  }
}); 