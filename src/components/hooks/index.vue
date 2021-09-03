<template>
  <h2>当前点击时鼠标的坐标为：</h2>

  <span>x：{{point.x}}</span>
  <br/>
  <span>y：{{point.y}}</span>
</template>

<script>
  import { ref } from 'vue'
  import usePoint from '../hooks/usePoint'

  export default {
    name: 'HooksDemo',
    setup(){
      const point = usePoint()

      return { point };
    }
  }
</script>

