<template>
  <div class="list">
    <header class="list_header">
      <span>IneedtoDo</span>
      <span>List</span>
    </header>
    <main class="list_contenter">
      <div class="todo">
        <h2>待办事项</h2>
        <a-button class="button_1" type="primary">添加</a-button>
        <a-input class="input_1" placeholder="Basic usage"/>
        <a-button class="button_2" type="primary">确定添加</a-button>
        <yet-do-list></yet-do-list>
      </div>
      <div class="done"></div>
    </main>
  </div>
</template>

<script>
import YetDoList from '_c/YetDoList.vue'
export default {
  components: {
    YetDoList
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>
<style lang="stylus" scoped>
.button_1, .button_2, .input_1 {
  display: inline-block;
}

.input_1 {
  width: 350px;
}
</style>
