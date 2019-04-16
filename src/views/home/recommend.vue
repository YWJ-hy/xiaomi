<template>
  <div class="recommend_main">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="//i8.mifile.cn/v1/a1/0d509328-b045-0486-bcd2-3280007e5c5d!720x360.webp" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="//i8.mifile.cn/v1/a1/c341bd34-3ba5-d37b-3d80-1465c6b6e08f!720x360.webp" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img src="//i8.mifile.cn/v1/a1/50caba08-93c4-65f1-ffb8-4030b08967a5!720x360.webp" alt>
      </van-swipe-item>
    </van-swipe>
    <div class="grid_box">
      <router-link to>
        <img src="//i8.mifile.cn/v1/a1/01e0772b-fcd9-6e03-cdf3-9bd08b2d2974!144x152.webp" alt>
      </router-link>
      <router-link to>
        <img src="//i8.mifile.cn/v1/a1/69f3581c-893a-c3a3-9f27-055146a62b7e!144x152.webp" alt>
      </router-link>
      <router-link to>
        <img src="//i8.mifile.cn/v1/a1/9f3a3e88-3b55-f7c8-b863-5867e23022c1!144x152.webp" alt>
      </router-link>
      <router-link to>
        <img src="//i8.mifile.cn/v1/a1/08a2268a-5554-7170-95d6-301ef8db4325!144x152.webp" alt>
      </router-link>
      <router-link to>
        <img src="//i8.mifile.cn/v1/a1/b05bf09b-a0a7-ef8f-e5ba-500b1549938c!144x152.webp" alt>
      </router-link>
    </div>
    <div class="three_img">
      <router-link to>
        <img src="//i8.mifile.cn/v1/a1/f59bf09e-f87f-4b9d-1f37-05c402d64021!358x508.webp" alt>
      </router-link>
      <div class="two_img">
        <router-link to>
          <img src="//i8.mifile.cn/v1/a1/2b8b4b44-41bb-0fe8-5c8d-4a24072c3bf3!358x252.webp" alt>
        </router-link>
        <router-link to>
          <img src="//i8.mifile.cn/v1/a1/4331e169-3d2b-a50b-1161-85785e5eb214!358x252.webp" alt>
        </router-link>
      </div>
    </div>
    <router-link to>
      <img
        src="//i8.mifile.cn/v1/a1/4d0462a7-ac92-b631-89be-7155f6eb09d1!720x280.webp"
        alt
        style="width:100%;margin-top:5px;"
      >
    </router-link>
    <router-link to>
      <img
        src="//i8.mifile.cn/v1/a1/5df15531-f43d-4255-7e2b-006c7e19ef12!720x440.webp"
        alt
        style="width:100%;"
      >
    </router-link>
    <ul>
      <li v-for="(item,index) in recommendList" :key="index">
        <router-link to>
          <img :src="item.imgsrc" alt>
          <div class="recommend_info">
            <div class="recommend_name">{{item.name}}</div>
            <div class="recommend_brief">{{item.brief}}</div>
            <div class="recommend_price">{{item.price}}</div>
          </div>
        </router-link>
      </li>
    </ul>
    <router-link to>
      <img
        src="//i8.mifile.cn/v1/a1/5fa161f2-745e-e08c-c5bb-587f311b7777!720x440.webp"
        alt
        style="width:100%;"
      >
    </router-link>
    <ul>
      <li v-for="(item,index) in recommendList2" :key="index">
        <router-link to>
          <img :src="item.imgsrc" alt>
          <div class="recommend_info">
            <div class="recommend_name">{{item.name}}</div>
            <div class="recommend_brief">{{item.brief}}</div>
            <div class="recommend_price">{{item.price}}</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      recommendList: [],
      recommendList2:[]
    };
  },
  created() {
    axios.get("/static/mock/home.json").then(result => {
      // console.log(result.data);
      this.recommendList = result.data.recommendList;
      this.recommendList2=result.data.recommendList2;
    });
  }
};
</script>
<style lang="scss">
.recommend_main {
  margin-top: 87.75px;
  margin-bottom: 70px;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      height: 264px;
      flex-basis: 49%;
      a {
        display: block;
        height: 100%;
        img {
          width: 100%;
        }
        div.recommend_info {
          padding: 5px 14px;
          text-align: left;
          .recommend_name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 14px;
          }
          .recommend_brief {
            margin-top: 3px;
            font-size: 12px;
            line-height: 12px;
            color: rgba(0, 0, 0, 0.54);
          }
          .recommend_price {
            font-size: 14px;
            color: #ea625b;
            height: 1.5em;
            line-height: 1.5em;
          }
        }
      }
    }
  }
}
.van-swipe {
  height: 198.5px;
  overflow: hidden;
  .van-swipe-item {
    img {
      width: 100%;
      height: 198.5px;
    }
  }
}
.grid_box {
  display: flex;
  flex-basis: 20%;
  height: 80px;
  background: white;
  img {
    width: 75px;
  }
}
.three_img {
  display: flex;
  justify-content: space-between;
  height: 264px;
  img {
    width: 186px;
  }
  .two_img {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    a {
      height: 131px;
      img {
        width: 185px;
      }
    }
  }
}
</style>
