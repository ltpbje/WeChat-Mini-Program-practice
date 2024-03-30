// components/test/test.js
Component({
  
  /**
   * 组件的属性列表
   */
  properties: {
    // 完整写法
    // max:{
    //   type:Number,
    //   value:10
    // },

    // 简易写法
    max : Number
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
      // 设置count的最大限制 不能超过this.properties.max
      if(this.data.count>=this.properties.max) return
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