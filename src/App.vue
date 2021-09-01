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
import MenuData from './menu.js'

export default {
  name: 'App',
  components: { DynamicCpnt },
  setup() {
    // 生命周期说明，见底部
    const currentMenu = JSON.parse(window.localStorage.getItem('currentMenuName')) || {};
    const menu = reactive({
      current: currentMenu,
    });

    function setCurrentItem(item) {
      // 记录当前菜单
      menu.current = item;
      // 存入storage，方便刷新时恢复数据
      window.localStorage.setItem('currentMenuName', JSON.stringify(item));
    }

    return {
      MenuData,
      menu,
      setCurrentItem,
    }
  },
}

/*
Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钩子对应关系如下：

beforeCreate ===> setup()
created ========> setup()
beforeMount ====> onBeforeMount
mounted ========> onMounted
beforeUpdate ===> onBeforeUpdate
updated  =======> onUpdated
beforeUnmount ==> onBeforeUnmount
unmounted  =====> onUnmounted

*/
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