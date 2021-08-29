<template>
  <ref-demo v-if="currentCpnt === 'ref'" />
  <hello-world v-else="currentCpnt" msg="Hello Vue + Vite" />
</template>

<script>
  import { HelloWorld, RefDemo } from './components'

  export default {
    name: 'DynamicCpnt',
    props:['currentCpnt'],
    components: {
      HelloWorld,
      RefDemo,
    },
    setup() {
    },
  }
</script>