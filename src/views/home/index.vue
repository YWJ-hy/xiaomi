<template>
  <div id="home_container">
    <div class="box_position">
      <div class="home_header">
        <div style="width:52px;height:18px;">
          <img src="/static/home/下载.png" alt>
        </div>
        <van-search placeholder="搜索商品名称" v-model="value" background="#fff"/>
        <i class="iconfont icon-wode"></i>
      </div>
      <van-tabs title-active-color="#ed5b00">
        <van-tab v-for="(item,index) in toptabList" :title="item" :key="index" @click="toptab(index)">
        </van-tab>
      </van-tabs>
    </div>
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#ff6700">
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
    <div class="topBar" v-show="flag" @click="getTop">
      <i class="iconfont icon-dingbu"></i>
    </div>
  </div>
</template>
<script>
import recommend from "./recommend";
import $ from 'jquery'
export default {
  components: {
    recommend
  },
  data() {
    return {
      value: "",
      toptabList: [
        "推荐",
        "手机",
        "智能",
        "电视",
        "家电",
        "笔记本",
        "生活周边"
      ],
      active: 0,
      flag:false,
      navList:[

      ]
    };
  },
  methods: {
    getTop(){
      var scrollTop = document.documentElement || document.body;
      $(scrollTop).animate(
        {
          scrollTop: 0
        },
        1000
      );
    },
    toptab(index){

    }
  },
  created() {
    document.onscroll=function(){
      var scroll=document.documentElement.scrollTop || document.body.scrollTop;
      if(scroll>=250){
        document.getElementsByClassName('topBar')[0].style.display="block";
      }else{
        document.getElementsByClassName('topBar')[0].style.display="none";
      }
    }
  }
};
</script>
<style lang="scss">
#home_container {
  background: #f2f2f2;
  .topBar{
    position: fixed;
    bottom: 100px;
    right: 20px;
    z-index: 100;
    height: 50px;
    width: 50px;
    border-radius:50%;
    text-align: center;
    background-color: rgba($color: #fff, $alpha: 0.5);
    i{
      font-size: 30px;
      position: relative;
      top: -50px;
    }
  }
  .box_position{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: #f2f2f2;
  }
  .home_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 43.75px;
    img {
      display: block;
      width: 25px;
      height: 16px;
      margin-left: 12px;
    }
    .van-search {
      flex: 1;
      padding: 0;
      height: 31px;
      .van-search__content {
        background-color: #fff;
      }
    }
    i.icon-wode {
      font-size: 24px;
      margin: 0 12px;
    }
  }
  .van-tabs.van-tabs--line {
    position: relative;
    .van-tabs__wrap.van-tabs__wrap--scrollable.van-hairline--top-bottom {
      .van-tabs__nav {
        background: #f2f2f2;
      }
    }
  }
}
</style>
