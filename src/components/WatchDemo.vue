<template>
  <span>watch 详细使用，见源码</span>
</template>

<script>
  import { ref,reactive,watch } from 'vue'

  export default {
    name: 'WatchDemo',
    setup() {
      // 数据
      let sum = ref(0)
      let msg = ref('你好啊')
      let person = reactive({
        name:'张三',
        age:18,
        job:{
          j1:{
            salary:20
          }
        }
      })

      // 情况一：监视ref所定义的一个响应式数据
      /* watch(sum,(newValue,oldValue)=>{
        console.log('sum变了',newValue,oldValue)
      },{immediate:true}) */

      // 情况二：监视ref所定义的多个响应式数据
      /* watch([sum,msg],(newValue,oldValue)=>{
        console.log('sum或msg变了',newValue,oldValue)
      },{ immediate:true }) */

      /* 
        情况三：监视reactive所定义的一个响应式数据的全部属性
            1.注意：此处无法正确的获取oldValue
            2.注意：强制开启了深度监视（deep配置无效）
      */
      /* watch(person,(newValue,oldValue)=>{
        console.log('person变化了',newValue,oldValue)
      },{deep:false}) //此处的deep配置无效 */

      // 情况四：监视reactive所定义的一个响应式数据中的某个属性
      /* watch(()=>person.name,(newValue,oldValue)=>{
        console.log('person的name变化了',newValue,oldValue)
      })  */

      // 情况五：监视reactive所定义的一个响应式数据中的某些属性
      /* watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
        console.log('person的name或age变化了',newValue,oldValue)
      })  */

      // 特殊情况
      /* watch(()=>person.job,(newValue,oldValue)=>{
        console.log('person的job变化了',newValue,oldValue)
      },{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效 */

      return {
        sum,
        msg,
        person
      }
    }
  }
</script>