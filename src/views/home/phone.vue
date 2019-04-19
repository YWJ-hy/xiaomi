<template>
  <div class="phone_container">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          v-lazy="'//cdn.cnbj1.fds.api.mi-img.com/mi-mall/465d93151b0d789c1c33214ddf08396e.jpg?thumb=1&w=720&h=360'"
          alt
        >
      </van-swipe-item>
      <van-swipe-item>
        <img v-lazy="'//i8.mifile.cn/v1/a1/0d509328-b045-0486-bcd2-3280007e5c5d!720x360.webp'" alt>
      </van-swipe-item>
      <van-swipe-item>
        <img v-lazy="'//i8.mifile.cn/v1/a1/c341bd34-3ba5-d37b-3d80-1465c6b6e08f!720x360.webp'" alt>
      </van-swipe-item>
    </van-swipe>
    <img v-lazy="'//i8.mifile.cn/v1/a1/10b80c17-9f7c-d30c-945f-4d4dc3316252!720x152.webp'" alt>
    <router-link to class="hot_title">
      <img v-lazy="'//i8.mifile.cn/v1/a1/4d88e210-cda1-95f8-9e12-b09656dced23!696x436.webp'" alt>
      <div class="hot_title_info">
        <div class="title_top">
          <div class="name">Redmi 7</div>
          <div class="price">
            ￥699
            <span>起</span>
          </div>
        </div>
        <div class="title_info">
          <div class="brief">4000mAh超长续航，骁龙632八核处理器</div>
          <div class="buybtn">立即购买</div>
        </div>
      </div>
    </router-link>
    <ul class="hot_list">
      <li v-for="(item,index) in phoneList" :key="index">
        <router-link :to="{name:'detail',params:{gid:item.gid}}">
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
import axios from 'axios'
export default {
  data() {
    return {
      phoneList:[]
    }
  },
  created(){
    axios.get('/static/mock/home.json').then(result=>{
      this.phoneList=result.data.phoneList;
    })
  }
};
</script>
<style lang="scss">
.phone_container {
  &::-webkit-scrollbar {
    display: none;
  }
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
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
  .hot_title {
    display: block;
    padding: 5px;
    img {
      width: 100%;
    }
    .hot_title_info {
      padding: 10px 14px;
      text-align: left;
      background: #fff;
      .title_top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: rgba(0, 0, 0, 0.87);
          font-size: 18px;
        }
        .price {
          font-size: 14px;
          color: #ea625b;
          height: 1.5em;
          line-height: 1.5em;
          position: relative;
          display: inline-block;
        }
      }
      .title_info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        .brief {
          margin-top: 3px;
          font-size: 12px;
          line-height: 12px;
          color: rgba(0, 0, 0, 0.54);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .buybtn {
          width: 104px;
          background: #ea625b;
          border-radius: 20px;
          text-align: center;
          color: #fff;
          font-size: 16px;
          padding: 8px 0;
          font-weight: 700;
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
}
</style>
