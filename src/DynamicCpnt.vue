<script>
  import { h } from 'vue'
  import CpntList from './components'

  export default {
    name: 'DynamicCpnt',
    props:['currentCpnt'],
    // components: {
    //   HelloWorld,
    //   RefDemo,
    // },
    render() {
      console.log(CpntList)
      if (this.currentCpnt) {
        return h(CpntList[this.currentCpnt]);
      } else {
        return h('div', '组件不存在');
      }
      // return h(HelloWorld);
    }
    
  }
</script>