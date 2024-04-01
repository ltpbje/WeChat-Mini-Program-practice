// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0
  },
  syncCount(e){
    // console.log('子组件触发了sync');
    this.setData({
      count: e.detail.value
    })
  },
  // 发送GET请求
  getInfo(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/get',
      method:'GET',
      data:{
        name:'zs',
        age:20,
      },
      success:(res)=>{
        console.log(res)
      }
    })
  },
  postInfo(){
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/post',
      method:'POST',
      data:{
        name:'zs',
        age:20
      },
      success: (res)=>{
        console.log(res.data.data)
      }
    })
  },
  getChild(){
    const child = this.selectComponent('.customA')
    // console.log(child)
    // child.setData({
    //   count : child.properties.count + 1
    // })
    child.addCount()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})