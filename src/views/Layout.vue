<template>
  <div class="outer">
    <header class="header">
      <div class="nav">
        <a-menu v-model="current" mode="horizontal">
          <a-menu-item key="list">
            <a-icon type="mail"/>Navigation One
          </a-menu-item>
          <a-menu-item key="peer">
            <a-icon type="mail"/>Navigation One
          </a-menu-item>
          <a-menu-item key="tide">
            <a-icon type="mail"/>Navigation One
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
.header
  width 483px
  margin 0 auto

.main
  width 800px
  height 520px
  background #ccc
  margin 20px auto
</style>
