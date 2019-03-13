<template>
  <div class="notify">
    <!--<h2>通知消息</h2>-->
    <!--<Navbar></Navbar>-->

    <van-notice-bar speed="25"
        text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
        left-icon="volume-o"
    />

    <!-- closeable 模式，在右侧显示关闭按钮 -->
    <van-notice-bar v-for="item in 2" :key="item" mode="closeable" speed="50" >
      足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
    </van-notice-bar>

    <!-- closeable 模式，在右侧显示关闭按钮 -->
    <van-notice-bar v-for="item in 2" :key="item" mode="closeable" speed="75">
      足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
    </van-notice-bar>

    <!-- closeable 模式，在右侧显示关闭按钮 -->
    <van-notice-bar v-for="item in 2" :key="item" mode="closeable" speed="100" >
      足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。
    </van-notice-bar>

    <!--<van-swipe class="pictures-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="image in images">
        <img v-lazy="image"/>
        &lt;!&ndash;<img :src="image" alt="">&ndash;&gt;
      </van-swipe-item>
    </van-swipe>-->

    <Tabbar :active="1"></Tabbar>
  </div>
</template>

<script>
  import Tabbar from './Tabbar.vue'
  import Navbar from './Navbar.vue'
  import Vue from 'vue'
  import {Swipe, SwipeItem, Lazyload} from 'vant';

  Vue.use(Swipe).use(SwipeItem).use(Lazyload);

  export default {
    name: 'Notify',
    components: {
      Tabbar,
      Navbar
    },
    props: {
      msg: String
    },
    data() {
      return {
        images: [
          'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        ]
      }
    },
    methods: {}
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

  .van-notice-bar {
    margin-top: 10px;
    margin-bottom: 10px;
    /*color: rgb(7, 193, 96);*/
    /*font-size: large;*/
  }

  .pictures-swipe {
    height: 300px;
  }

  .pictures-swipe img {
    width: 100%;
    display: block;
  }
</style>
