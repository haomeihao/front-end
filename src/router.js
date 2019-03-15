import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/Index',
    method: {
      ajaxData: function () {
        this.$http.get('http://www.baidu.com').then((res) => {
          alert('哈哈2');
        });
      }
    }
  },
  {
    name: 'Login',
    component: () => import('./components/Login'),
    meta: {
      title: '登录页面'
    }
  },
  {
    name: 'CodeLogin',
    component: () => import('./components/CodeLogin'),
    meta: {
      title: '验证码登录页面'
    }
  },
  {
    name: 'ForgetPassword',
    component: () => import('./components/ForgetPassword'),
    meta: {
      title: '找回密码'
    }
  },
  {
    name: 'Index',
    component: () => import('./components/Index'),
    meta: {
      title: '首页资讯'
    }
  },
  {
    name: 'Notify',
    component: () => import('./components/Notify'),
    meta: {
      title: '通知消息'
    }
  },
  {
    name: 'Profile',
    component: () => import('./components/Profile'),
    meta: {
      title: '我的信息'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

/*routes.beforeRouteEnter((to, from, next) => {
  axios.get(`/api${to.path}`).then(({data}) => {
    next(vm => Object.assign(vm.$data, data));
  })
});*/

const router = new Router({routes});

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
