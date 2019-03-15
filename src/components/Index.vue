<template>
  <div class="index">
    <!--<h2>首页资讯</h2>-->
    <!--<Navbar></Navbar>-->

    <van-tabs v-model="active" swipeable>
      <van-tab v-for="value in tabTitles" :title="value">
        内容 {{ value }}
      </van-tab>
    </van-tabs>

    <p v-for="item in items">{{item.name}}</p>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Tabbar from './Tabbar.vue'
  import Navbar from './Navbar.vue'

  import Vue from 'vue'
  import Vuex from 'vuex'
  import {Swipe, SwipeItem, Lazyload} from 'vant';

  Vue.use(Swipe).use(SwipeItem).use(Lazyload);
  Vue.use(Vuex);

  export default {
    name: 'Index',
    components: {
      Tabbar,
      // Navbar
    },
    props: {
      msg: String,
      ajaxData: Object
    },
    data() {
      return {
        tabTitles: [
          '热门',
          '图文',
          '视频',
          '音频'
        ],
        imageList: [
          'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
          'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        ],
        goods: {
          title: '美国伽力果（约680g/3个）',
          price: 2680,
          express: '免运费',
          remain: 19,
          thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg'
        },
        items: []
      }
    },
    created() {
      this.$http.get('http://127.0.0.1:8888/maker/user/list').then((data) => {
        this.items = data.body.data;
      });
    },
    mounted() {
      alert('哈哈1');
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
</style>
