<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  
  <hr>

  <h2>{{person.age}}</h2>
  <button @click="person.age++">增长年龄</button>
</template>

<script>
  import {ref,reactive,watch,watchEffect} from 'vue'
  export default {
    name: 'WatchEffectDemo',
    setup(){
      let sum = ref(0)
      const person = reactive({
        name: '张三',
        age: 18,
      })

      watchEffect(()=>{
        const x1 = sum.value;
        const x2 = person.age;
        console.log('watchEffect', x1, x2);
      })

      return {
        sum,
        person,
      }
    }
  }
</script>

