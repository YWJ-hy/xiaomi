<template>
  <div>
   <div class="zujian">
      <van-nav-bar title="分类" left-text=" " left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    >
      <van-icon name="search" slot="right" />
    </van-nav-bar>
   </div>
    <div class="mian">
      <div class="mian-left">
        <ul>
          <li v-for="(item,index) in classList "
          :key="index"
          :class="{acetiv:index ==content }"
          @click="charg(index)"
          >{{ item.name }}</li>
        </ul>
      </div>
      <div class="mian-right">
        <div class="mian-1">
          <img src="https://i8.mifile.cn/v1/a1/250eae49-3536-0d22-4f3a-5041affcb1f9!500x200.webp" alt="">
        </div>
        <div class="phone">
          — <router-link to="/listfile">点击手机电脑频道</router-link> —
        </div>
        <div class="phoneClassifi">
          <ul>
            <li v-for="item in mobile"
            :key="item.id"
            >
              <div class="box"><img :src="item.imgUrl"></div>
              <div class="box"><span>{{ item.name }}</span></div>
            </li>
          </ul>
        </div>
        <div class="mian-1">
          <img src="http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/69bf9d06a7285a70adbec96448d5377c.jpg" alt="">
        </div>
         <div class="phone">
          — <span>电视</span> —
        </div>
        <div class="phoneClassifi">
          <ul>
            <li v-for="item in Television"
            :key="item.id"
            >
              <div class="box"><img :src="item.imgUrl"></div>
              <div class="box"><span>{{ item.name }}</span></div>
            </li>
          </ul>
        </div>
         <div class="mian-1">
          <img src="http://i8.mifile.cn/v1/a1/4a124f61-aaac-8e83-3698-50e1e065f402!500x200.webp" alt="">
        </div>
         <div class="phone">
          — <span>众筹好物</span> —
        </div>
        <div class="phoneClassifi">
          <ul>
            <li v-for="item in crowdFunding"
            :key="item.id"
            >
              <div class="box"><img :src="item.imgUrl"></div>
              <div class="box"><span>{{ item.name }}</span></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      classList: [],
      mobile: [],
      Television: [],
      crowdFunding: [],
      content: 0
    }
  },
   methods: {
    onClickLeft() {
      alert('返回');
    },
    onClickRight() {
      alert('搜索');
    },
    charg: function(index) {
      return this.content = index;
    }
  },
  created() {
    axios.get('/static/mock/classify.json').then(res => {
      this.classList = res.data.taxonomic;
      this.mobile = res.data.mobilePhone;
      this.Television = res.data.television;
      this.crowdFunding = res.data.crowd;
    })
  },
}
</script>
<style lang="scss">
  .acetiv{
    color: orange;
  }
  .zujian{
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .van-icon{
    font-size: 20px;
  }
  .mian{
    width: 100%;
    min-height:600px;
  }
  .mian-left{
    position: fixed;
    top: 50px;
    left: 0;
    width: 80px;
    height: 565px;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
    display: none;
    }
      ul{
        width: 80px;
        margin-left: 10px;
      }
      li{
        width: 60px;
        height: 36px;
        text-align: center;
        line-height: 36px;
      }
  }
  .mian-right{
    position: fixed;
    top: 50px;
    right: 0;
    overflow-y: auto;
    overflow-x: hidden;
    width: 275px;
    height: 565px;
    float: right;
    padding-right: 20px;
    &::-webkit-scrollbar {
    display: none;
    }
    .mian-1{
      padding-left: 15px;
      img{
        width: 260px;
        height: 104px;
      }
    }
    .phone{
      width: 260px;
      height: 67px;
      line-height: 67px;
      text-align: center;
      margin-top: 10px;
      padding-left: 15px;
    }
    .phoneClassifi{
      width: 264px;
      /* height: 320px; */
      padding-left: 15px;
      ul{
        display: flex;
        flex-wrap: wrap;
        .box{
          width: 88px;
          text-align: center;
          margin-top: 10px;
          span{
            font-size: 12px;
          }
        }
        img{
          width: 52px;
          height: 52px;
        }
      }
    }
  }
</style>
