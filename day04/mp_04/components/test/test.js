// components/test/test.js
Component({
  
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    count:0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 事件处理函数
    addCount(){
      this.setData({
        count:this.data.count + 1
      })
      this._showCount()
    },
    // 自定义函数
    _showCount(){
      wx.showToast({
        title: `count是${this.data.count}`,
        icon:"none"
      })
    }
  }
})