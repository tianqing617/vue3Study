<template>
  <div class="name">{{name}}</div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'RefDemo',
    setup() {
      let name = ref('dog');
      
      return {
        name,
      }
    }
  }
</script>