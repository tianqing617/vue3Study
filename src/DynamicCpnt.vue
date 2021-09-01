<script>
  import { h } from 'vue'
  import CpntList from './components'

  export default {
    name: 'DynamicCpnt',
    props:['currentCpnt'],
    setup() {
      console.log(CpntList)
      if (this.currentCpnt) {
        return h(CpntList[this.currentCpnt]);
      } else {
        return h('div', 'No Component');
        // return defineComponent({ render() { return <div>Test</div> }})
        // return <div>No Components</div>
      }
    }
    
  }
</script>