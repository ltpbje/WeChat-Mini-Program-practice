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
    shopList:[],
    isLoading:false
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
  getShopList(cb){
    this.setData({
      isLoading:true
    })
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
        this.setData({
          isLoading:false
        })
        // cb参数存在的话执行cb() 关闭下拉刷新
        cb&& cb()
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
    // 重置一些关键性数据
    this.setData({
      page:1,
      shopList:[],
      total:0
    })
    // 重新获取数据
    this.getShopList(()=>{
      // 关闭下拉刷新
      wx.stopPullDownRefresh()
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if(this.data.page*this.data.pageSize >=this.data.total)
    {
      return  wx.showToast({
        title: '数据加载完毕!',
        icon:'none'
      })
    }
    // 判断是否还在加载
    if(this.data.isLoading) return
    this.setData({
      page:this.data.page + 1
    })
    this.getShopList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})