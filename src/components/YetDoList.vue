<template>
  <div class="list">
    <modal-add ref="modalAdd" :visible="visible" @cancel="handleCancel" @submit="handleSubmit()"/>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="list_item">
          <div class="item_left">
            <span>{{ item[0] }}</span>
          </div>
          <div class="item_right">
            <div class="icon_contenter">
              <i @click="handleEdit(index)">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-xingzhuanggongnengtubiao-"></use>
                </svg>
              </i>
              <i @click="handleDone(index)">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-xingzhuanggongnengtubiao-1"></use>
                </svg>
              </i>
              <i @click="handleTrash(index)">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-xingzhuanggongnengtubiao-2"></use>
                </svg>
              </i>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ModalAdd from '_c/ModalAdd'
import { updateContent, updateStatus, deleteContent } from '@/api/todolist.js'
export default {
  components: { ModalAdd },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      visible: false,
      index: 0,
      content: ''
    }
  },
  methods: {
    handleEdit (index) {
      this.visible = true
      this.index = index
      this.content = this.list[index][0]
      const form = this.$refs.modalAdd.form
      this.$nextTick(() => {
        form.setFieldsValue({ 'content': this.content })
      })
    },
    handleSubmit () {
      const form = this.$refs.modalAdd.form
      form.validateFields(async (err, values) => {
        if (err) {
          return
        }
        await updateContent(this.list[this.index][1], values.content)
        this.$emit('update')
        form.resetFields()
        this.visible = false
        this.$message.success('编辑成功')
      })
    },
    handleCancel () {
      this.visible = false
    },
    async handleDone (index) {
      this.index = index
      await updateStatus(this.list[this.index][1])
      this.$emit('update')
    },
    async handleTrash (index) {
      this.index = index
      await deleteContent(this.list[this.index][1])
      this.$emit('update')
    }
  }
}
</script>
<style lang="stylus" scoped>
.list {
  margin: 10px;
}

ul {
  height: 280px;
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
      font-size: 20px;
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
