<template>
  <div class="index">
    <img alt="Vue logo" src="../assets/logo.png">

    <h2>
      <span>Running Man</span>
      <van-tag round type="success"><span>5</span>星级</van-tag>
    </h2>

    <van-cell-group>
      <van-cell icon="manager-o" title="个人信息" is-link />
      <van-cell icon="edit" title="修改密码" is-link />
      <van-cell icon="gem-o" title="申请升级" is-link />
      <van-cell icon="flower-o" title="帮人注册" is-link />
      <van-cell icon="medel-o" title="星级之路" is-link />
      <van-cell icon="question-o" title="常见问题" is-link />
    </van-cell-group>

    <Tabbar :active="2"></Tabbar>
  </div>
</template>

<script>
  import Tabbar from './Tabbar.vue'
  export default {
    name: 'Profile',
    components: {
      Tabbar
    },
    props: {
      msg: String
    },
    data() {
      return {

      }
    },
    methods: {

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

  .van-cell{
    text-align: left;
  }
</style>
