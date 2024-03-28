// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query:{},
    page:1,
    pageSize:10,
    total:0,
    shopList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query:options
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title
    })
    // 获取商品列表数据
    this.getShopList()
  },
  getShopList(){
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: `https://applet-base-api-t.itheima.net/categories/${this.data.query.id}/shops`,
      method:"GET",
      data:{
          _page:this.data.page,
          _limit:this.data.pageSize  
      },
      success:(res)=>{
        this.setData({
          shopList: [...this.data.shopList,...res.data],
          total:res.header['X-Total-Count'] - 0
        })
      },
      complete:()=>{
        wx.hideLoading()
      }    
    })
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