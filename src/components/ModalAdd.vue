<template>
  <a-modal
    :visible="visible"
    title="编辑"
    okText="提交"
    @cancel="() => { $emit('cancel') }"
    @ok="() => { $emit('submit') }"
    :maskStyle="modalStyle"
  >
    <a-form layout="vertical" :form="form">
      <a-form-item label="内容">
        <a-input
          placeholder="请输入内容"
          v-decorator="[
              'content',
              {
                rules: [{ required: true, message: '请输入内容!' }],
              }
            ]"
        />
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      modalStyle: {
        backgroundColor: 'rgba(0,0,0,0.1)'
      }
    }
  },
  methods: {}
}
</script>
<style lang="stylus" scoped>
</style>
