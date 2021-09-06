<script>
  import { h } from 'vue';

  export default {
    name: 'RenderDemo',
    render() {
      return h('div', 'render demo');
      
      // const Bar = defineComponent({ render() { return <div>Test</div> }});
      // return Bar;

      // return <div>Vue 3.0</div>;
    },
  }
</script>