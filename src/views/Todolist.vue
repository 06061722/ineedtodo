<template>
  <div class="list">
    <header class="list_header">
      <span class="font">
        Todo
        <span class="font_b">List</span>
      </span>
    </header>
    <main class="list_contenter">
      <div class="todo">
        <h2>待办事项</h2>
        <div style="height: 32px">
          <a-button class="button_1" type="primary" @click="handleShow">添加</a-button>
          <a-input class="input_1" placeholder="我要完成..." v-show="isAdd" v-model="addedContent"/>
          <a-button class="button_2" type="primary" v-show="isAdd" @click="handleAdd">确定添加</a-button>
        </div>
        <yet-do-list :list="todoList" @update="handleUpdate"></yet-do-list>
      </div>
      <div class="done">
        <h2>完成</h2>
        <done-list :list="doneList" @update="handleUpdate"></done-list>
      </div>
    </main>
  </div>
</template>

<script>
import YetDoList from '_c/YetDoList.vue'
import DoneList from '_c/DoneList.vue'
import { getTodoAndDoneList, addContent } from '@/api/todolist'
import { mapState } from 'vuex'
export default {
  components: {
    YetDoList,
    DoneList
  },
  data () {
    return {
      isAdd: false,
      addedContent: '',
      todoList: [],
      doneList: []
    }
  },
  computed: {
    ...mapState(['UserId'])
  },
  methods: {
    handleShow () {
      this.isAdd = !this.isAdd
    },
    async handleAdd () {
      if (this.addedContent.trim() === '') {
        this.$message.warning('内容为空')
        return
      }
      await addContent(this.UserId, this.addedContent)
      this.handleUpdate()
      this.addedContent = ''
      this.$message.success('添加成功')
    },
    handleUpdate () {
      let todoList = []
      let doneList = []
      getTodoAndDoneList(this.UserId).then(res => {
        res.data.forEach(item => {
          if (!item.status) todoList.push([item.content, item._id])
          else doneList.push([item.content, item._id])
        })
        this.todoList = todoList
        this.doneList = doneList
      })
    }
  },
  mounted () {
    this.handleUpdate()
  }
}
</script>
<style lang="stylus" scoped>
.list_header {
  text-align: center;

  .font {
    font-family: 'Segoe UI';
    font-size: 25px;
    font-weight: 700;
    vertical-align: top;

    .font_b {
      color: rgb(176, 163, 167);
      font-weight: 400;
    }
  }
}

.button_1, .button_2, .input_1 {
  display: inline-block;
}

.ant-btn-primary {
  background-color: rgba(25, 219, 122, 1);
  border-color: #fff;
}

.ant-btn-primary:hover {
  background-color: rgba(25, 219, 122, 0.4);
  border-color: #fff;
}

.ant-input:hover, .ant-input:focus {
  border-color: rgba(25, 219, 122, 1);
}

.input_1 {
  width: 350px;
  margin-left: 30px;
  margin-right: 10px;
}
</style>
