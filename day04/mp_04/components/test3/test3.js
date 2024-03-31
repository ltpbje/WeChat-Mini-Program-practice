// components/test3/test3.js
Component({

  /**
   * 组件的属性列表
   */
  options:{
    pureDataPattern:/^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    _rgb:{
      r:0,
      g:0,
      b:0
    },
    fullColor: '0,0,0'
  },  

  /**
   * 组件的方法列表
   */
  methods: {
    changeR(){
      this.setData({
        '_rgb.r':this.data._rgb.r <255 ?  this.data._rgb.r +5 : 255 
      })
    },
    changeG(){
      this.setData({
        '_rgb.g':this.data._rgb.g <255 ?  this.data._rgb.g +5 : 255 
      })
    },
    changeB(){
      this.setData({
        '_rgb.b':this.data._rgb.b <255 ?  this.data._rgb.b +5 : 255 
      })
    },
   },
   observers:{
    // '_rgb.r,_rgb.g,_rgb.b' : function(r,g,b){
    //   this.setData({
    //     fullColor:`${r},${g},${b}`
    //   })
    // },
    '_rgb.**': function(rgb){
      this.setData({
        fullColor:`${rgb.r},${rgb.g},${rgb.b}`
      })
    }
    }
})