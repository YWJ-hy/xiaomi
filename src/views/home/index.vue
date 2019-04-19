<template>
  <div id="home_container">
    <transition
      appear
      enter-active-class="animated slideInUp"
      leave-active-class="animated slideOutDown"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>

    <van-tabbar v-model="active" active-color="#ff6700" @change="bottomNav(active)">
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="orders-o">分类</van-tabbar-item>
      <van-tabbar-item icon="cart-o" :info="$store.getters.cartTotalNum">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
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
      active: 0,
      flag: false,
      navList: ["home", "classify", "cart", "center"]
    };
  },
  methods: {
    bottomNav(active) {
      var name = this.navList[active];
      console.log(name);
      this.$router.push({ name: name });
    }
  },
  watch: {
    "$route.meta": function() {
      this.active = this.$route.meta.bottomNav;
    }
  },
  created() {
    this.active = this.$route.meta.bottomNav;
  }
};
</script>
<style lang="scss">
#home_container {
  background: #f2f2f2;
  overflow-x: hidden;
  height: 100%;
  .box_position {
    flex-shrink: 0;
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
