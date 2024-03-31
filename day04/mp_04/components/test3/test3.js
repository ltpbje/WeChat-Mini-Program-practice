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
    // 产生随机颜色
    _randomColor(){
      this.setData({
        _rgb:{
        r:Math.floor(Math.random() *256),
        g:Math.floor(Math.random() *256),
        b:Math.floor(Math.random()*256)
       }
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
    },
    // 组件生命周期函数
    // 组件生命周期声明对象，组件的生命周期：created、attached、ready、moved、detached 将收归到 lifetimes 字段内进行声明，原有声明方式仍旧有效，如同时存在两种声明方式，则 lifetimes 字段内声明方式优先级最高
    lifetimes:{
      //在组件实例刚刚被创建时执行，注意此时不能调用 setData
      created(){
        // console.log("created~~~~")
      },
      attached(){
        // console.log("attached~~~~")
      }
    },
    // pageLifetimes 组件所在页面的生命周期声明对象
    pageLifetimes:{
      // 页面生命周期回调—监听页面显示
      // 页面显示/切入前台时触发。
      show: function(){
        console.log('show')
        this._randomColor()
      },
      // 页面隐藏/切入后台时触发。 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等。
      hide:function(){
        console.log('hide')
      },
      // 所在页面尺寸变化时执行
      resize(){
        console.log('resize')
      }
    }
})