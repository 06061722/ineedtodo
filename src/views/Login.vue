<template>
  <div class="login-wrapper">
    <div class="login-title">
      <img class="login-title-icon" src="@/assets/logo.png">
      <div>登陆</div>
    </div>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
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
        <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>
        <div class="register">
          <span>Or&nbsp;</span>
          <a href="/register">register now!</a>
        </div>
        <a class="login-form-forgot" href='#' @click="handleForget">忘记密码</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this)
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          login(values).then(res => {
            if (res.error_code === 0) {
              const UserId = res.data.user_id
              this.$store.dispatch('setUserId', UserId)
              localStorage.setItem('UserId', UserId)
              this.$router.push('todolist')
              this.$message.success('登陆成功')
            } else {
              this.$message.warning('登陆失败')
            }
          }
          ).catch(err => console.log(err))
        }
      })
    },
    handleForget () {
      this.$message.warning('未开放此功能')
    }
  }
}
</script>
<style lang="stylus" scoped>
.login-wrapper {
  text-align: center;
}

.login-form {
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

.login-form-forgot {
  float: right;
}

.login-form-button {
  width: 100%;
}
</style>
