<template>
  <div class="list">
    <ul>
      <li>
        <div class="list_item">
          <div class="item_header"></div>
          <div class="item_body"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {}
}
</script>
<style lang="stylus" scoped>
li {
  list-style: none;
}

.list_item {
  width: 120px;
  height: 120px;
  background: #fff;
  .item_header {
    height 30%
    background pink
  }
  .item_body {
    height 70%
    background gray
  }
}
</style>
