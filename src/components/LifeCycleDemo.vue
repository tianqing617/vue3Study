<script>
  import {
    h,
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
  } from 'vue'

  export default {
    name: 'LifeCycleDemo',
    
    setup(){
      console.log('---setup---')

      let sum = ref(0)

      // 通过组合式API的形式去使用生命周期钩子
      onBeforeMount(()=>{
        console.log('setup onBeforeMount')
      })
      onMounted(()=>{
        console.log('setup onMounted')
      })
      onBeforeUpdate(()=>{
        console.log('setup onBeforeUpdate')
      })
      onUpdated(()=>{
        console.log('setup onUpdated')
      })
      onBeforeUnmount(()=>{
        console.log('setup onBeforeUnmount')
      })
      onUnmounted(()=>{
        console.log('setup onUnmounted')
      })

      return {sum}
    },
    // 通过配置项的形式使用生命周期钩子
    beforeCreate() {
      console.log('vue beforeCreate')
    },
    created() {
      console.log('vue created')
    },
    beforeMount() {
      console.log('vue beforeMount')
    },
    mounted() {
      console.log('vue mounted')
    },
    beforeUpdate(){
      console.log('vue beforeUpdate')
    },
    updated() {
      console.log('vue updated')
    },
    beforeUnmount() {
      console.log('vue beforeUnmount')
    },
    unmounted() {
      console.log('vue unmounted')
    },

    render() {
      return h('div', '生命周期');
    },
  }
</script>
