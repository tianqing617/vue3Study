<template>
  <div class="name">
    <p>
      <span>First:</span>
      <span>{{name.first}}</span>
    </p>
    <p>
      <span>Second:</span>
      <span>{{name.second}}</span>
    </p>

    <div class="control">
      <button @click="setNewName">set name</button>
    </div>
  </div>

  <hr />

  <div class="name2">
    <p>
      <span>First2:</span>
      <span>{{name2.first}}</span>
    </p>
    <p>
      <span>Second2:</span>
      <span>{{name2.second}}</span>
    </p>

    <div class="control">
      <button @click="setNewName2">set name2</button>
    </div>
  </div>

  <hr />

  <div class="age">
    <span>Age:</span>
    <span>{{age}}</span>
    <button @click="increaseAge">old</button>
  </div>

</template>

<script>
  import { ref, reactive } from 'vue'

  export default {
    name: 'RefDemo',
    setup() {
      // 1. 使用reactive方式
      const name = reactive({
        first: 'Liu',
        second: 'Hero',
      });

      // 2. 使用ref方式
      const name2 = ref({
        first: 'Thomax',
        second: 'Edison'
      })

      // 3. 非引用类型，只能使用ref
      let age = ref(18);

      console.log('name:', name);
      console.log('name2:', name2);
      console.log('age:', age);

      // 4. 操作
      function increaseAge() {
        age.value += 1;
      }

      function setNewName() {
        name.first = '老';
        name.second = '刘';
      }

      function setNewName2() {
        name2.value.first = '老';
        name2.value.second = '王';
      }

      return {
        name,
        name2,
        age,
        setNewName,
        setNewName2,
        increaseAge,
      }
    }
  }
</script>