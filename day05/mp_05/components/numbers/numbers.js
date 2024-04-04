// components/numbers/numbers.js
import {storeBindingsBehavior} from 'mobx-miniprogram-bindings'
import {store} from '../../store/store'
Component({
  behaviors:[storeBindingsBehavior], //通过storeBindingsBehavior来实现自动绑定
  /**
   * 组件的属性列表
   */
  storeBindings:{
    store,//指定要绑定的Store
    fields:{
      numA:()=>store.numA, //绑定字段的第1种方式
      numB:(store)=>store.numB,//绑定字段的第2种方式
      sum:'sum' //绑定字段的第3种方式
    },
    actions:{//指定要绑定的方法
      updateNum2:'updateNum2'
    }
  },

  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    btnHandle2(e){
      this.updateNum2(e.target.dataset.step)
    }
  }
})