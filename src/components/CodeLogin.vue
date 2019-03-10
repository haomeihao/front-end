<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png">

    <van-cell-group>
      <van-field v-model="phone" center label="手机号" placeholder="请输入手机号" >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
      <van-field v-model="sms" label="短信验证码" placeholder="请输入短信验证码" />

      <van-field v-model="verifyCode" center label="图形验证码" placeholder="请输入图形验证码" >
        <van-button slot="button" size="small" type="primary">uajw</van-button>
      </van-field>
    </van-cell-group>

    <van-row type="flex" justify="center">
      <van-col span="20">
        <van-button round type="primary" size="large">登录</van-button>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="8">
        <span @click="onClickLogin">密码登录</span>
      </van-col>
      <van-col offset="8" span="8">
        <span @click="onClickForgetPassword">忘记密码</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: 'CodeLogin',
    props: {
      msg: String
    },
    data() {
      return {
        'phone': '',
        'sms': '',
        'verifyCode': ''
      }
    },
    methods: {
      onClickLogin() {
        this.$router.push('Login');
      },
      onClickForgetPassword() {
        this.$router.push('ForgetPassword');
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
