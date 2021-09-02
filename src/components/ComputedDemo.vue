<template>
  <div class="name">
    <p>
      <span>姓：</span>
      <span>{{person.first}}</span>
    </p>

    <p>
      <span>名：</span>
      <span>{{person.second}}</span>
    </p>
    <p>
      <span>全称：</span>
      <span>{{person.fullname}}</span>
    </p>
  </div>
  <hr>

  <div class="input">
    <p>
      <span>全称：</span>
      <input type="text" v-model="person.fullname">
    </p>
  </div>
</template>

<script>
  import { reactive, computed } from 'vue';
  export default {
    name: 'ComputedDemo',
    setup() {
      const person = reactive({
        first: 'Liu',
        second: 'hero',
      });

      person.fullname = computed({
        get() {
          if (person.first) {
            return person.first + '-' + person.second;
          } else {
            return '';
          }
        },
        set(value) {
          const nameArr = value.split('-');
          console.log('value:', value, nameArr);

          if (nameArr && nameArr.length === 2) {
            person.first = nameArr[0];
            person.second = nameArr[1];
          } else {
            person.first = '';
            person.second = '';
          }
        }
      })

      return {
        person,
      }
    },
  }
</script>
