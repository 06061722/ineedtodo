<template>
  <div class="list">
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div class="list_item">
          <div class="item_left">
            <span>{{ item }}</span>
          </div>
          <div class="item_right">
            <div class="icon_contenter">
              <i @click="handleedit">
                <modal-add
                  ref="modalAdd"
                  :visible="visible"
                  @cancel="handleCancel"
                  @submit="handleSubmit(index)"
                />
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-xingzhuanggongnengtubiao-"></use>
                </svg>
              </i>
              <i>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-xingzhuanggongnengtubiao-1"></use>
                </svg>
              </i>
              <i>
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
      visible: false
    }
  },
  methods: {
    handleedit () {
      this.visible = true
    },
    handleSubmit (index) {
      const form = this.$refs.modalAdd[index].form
      console.log(form)
      form.validateFields((err, values) => {
        if (err) {
          return
        }
        console.log('Received values of form: ', values)
        form.resetFields()
        this.visible = false
      })
    },
    handleCancel () {
      this.visible = false
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
