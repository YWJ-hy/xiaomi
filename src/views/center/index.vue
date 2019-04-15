<template>
  <div id="center">
    <div class="head">
      <div class="portrait">
        <div class="portrait-img">
          <img src="https://m.mi.com/static/img/avatar.76a75b8f17.png" alt="">
        </div>
        <div class="login">
          <a href="javascript:">登入/</a>
          <a href="javascript:">注册</a>
        </div>
      </div>
    </div>
    <div class="order">
      <span class="left-l">我的订单</span>
      <a href="javascript:" class="right-l">全部订单
        <i class="iconfont icon-xiangyou1"></i>
      </a>
    </div>
    <ul class="classify">
      <li>
        <a href="javascript:">
          <div class="iconfont icon-xinyongqia"></div>
          <span>代付款</span>
        </a>
      </li>
      <li>
        <a href="javascript:">
          <div class="iconfont icon-wuliu"></div>
          <span>代收货</span>
        </a>
      </li>
      <li>
        <a href="javascript:">
          <div class="iconfont icon-tishi"></div>
          <span>退换修</span>
        </a>
      </li>
    </ul>
    <div class="conter"></div>
    <ul class="item">
      <li>
        <i class="iconfont icon-tequanzhuanshu left-l"></i>
        <a href="javascript:">
          会员中心
          <em class="iconfont icon-xiangyou1 right-l"></em>
        </a>
      </li>
      <li>
        <i class="iconfont icon-youhuiquan left-l"></i>
        <a href="javascript:">
          我的优惠
          <em class="iconfont icon-xiangyou1 right-l"></em>
        </a>
      </li>
    </ul>
    <div class="conter"></div>
    <ul class="item">
      <li>
        <i class="iconfont icon-xihuanfill left-l"></i>
        <a href="javascript:">
          服务中心
          <em class="iconfont icon-xiangyou1 right-l"></em>
        </a>
      </li>
      <li>
        <i class="iconfont icon-dianpu left-l"></i>
        <a href="javascript:">
          小米之家
          <em class="iconfont icon-xiangyou1 right-l"></em>
        </a>
      </li>
    </ul>
    <div class="conter"></div>
    <ul class="item">
      <li>
        <i class="iconfont icon-yuyan left-l"></i>
        <a href="javascript:">
          T码通道
          <em class="iconfont icon-xiangyou1 right-l"></em>
        </a>
      </li>
    </ul>
    <div class="conter"></div>
    <ul class="item">
      <li>
        <i class="iconfont icon-shezhi left-l"></i>
        <a href="javascript:">
          设置
          <em class="iconfont icon-xiangyou1 right-l"></em>
        </a>
      </li>
    </ul>
    <div class="conter-l"></div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
  .conter{
    width: 100%;
    height: 10px;
    background: #f5f5f5;
  }
  .conter-l{
    width: 100%;
    height: 30px;
    background: #f5f5f5;
  }
  .left-l{
    padding-left: 15px;
  }
  .right-l{
    padding-right: 10px;
  }
  .head{
    display: flex;
    align-items : center;
    width: 100%;
    height: 84px;
    background: url(https://m.mi.com/static/img/bg.63c8e19851.png) center 0 #f37d0f;;
    background-size: auto 100%;
      .portrait{
        width: 100%;
        height: 50px;
        display: flex;
        align-items : center;
        margin-left: 20px;
          .portrait-img{
            margin-right: 10px;
          }
          img{
            width: 50px;
            height: 50px;
          }
          a{
            color: white;
          }
      }
  }
  .order{
        display: flex;
        width: 100%;
        height: 42px;
        border-bottom: 1px solid #cccccc;
        align-items : center;
        justify-content: space-between;
        a{
          color: #000000;
        }
  }
  .classify{
    display: flex;
    width: 100%;
    height: 88px;
    justify-content: space-around;
    align-items: center;
      a{
        display: flex;
        height: 46px;
        flex-direction: column;
        align-items: center;
      }
      div{
        font-size: 26px;
      }
      span{
        font-size: 12px;
        margin-top: 10px;
        color: #000000;
      }
  }
  .item{
    li{
      display: flex;
      align-items: center;
      width: 100%;
      height: 54px;
    }
    i{
      font-size: 26px;
      color: orange;
    }
    a{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 54px;
      width: 90%;
      margin-left: 20px;
      border-bottom: 1px solid #f5f5f5;
      color: #000000;
    }
    em{
      font-size: 20px;
      color: #cccccc;
    }
  }
</style>
