[TOC]
### 一、Front-End Development
- MobaXterm 这个工具很6
- 聚合整理 awesome-github-vue: https://github.com/opendigg/awesome-github-vue
- 飞冰 这个工具很6 https://alibaba.github.io/ice/ 
- TalkingData https://www.talkingdata.com/



### 二、Github 搜索
```
Vue		 Vue(JavaScript) 			129k
Facebook React(JavaScript)			124k
		 React-Native(JavaScript)	74.6k
jQuery	 jQuery(JavaScript)			51k 


腾讯 WeUI(CSS)
	Vux(Vue+WeUI)
	jQuery-weui(jQuery+WeUI)
	Vue-wechat(Vue+WeUI)
	wepy(小程序)
阿里巴巴 Weex(Vue+React)
饿了么 Mint-UI(Vue)
	Element(Vue)
	vue-element-admin(Vue+Element)
有赞 Vant(Vue)
	Vant-weapp(小程序+Vant)
蚂蚁金服 Ant-Design-Mobile(React)
	Ant-Design-Pro(React)
美团点评 Mpvue(Vue)
京东 Taro(React)
TalkingData iview-weapp(CSS)
```

#### 搜索 Mobile UI
- Tencent/weui		CSS					21.4k 		[OK]
- alibaba/weex		Vue+React 			17.4k
- airyland/vux		Vue+WeUI			15.2k
- ElemeFE/mint-ui	Vue					13.6k 		[OK]
- youzan/vant		Vue					7.6k 		[OK]
- ant-design/ant-design-mobile   React  6.7k		[OK]

#### 搜索 WeUI
- airyland/vux		Vue+WeUI 			15.2k
- lihongxun945/jquery-weui jQuery+WeUI  4.1k 		[OK]
- useryangtao/vue-wechat Vue+WeUI 		1.4k 		

#### 搜索 mint-ui
- canfoo/vue2.0-taopiaopiao Vue+MintUI  927
- Panda-Hope/vue-qqmusic Vue+MintUI    	395

#### 搜索 vant
- youzan/vant-weapp	小程序+Vant 			8.4k 		[OK]

#### 搜索 ant-design-mobile 无

#### 搜索 Vue
- vuejs/vue 		JavaScript			129k 		[OK]
- vuejs/awesome-vue						42.9k
- ElemeFE/element	Vue					35.4k
- PanJiaChen/vue-element-admin  Vue		28.1k
- bailicangdu/vue2-elm			Vue		25.4k 		[OK]
- Meituan-Dianping/mpvue		Vue		16.1k 		
- airyland/vux		Vue+WeUI 			15.2k
- ElemeFE/mint-ui	Vue					13.6k

#### 搜索 mpvue
- dcloudio/uni-app  Vue(mpvue) 			2.7k

#### 搜索 React 
- facebook/react	JavaScript			124k 		[OK]
- facebook/react-native	  JavaScript	74.6k
- ant-design/ant-design   React			43.1k
- ant-design/ant-design-pro  React		16.7k
- NervJS/taro		React				15.6k
- reactnativecn/react-native-guide		14.2k

#### 搜索 jQuery
- jquery/jquery		JavaScript			51k 		[OK]

#### 搜索 H5
- NervJS/taro		React				15.6k

#### 搜索 小程序
- justjavac/awesome-wechat-weapp		21.8k
- Tencent/wepy		类Vue				16.6k
- Meituan-Dianping/mpvue   Vue			16.1k
- NervJS/taro		React				15.6k
- youzan/vant-weapp 	 	 CSS		8.4k
- EastWorld/wechat-app-mall  小程序		7.4k
- opendigg/awesome-github-wechat-weapp	5.7k
- tumobi/nideshop-mini-program			4.4k
- linlinjava/litemall					4.3k
- TalkingData/iview-weapp	 CSS		3.8k 		[OK]
- tumobi/nideshop			 NodeJS		3.4k
- o2team/wxapp-market    小程序营销组件	1.7k 		[OK]


#### 初步OK
- Tencent/weui		CSS					21.4k 		[OK]
- ElemeFE/mint-ui	Vue					13.6k 		[OK]
- youzan/vant		Vue					7.6k 		[OK]
- ant-design/ant-design-mobile   React  6.7k		[OK]
- lihongxun945/jquery-weui jQuery+WeUI  4.1k 		[OK]
- youzan/vant-weapp	小程序+Vant 			8.4k 		[OK]
- vuejs/vue 		JavaScript			129k 		[OK]
- bailicangdu/vue2-elm			Vue		25.4k 		[OK]
- facebook/react	JavaScript			124k 		[OK]
- jquery/jquery		JavaScript			51k 		[OK]
- TalkingData/iview-weapp	 CSS		3.8k 		[OK]
- o2team/wxapp-market    小程序营销组件	1.7k 		[OK]



### 三、选型分析

#### 基于 腾讯 WeUI
- WeUI: 纯UI https://weui.io/ 
- vux: WeUI+Vue https://github.com/airyland/vux https://vux.li/
- jquery-weui: WeUI+jQuery https://github.com/lihongxun945/jquery-weui

#### 基于 阿里巴巴 Weex 或 蚂蚁金服 Ant Design
- Weex UI: UI+Vue(Rax) https://alibaba.github.io/weex-ui/#/cn/
- Ant Design Mobile: UI+React(Angular) https://mobile.ant.design/index-cn

#### 基于 饿了么 mint-ui
- mint-ui: UI+Vue https://github.com/ElemeFE/mint-ui
- vue2.0-taopiaopiao: https://github.com/canfoo/vue2.0-taopiaopiao mint-ui

#### 基于 有赞 ZanUI-vant
- ZanUI: https://www.youzanyun.com/zanui
- vant: UI+Vue(微信小程序) https://github.com/youzan/vant

#### 基于 美团 mpvue
- mpvue: http://mpvue.com
- uni-app: http://uniapp.dcloud.io mpvue



### 四、选型结果
```
Mobile UI样式组件采用 jquery-weui, ant-design-mobile, mint-ui, vant。
最终决定先采用 jquery-weui, mint-ui, vant 这三个其中一个。
```	

#### lihongxun945/jquery-weui	https://github.com/lihongxun945
```
	jquery-weui UI lib for build hybrid wechat web app	4.1k
		https://github.com/lihongxun945/jquery-weui
		http://jqweui.com/
```

#### ElemeFE/mint-ui  饿了么前端  https://zhuanlan.zhihu.com/ElemeFE
```
	mint-ui Mobile UI elements for Vue.js 		 		13.6k
	element A Vue.js 2.0 UI Toolkit for Web		 		35.4k

	vue2.0-taopiaopiao vue2+express+mint  				927
		https://github.com/canfoo/vue2.0-taopiaopiao
	vue-qqmusic vue2+mint-ui 							395
		https://github.com/Panda-Hope/vue-qqmusic
	vue-news vue2+mint-ui   							280
		https://github.com/biaodigit/vue-news
	vue2-jd vue2+mint-ui                 				198
		https://github.com/Caitingwei/vue2-jd
```
#### youzan/vant  有赞  https://tech.youzan.com/
```
	vant Lightweight Mobile UI Components built on Vue	7.6k
	vant-weapp 轻量、可靠的小程序 UI 组件库				    8.4k

	vant--mobile-mall vue2+vant 						268
		https://github.com/qianzhaoy/vant--mobile-mall
	vue-vant-store vue2+vant+express  					32
		https://github.com/pwx123/vue-vant-store

```