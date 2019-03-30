<template>
  <div class="register-wrapper">
    <div class="register-title">
      <img class="register-title-icon" src="@/assets/logo.png">
      <div>注册 (゜-゜)つロ</div>
    </div>
    <a-form
      id="components-form-demo-normal-register"
      :form="form"
      class="register-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
          placeholder="Username"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
          type="password"
          placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="register-form-button">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { register } from '@/api/user.js'
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          register().then(res => {
            if (res.code === 200 && res.data.token) {
              // setToken(res.data.token)
              console.log(res)
              this.$router.push('login')
              this.$message.success('注册成功')
            } else {
              this.$message.warning('用户名已被使用')
            }
          }
          ).catch(err => console.log(err))
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.register-wrapper {
  text-align: center;
}

.register-form {
  margin: auto;
  margin-top: 20px;
  max-width: 300px;

  .checkbox {
    float: left;
  }

  .register {
    float: left;
  }
}

.register-form-forgot {
  float: right;
}

.register-form-button {
  width: 100%;
}
</style>
