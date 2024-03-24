// Pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:'hello world',
    imgSrc: 'http://www.itheima.com/images/logo.png',
    randomNumber: Math.random()*10,//生成一个0到10的随机数
    randomNumber1:Math.random().toFixed(2) ,
    count:0,
    msg:'你好',
    type:1,
    flag:true,
    arr1:['华为','荣耀','vivo'],
    userList:[
      {id:1,name:'小红'},
      {id:2,name:'小白'},
      {id:3,name:'小蓝'}
    ]
  },

  tapHandler(e){
    console.log(e)
  },
  // 在事件处理函数中为data中的数据赋值：
  changCount(){
    this.setData(this.data.count += 1)
  },
  btnTap2(e){
    this.setData(this.data.count += e.target.dataset.info)
  },
  inputHandler(e){
    // 获取输入框的数据
    // console.log(e.detail.value)
    this.setData(this.data.msg = e.detail.value)
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