<template>
  <div id="listfile">
    <div class="tu1">
      <img v-lazy="'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7f93943331d813c1acffdba160da9393.jpg'" alt="">
    </div>
    <div class="tu2">
      <img v-lazy="'http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/14294054eba5a8b45232380cb0305380.jpg'" alt="">
    </div>
    <div class="notebook">
      <div class="not-a">
        <a href="#"><img v-lazy="'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/599270bcc09b76212283fa01dfc077e2.jpg'" alt=""></a>
      </div>
      <div class="not-b">
        <div class="not-b-l">
          <div class="name">小米笔记本15.6" 2019款 独显版</div>
          <div class="title">全面均衡的国民轻薄本</div>
        </div>
        <div class="not-b-r">
          <span>￥3990起</span>
          <a href="#">立即购买</a>
        </div>
      </div>
      <div class="not-c">
        <ul>
          <li class="info-box" v-for="(item,index) in Listfile" :key="index">
            <div class="not-c-1">
              <a href="#">
                <img v-lazy="item.imgsrc" alt="">
              </a>
            </div>
            <div class="not-c-2">{{ item.name }}</div>
            <div class="not-c-3">{{ item.brief }}</div>
            <div class="not-c-4">{{ item.price }}</div>
            <div class="not-c-5">
              <a href="#">立即购买</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="section">
      <a href="#"><img v-lazy="'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d9748b0e3574f67ab9c91bb0c9075731.jpg'" alt=""></a>
    </div>
    <div class="goos-list">
      <a href="#"><img v-lazy="'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cd8d8f0d50013c6038a41d94e3090832.jpg'" alt=""></a>
      <div class="flxe-box">
        <div class="not-b-l">
          <div class="name">Redmi 7 </div>
          <div class="title">4000mAh超长续航，骁龙632八核处理器</div>
        </div>
        <div class="not-b-r">
          <span>￥699起</span>
          <a href="#">立即购买</a>
        </div>
      </div>
    </div>
    <div class="phoneList">
        <ul>
          <li class="phoneList_li" v-for="(item,index) in phoneList" :key="index">
            <div class="phoneList-1">
              <a href="#"><img v-lazy="item.imgsrc" alt="">
              <span><img v-lazy="item.imgUrl" alt="" class="imgs"></span>
              </a>
            </div>
            <div class="phoneList-2">
              <div class="name">{{item.name}}</div>
              <div class="brief">{{item.brief}}</div>
              <div class="price">
                <i>￥</i>
                <span>{{item.price}}</span>
                <i>起</i>
              </div>
              <div class="action">
                <a href="#">立即购买</a>
              </div>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      Listfile: [],
      phoneList: []
    }
  },
  created() {
    axios.get('/static/mock/listfile.json').then(res => {
      //console.log(res.data)
      this.Listfile = res.data.listfile;
      this.phoneList = res.data.phoneList;

    })
  },
}
</script>
<style lang="scss">
  #listfile{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    /* border-left: 2px solid green;
    border-right: 2px solid green; */
    .tu1{
      img{
        width: 100%;
        height: 263px;
      }
    }
    .tu2{
      img{
        width: 100%;
        height: 66px;
      }
    }
    .notebook{
      width: 100%;
      min-height: 200px;
      overflow-y: auto;
      overflow-x: hidden;
      .not-a{
        a{
          display: block;
          width: 100%;
          height: 228px;
          img{
          width: 100%;
          height: 228px;
         }
        }
      }
      .not-b{
        height: 80px;
        border-bottom: 7px solid green;
        .not-b-l{
          float: left;
          padding-left: 15px;
          padding-top: 25px;
          .name{
          font-weight: bold;
         }
          .title{
          padding-top: 5px;
          font-size: 12px;
         }
        }
        .not-b-r{
          float: right;
          padding-right: 15px;
          padding-top: 25px;
          span{
            color: #ff4a48;
          }
          a{
            display: block;
            width: 88px;
            height: 31px;
            background: #ff4a48;
            line-height: 31px;
            text-align: center;
            font-size: 14px;
            color: white;
            border-radius: 4px;
          }
        }
      }
      .not-c{
        width: 100%;
        ul{
          min-height: 200px;
        }
        .info-box{
          width: 182px;
          height: 246px;
          float: left;
          padding-right: 5px;
          padding-bottom: 10px;
          img{
            width: 100%;
            height: 146px;
          }
          .not-c-2{
            width: 100%;
            margin-top: 15px;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
          }
          .not-c-3{
            width: 100%;
            margin-top: 5px;
            text-align: center;
            font-size: 12px;
          }
          .not-c-4{
            width: 100%;
            margin-top: 5px;
            text-align: center;
            font-size: 14px;
            color: #ff4a48;
          }
          .not-c-5{
            width: 100%;
            margin-top: 10px;
            margin-left: 45px;
            a{
              display: block;
              width: 92px;
              height: 25px;
              line-height: 25px;
              text-align: center;
              background: #ff4a48;
              font-size: 12px;
              color: white;
            }
          }
        }
      }
    }
    .section{
      width: 100%;
      height: 79px;
      a{
        display: block;
        width: 100%;
        height: 79px;
        img{
          width: 100%;
          height: 79px;
        }
      }
    }
    .goos-list{
      width: 100%;
      height: 307px;
      a{
        display: block;
        width: 100%;
        height: 228px;
        img{
          width: 100%;
          height: 228px;
        }
      }
      .flxe-box{
        width: 100%;
        height: 80px;
        .not-b-l{
          float: left;
          padding-left: 15px;
          padding-top: 25px;
          .name{
          font-weight: bold;
         }
          .title{
          padding-top: 5px;
          font-size: 12px;
         }
        }
        .not-b-r{
          float: right;
          padding-right: 15px;
          padding-top: 25px;
          span{
            color: #ff4a48;
          }
          a{
            display: block;
            width: 88px;
            height: 31px;
            background: #ff4a48;
            line-height: 31px;
            text-align: center;
            font-size: 14px;
            color: white;
            border-radius: 4px;
          }
        }
      }
    }
    .phoneList{
      width: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      padding: 0 2.5px;
      .phoneList_li{
        width: 180px;
        height: 258px;
        padding: 10px 2.5px;
        float: left;
        .phoneList-1{
          a{
            display: block;
            width: 100%;
            height: 146px;
            position: relative;
            img{
              width: 100%;
              height: 146px;
            }
            .imgs{
              width: 57px;
              height: 57px;
              position: absolute;
              right: 2px;
              bottom: 3px;
            }
          }
        }
        .phoneList-2{
          width: 100%;
          .name{
            width: 100%;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            margin-top: 15px;
          }
          .brief{
            width: 100%;
            text-align: center;
            font-size: 12px;
            margin-top: 5px;
          }
          .price{
            width: 100%;
            text-align: center;
            margin-top: 5px;
            i{
              font-size: 12px;
              color: #ff4a48;
            }
            span{
              color: #ff4a48;
            }
          }
          .action{
            width: 100%;
            text-align: center;
            margin-top: 10px;
            a{
              display: block;
              width: 92px;
              height: 25px;
              line-height: 25px;
              font-size: 12px;
              color: white;
              background: #ff4a48;
              border-radius: 6px;
              margin-left: 44px;
            }
          }
        }
      }
    }
  }
</style>
