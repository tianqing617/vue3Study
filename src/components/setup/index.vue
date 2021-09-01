<template>
  <span>我是父组件</span>
  <span>子组件的状态是：{{status}}</span>
  <son-demo :status="status" @change="setStatus"></son-demo>
</template>

<script>
  import { ref } from 'vue';
  import SonDemo from './Son.vue';

  export default {
    name: 'SetupDemo',
    components: { SonDemo },
    setup() {
      let status = ref(true);


      function setStatus(s) {
        console.log('outer:', s);
        status.value = s;
      }

      return {
        status,
        setStatus,
      }
    }
  }
</script>