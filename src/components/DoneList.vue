<template>
  <div class="list">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="list_item">
          <div class="item_left">
            <span>{{ item[0] }}</span>
          </div>
          <div class="item_right">
            <div class="icon_contenter">
              <i @click="handleBack(index)">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-xingzhuanggongnengtubiao-4"></use>
                </svg>
              </i>
              <i @click="handleDelete(index)">
                <a-popconfirm title="确定删除吗?" @confirm="confirm" okText="Yes" cancelText="No">
                  <a href="#">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-xingzhuanggongnengtubiao-2"></use>
                    </svg>
                  </a>
                </a-popconfirm>
              </i>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { updateStatus, deleteContent } from '@/api/todolist.js'
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    async handleBack (index) {
      this.index = index
      await updateStatus(this.list[this.index][1])
      this.$emit('update')
    },
    handleDelete (index) {
      this.index = index
    },
    async confirm () {
      await deleteContent(this.list[this.index][1])
      this.$emit('update')
      this.$message.success('删除成功')
    }
  }
}
</script>
<style lang="stylus" scoped>
.list {
  margin: 10px;
}

ul {
  height: 175px;
  overflow: auto;
  margin: 0;
  padding: 0;
  // background: #eee;
}

li {
  list-style: none;
}

.list_item {
  width: 700px;
  height: 35px;
  background: #fff;
  margin-left: 83px;
  margin-bottom: 15px;
  border-bottom: 1px solid #aaa;

  .item_left {
    width: 70%;
    height: 100%;
    // background: gray;
    float: left;
    padding: 5px;

    span {
      color: rgb(89, 89, 89);
      font-weight: 600;
      font-size: 16px;
    }
  }

  .item_right {
    width: 30%;
    height: 100%;
    // background: pink;
    float: right;
    position: relative;

    .icon_contenter {
      position: absolute;
      top: 5px;
      right: 5px;

      .icon {
        margin-right: 5px;
        font-size: 25px;
      }

      .icon:hover {
        cursor: pointer;
        background: #ddd;
      }
    }
  }
}
</style>
