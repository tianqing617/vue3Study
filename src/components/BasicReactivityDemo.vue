<template>
  <h3>响应式校验，请查看 console 和源码</h3>
  <hr>

  <h3>toRefs 测试：</h3> 
  <p>
    <span>名称：</span>
    <span>{{name}}</span>
  </p>
  <p>
    <span>价格：</span>
    <span>{{price}}</span>
  </p>
</template>

<script>
  // 响应式数据判断
  import {
    ref,
    reactive,
    toRefs,
    readonly,
    isRef,
    isReactive,
    isReadonly,
    isProxy
  } from 'vue'

  export default {
    name:'BasicReactivityDemo',
    setup(){
      let car = reactive({ name:'奔驰', price:'40W' })
      let sum = ref(0)
      let car2 = readonly(car)

      console.log('isRef', isRef(sum))
      console.log('isReactive', isReactive(car))
      console.log('isReadonly', isReadonly(car2))
      console.log('isProxy car', isProxy(car))
      console.log('isProxy sum', isProxy(sum))

      // 创建一个 ref 对象，其value值指向另一个对象中的某个属性
      return { ...toRefs(car) }
    }
  }
</script>
