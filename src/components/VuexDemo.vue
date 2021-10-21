<template>
  <!-- 用户信息 -->
  <ul class="show">
    <li v-for="item in personList">
      <span>{{item.name}}</span>
      <span>————</span>
      <span>{{item.age}}</span>
    </li>
  </ul>

  <!-- 添加用户 -->
  <div class="handler">
    <input type="text" v-model="person.name">
    <input type="text" v-model="person.age">
    <button @click="addPerson">添加用户</button>
  </div>
</template>

<script>
  import { reactive, computed } from 'vue';
  import { useStore } from 'vuex'

  export default {
    name:'VuexDemo',
    setup(){
      // 声明store
      const store = useStore();

      // 声明person，用于表单双向绑定
      const person = reactive({
        name: '',
        age: '',
      })

      const personList = computed(() => {
        return store.state.personList;
      });

      function addPerson() {
        console.log('addPerson', person);
        store.dispatch('addPerson', {...person});

        person.name = '';
        person.age = '';
      }

      return {
        person,
        personList,
        addPerson,
      }
    }
  }
</script>

<style lang="scss" scoped>
.show {
  margin-bottom: 20px;
  margin-left: 20px;
}
.handler {
  input {
    margin-right: 10px;
  }
}
</style>
