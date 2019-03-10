<template>
  <div class="navbar">
    <van-nav-bar left-text="返回" right-text="更多" left-arrow
        @click-left="onClickLeft" @click-right="onClickRight" >
      <!--<van-icon name="arrow-left" slot="left" />-->
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { NavBar, Toast } from 'vant';

  Vue.use(NavBar).use(Toast);

  export default {
    name: 'Navbar',
    props: {
      msg: String
    },
    data() {
      return {

      }
    },
    methods: {
      onClickLeft() {
        Toast('返回');
      },
      onClickRight() {
        Toast('菜单');
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
