<template>
  <div class="box_position">
    <div class="home_header">
      <div style="width:52px;height:18px;">
        <img src="/static/home/下载.png" alt>
      </div>
      <van-search placeholder="搜索商品名称" v-model="value" background="#fff"/>
      <i class="iconfont icon-wode"></i>
    </div>
    <van-tabs title-active-color="#ed5b00" :sticky="true" animated>
      <van-tab title="推荐" :index="0">
        <recommend></recommend>
      </van-tab>
      <van-tab title="手机" :index="1">
        <phone></phone>
      </van-tab>
      <van-tab title="智能" :index="2">
        <intelligence></intelligence>
      </van-tab>
      <van-tab title="电视" :index="3">
      </van-tab>
      <van-tab title="家电" :index="4"></van-tab>
      <van-tab title="笔记本" :index="5"></van-tab>
      <van-tab title="生活周边" :index="6"></van-tab>
    </van-tabs>
    <div class="topBar" v-show="flag" @click="getTop">
      <i class="iconfont icon-dingbu"></i>
    </div>
  </div>
</template>
<script>
import recommend from "./recommend";
import phone from "./phone";
import intelligence from "./intelligence";
import $ from "jquery";
export default {
  components: {
    recommend,
    phone,
    intelligence
  },
  data() {
    return {
      value: "",
      flag:false
    };
  },
  methods: {
    getTop() {
      var scrollTop = document.documentElement || document.body;
      $(scrollTop).animate(
        {
          scrollTop: 0
        },
        1000
      );
    }
  },
  mounted() {
    document.getElementsByClassName('van-tabs__track')[0].onscroll=function() {
      console.log(1);
      var scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scroll >= 250) {
        document.getElementsByClassName("topBar")[0].style.display = "block";
      } else {
        document.getElementsByClassName("topBar")[0].style.display = "none";
      }
      console.log(scroll);
    };
    this.active = this.$route.meta.bottomNav;
  }
};
</script>
<style lang="scss">
.box_position {
  background: #f2f2f2;
  .topBar {
    position: fixed;
    bottom: 100px;
    right: 20px;
    z-index: 500;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    text-align: center;
    background-color: rgba($color: #fff, $alpha: 0.5);
    i {
      font-size: 40px;
      line-height: 50px;
    }
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
    height: 100%;
    .van-tabs__content {
      margin-bottom: 80px;
      height: 100%;
      .van-tabs__track {
      }
    }
    .van-tabs__wrap.van-tabs__wrap--scrollable.van-hairline--top-bottom {
      .van-tabs__nav {
        background: #f2f2f2;
      }
    }
  }
}
</style>
