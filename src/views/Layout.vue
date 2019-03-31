<template>
  <div class="outer">
    <header class="header">
      <div class="nav">
        <a-menu v-model="current" mode="horizontal">
          <a-menu-item key="list">
            <a-icon type="mail" to="/todolist"/>TodoList
            <router-link to="todolist"></router-link>
          </a-menu-item>
          <a-menu-item key="peer">
            <a-icon type="mail"/>Peer Situation
            <router-link to="peer"></router-link>
          </a-menu-item>
          <a-menu-item key="tide">
            <a-icon type="mail"/>MyTide
            <router-link to="tide"></router-link>
          </a-menu-item>
        </a-menu>
      </div>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// import Todolist from './Todolist'
export default {
  // component: {
  //   Todolist
  // },
  data () {
    return {
      current: ['list']
    }
  },
  methods: {}
}
</script>
<style lang="stylus" scoped>
.ant-menu-item-selected {
  color: rgb(25, 219, 122);
  border-bottom: 2px solid rgb(25, 219, 122);
}

.ant-menu-item:hover {
  color: rgb(25, 219, 122);
  border-bottom: 2px solid rgb(25, 219, 122);
}

.header {
  width: 374px;
  margin: 0 auto;
}

.main {
  width: 1100px;
  height: 638px;
  padding: 0 20px 20px 20px;
  // background #ccc
  border: 1px solid rgba(25, 219, 122, 1)
  margin: 25px auto;
}
</style>
