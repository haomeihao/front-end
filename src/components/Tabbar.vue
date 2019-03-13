<template>
  <div class="tabbar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" @click="onClickIndex">首页</van-tabbar-item>
      <!--<van-tabbar-item icon="orders-o" @click="onClickIndex">资讯</van-tabbar-item>-->
      <van-tabbar-item icon="clock-o" info="5" @click="onClickNotify">通知</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="onClickProfile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'Tabbar',
    props: {
      msg: String,
      active: Number
    },
    data() {
      return {
        active: this.props.active || 0
      }
    },
    methods: {
      onClickIndex() {
        this.$data.active = 0;
        this.$router.push('Index');
      },
      onClickNotify() {
        this.$data.active = 1;
        this.$router.push('Notify');
      },
      onClickProfile() {
        this.$data.active = 2;
        this.$router.push('Profile');
      },
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

  .van-tabbar-item {
    /*font-size: large;*/
  }

  /*rgb(7, 193, 96);*/
  .van-tabbar-item--active {
    color: rgb(7, 193, 96);
  }
</style>
