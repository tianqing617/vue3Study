<script>
  import { h } from 'vue'
  import CpntList from './components'

  export default {
    name: 'DynamicCpnt',
    props:['currentCpnt'],
    render() {
      console.log(CpntList)
      if (this.currentCpnt) {
        return h(CpntList[this.currentCpnt]);
      } else {
        return h('div', 'No Component');
      }
    }
    
  }
</script>