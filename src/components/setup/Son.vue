<template>
  <div class="son-wrapper">
    <span>我是子组件：</span>
    <button @click="toggleStatus">切换状态</button>
  </div>
</template>

<script>
  export default {
    name: 'Son',
    props: ['status'],
    emits: ['change'],
    setup(props, context) {
      // 注意：setup 的两个重要形参
      console.log('props:', props);
      console.log('context:', context);
      // context.attrs
      // context.emit
      // context.slots

      let innerStatus = props.status;

      function toggleStatus() {
        innerStatus = !innerStatus;
        console.log('innerStatus:', innerStatus);
        context.emit('change', innerStatus);
      }

      return {
        toggleStatus,
        innerStatus,
      }
    }
  }
</script>

<style scoped>
  .son-wrapper {
    width: 500px;
    height: 150px;
    outline: 1px solid #ccc;
    text-align: center;
    line-height: 150px;
  }
</style>