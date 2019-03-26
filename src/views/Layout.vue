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
.ant-menu-item-selected
  color rgb(25,219,122)
  border-bottom 2px solid rgb(25,219,122)
.ant-menu-item:hover
  color rgb(25,219,122)
  border-bottom 2px solid rgb(25,219,122)
.header
  width 483px
  margin 0 auto

.main
  width 1100px
  height 620px
  padding 0 20px 20px 20px
  // background #ccc
  margin 20px auto
</style>
