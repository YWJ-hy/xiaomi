<template>
  <div class="intelligence_container">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          v-lazy="'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7b834b941efb312a97efcf45dea52ae0.jpg?thumb=1&w=720&h=360'"
          alt
        >
      </van-swipe-item>
      <van-swipe-item>
        <img
          v-lazy="'//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d18b3e5af9914bc86602c4be787294a1.jpg?thumb=1&w=720&h=360'"
          alt
        >
      </van-swipe-item>
      <van-swipe-item>
        <img v-lazy="'//i8.mifile.cn/v1/a1/0aa66f7f-d5c4-84b5-f1a6-a79fdae0b7b8!720x360.webp'" alt>
      </van-swipe-item>
    </van-swipe>
    <div class="grid">
      <router-link to v-for="item in gridList" :key="item">
        <img v-lazy="item" alt>
      </router-link>
    </div>
    <img v-lazy="'//i8.mifile.cn/v1/a1/dc3b1271-0d28-7143-bb18-0e97e551d073!720x80.webp'" alt>
    <ul class="hot_list">
      <li v-for="(item,index) in intelligence" :key="index">
        <router-link to>
          <img v-lazy="item.imgsrc" alt>
          <div class="info">
            <div class="name">{{item.name}}</div>
            <div class="brief">{{item.brief}}</div>
            <div class="price">
              ￥{{item.price}}
              <span>起</span>
            </div>
            <div class="buybtn">立即购买</div>
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
      gridList: [
        "//i8.mifile.cn/v1/a1/d9f19894-29e5-002e-9b13-ffc1aa1ba938!144x152.webp",
        "//i8.mifile.cn/v1/a1/8e85813b-77de-3db8-5174-c20d229970d1!144x152.webp",
        "//i8.mifile.cn/v1/a1/aa74812f-c238-0e98-b834-2b7a609e084a!144x152.webp",
        "//i8.mifile.cn/v1/a1/dff78479-8832-6a56-df95-0b8710cf00c1!144x152.webp",
        "//i8.mifile.cn/v1/a1/d6d9bdb2-c77a-7d38-ba76-ea782ff3bb3a!144x152.webp",
        "//i8.mifile.cn/v1/a1/e02b65f9-0b2e-d46d-0f43-acb604d90f37!144x152.webp",
        "//i8.mifile.cn/v1/a1/bbccc554-12fc-270e-1d27-35618878654f!144x152.webp",
        "//i8.mifile.cn/v1/a1/9b375c22-b4f7-ba76-3433-0600d13d897e!144x152.webp",
        "//i8.mifile.cn/v1/a1/b8a14117-6e79-2344-8c6c-a2f77f038a99!144x152.webp",
        "//i8.mifile.cn/v1/a1/1cba24eb-cbcd-b9e7-340b-22f35ac247d7!144x152.webp"
      ],
      intelligence: []
    };
  },
  created() {
    axios.get("/static/mock/home.json").then(result => {
      this.intelligence = result.data.intelligence;
    });
  }
};
</script>
<style lang="scss">
.intelligence_container {
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  flex: 1;
  & > img {
    width: 100%;
  }
  ul.hot_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      flex-basis: 48%;
      padding-top: 5px;
      width: 180px;
      a {
        display: block;
        img {
          width: 100%;
        }
        .info {
          text-align: center;
          padding: 10px 14px;
          background-color: #fff;
          .name {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 18px;
            color: rgba(0, 0, 0, 0.87);
          }
          .brief {
            margin-top: 5px;
            font-size: 14px;
            line-height: 14px;
            color: rgba(0, 0, 0, 0.54);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .price {
            font-size: 14px;
            color: #ea625b;
            height: 1.5em;
            line-height: 1.5em;
            position: relative;
            display: inline-block;
          }
          .buybtn {
            margin: 0 auto;
            width: 104px;
            background: #ea625b;
            border-radius: 10px;
            text-align: center;
            color: #fff;
            font-size: 16px;
            padding: 8px 0;
            font-weight: 700;
          }
        }
      }
    }
  }
  .grid {
    display: flex;
    flex-basis: 20%;
    background: white;
    flex-wrap: wrap;
    img {
      width: 75px;
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
</style>
