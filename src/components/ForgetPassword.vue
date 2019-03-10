<template>
  <div class="forget-password">
    <img alt="Vue logo" src="../assets/logo.png">

    <van-cell-group>
      <van-field v-model="phone" center label="手机号" placeholder="请输入手机号" >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
      <van-field v-model="sms" label="短信验证码" placeholder="请输入短信验证码" />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
      <van-field v-model="passwordRepeat" type="password" label="确认密码" placeholder="请再次输入密码" />
    </van-cell-group>

    <van-row type="flex" justify="center">
      <van-col span="20">
        <van-button round type="primary" size="large">提交</van-button>
      </van-col>
    </van-row>
    <van-row>
      <van-col offset="16" span="8">
        <span @click="onClickLogin">密码登录</span>
      </van-col>
      <!--<van-col offset="8" span="8">
        <span @click="onClickCodeLogin">验证码登录</span>
      </van-col>-->
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'ForgetPassword',
    props: {
      msg: String
    },
    data() {
      return {
        'phone': '',
        'sms': '',
        'password': '',
        'passwordRepeat': ''
      }
    },
    methods: {
      onClickLogin() {
        this.$router.push('Login')
      },
      onClickCodeLogin() {
        this.$router.push('CodeLogin')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
