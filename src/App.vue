<template>
  <ul class="sidebar">
    <li v-for="item in MenuData"
      @click="setCurrentItem(item)"
    >
      {{item.showName}}
    </li>
  </ul>

  <div class="main">
    <dynamic-cpnt :current-cpnt="menu.current.name"/>
  </div>
</template>

<script>
import { reactive } from 'vue'
import DynamicCpnt from './DynamicCpnt.vue';
import MenuData from './menu.json'

export default {
  name: 'App',
  components: { DynamicCpnt },
  setup() {
    const menu = reactive({
      current: {},
    });

    function setCurrentItem(item) {
      // console.log(item)
      menu.current = item;
    }

    return {
      MenuData,
      menu,
      setCurrentItem,
    }
  },
}

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="scss">
  body, ul, li {
    margin: 0px;
    padding: 0px;
  }

  #app {
    display: flex;
    height: 100vh;
    /*居中*/
    width: 760px;margin-left: 50%;
    transform: translateX(-50%);
  }

  ul.sidebar {
    list-style: none;
    width: 120px;
    margin-top: 10px;
    border-right: 1px solid #ccc;
    margin-right: 10px;
    li {
      height: 30px;
      line-height: 30px;
      cursor: pointer;
      &:hover {
        color: #1444AE;
      }
    }
  }

  .main {
    flex: 1;
    margin-top: 10px;
  }
</style>