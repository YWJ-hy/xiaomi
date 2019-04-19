<template>
  <div class="detail_container">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item, index) in goodsInfo.ImgPreview" :key="index">
        <img v-lazy="item" alt @click="imagepreview(index)">
      </van-swipe-item>
    </van-swipe>
    <div class="overview-goods-name">
      <div class="goods-name">{{goodsInfo.name}}</div>
    </div>
    <div class="product_info_product_desc">
      <div class="goods-brief">{{goodsInfo.brief}}</div>
    </div>
    <div class="product_info_product_price">
      <div class="price">￥{{goodsInfo.price}}</div>
    </div>
    <div class="card_box">
      <div class="product-section" @click="showcart">
        <div class="left" ref="left">未选</div>
        <div class="center" ref="center"></div>
        <i class="iconfont icon-xiangyou1"></i>
      </div>
      <div class="product-section" @click="showmsg">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg=="
          alt
        >
        <span>小米自营</span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg=="
          alt
        >
        <span>小米发货</span>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg=="
          alt
        >
        <span>7天无理由退货</span>
        <i class="iconfont icon-xiangyou1"></i>
      </div>
    </div>
    <van-sku
      v-model="showBase"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :hide-stock="sku.hide_stock"
      :quota="quota"
      :quota-used="quotaUsed"
      :custom-stepper-config="customStepperConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
      @stepper-change="updateNum"
    ></van-sku>
    <van-actionsheet v-model="show" title="服务说明">
      <div class="server_box">
        <div class="server_info">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg=="
            alt
          >
          <p>小米自营</p>
        </div>
        <div class="server_info">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg=="
            alt
          >
          <p>
            <span>小米发货</span>
            <b>由小米发货</b>
          </p>
        </div>
        <div class="server_info">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg=="
            alt
          >
          <p>7天无理由退货</p>
        </div>
        <div class="server_info">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAChklEQVR4Ab3YA6zkUBgF4Lu2bdu2bdu2bdu2Ea1t27ZtW7OnyZnkz9s2r+3emSRfJlf/PaNKfW6pnAgB5aAHbIAH4KFnsAv6QxWI5KS23YkpYDp8AI8DSyGnjiBRYR54hF0wCApCKogHcRg2L3SF9SaBkrgNUhLeiGKjuZmyKR70gc+iRn2nQeqLxdsgESiXIsJKUa+f3SAyRH9QmjQXdbsFFqSgmNwGlGYVrL4mOSkMfOWkvqB8pIEIk9gsyAoO7gDlY0u415GAQRJw4DdE9EOQUPCWe+aAfxIOBaVZGCgNwUAJTbjnfmA6dFAEzSGCwQXWLgdKEkfqeEajog9/G6dY+wokNBlfwPEWRmM4Gx01h9jPulchlMWcapyz3GgcZSOrpgDB4agIER6UhSScd9do/GQjvqYQp+2EoMic+0WJH2oMk4lZ4Q6MdhjifGAhKIj3pCiDxDGZWEiMdwVlRXwd1yEkKJteeIN8ZAGr64W6Ikwni4PTEREivMMrvt/eIIdZJBsoC+VFmM4BQpx3E4LicO1r+fftAMpBmMhwju0rTkNQEa7fLv/Lm2wsrC7CvObrJQgByoXRrNHDaERk46etHxnPERZ/Uafus05Gb8d6+WO0oQYs/s8QxbjnLXn2TcvOjxAElB/c4J6VZRDDFg4s90OIkdzrttkVWmzwUF0fhsgj9skjg1hdTxYDpVla+MH6YwK7nRgmwtTUGKIgfGfdWXZvsPqJMBPEccKt4aLeTKe3nB3E4gfQ2MU/qhpcFHWGub0JzwH7RaHnMA3KQVIIC4pCQ2IoAZPgjlh3GorqeCxRHnaKwtILeGoxdhJqa3s+IqSD9rAa7oh/gNdj2AZd5dncjr+ClBUwCf4HjgAAAABJRU5ErkJggg=="
            alt
          >
          <p>
            <span>运费说明</span>
            <b>
              由小米发货的商品，单笔满150元免运费;
              由第三方商家发货的商品，免运费;
              特殊商品需要单独收取运费，具体以实际结算金额为准；优惠券等不能抵扣运费金额;
            </b>
          </p>
        </div>
      </div>
    </van-actionsheet>
    <div class="returnBtn" @click="returnBtn">
      <i class="iconfont icon-xiangzuo1"></i>
    </div>
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <div id="badgeBall" v-show="badgeFlag">{{goodsNum}}</div>
    <van-goods-action>
      <van-goods-action-mini-btn icon="wap-home" text="首页" @click="$router.push({path:'/'})"/>
      <van-goods-action-mini-btn
        icon="cart-o"
        text="购物车"
        :info="cartTotalNum"
        @click="$router.push({path:'/cart'})"
        v-if="cartTotalNum"
      />
      <van-goods-action-mini-btn
        icon="cart-o"
        text="购物车"
        @click="$router.push({path:'/cart'})"
        v-else
      />
      <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn"/>
      <van-goods-action-big-btn primary text="立即购买" @click="onClickBigBtn"/>
    </van-goods-action>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import axios from "axios";
import { ImagePreview, Toast } from "vant";
import $ from "jquery";
export default {
  name: "detail",
  data() {
    return {
      timer: null,
      badgeFlag: false,
      goodsInfo: {},
      show: false,
      showBase: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "版本", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "6GB+128GB", // skuValueName：规格值名称
                imgUrl:
                  "//i8.mifile.cn/v1/a1/4c4ba715-87fa-e929-d582-1ad5922f825e.webp" // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: "1215",
                name: "8GB+128GB",
                imgUrl:
                  "//i8.mifile.cn/v1/a1/4c4ba715-87fa-e929-d582-1ad5922f825e.webp"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id,即用于把上面的id所对应的对象与下面的是s1所对应对象绑定
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2258, // skuId，下单时后端需要
            price: 319900, // 价格（单位分）
            s1: "30349", // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 90 // 当前 sku 组合对应的库存
          },
          {
            id: 2259, // skuId，下单时后端需要
            price: 349900, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "3199", // 默认价格（单位元）
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 商品标题
        title: "黑鲨游戏手机 2",
        // 默认商品 sku 缩略图
        picture:
          "//i8.mifile.cn/v1/a1/4c4ba715-87fa-e929-d582-1ad5922f825e.webp"
      },
      customStepperConfig: {
        // 自定义限购文案
        quotaText: "每次限购10件",
        // 自定义步进器超过限制时的回调
        handleOverLimit: data => {
          const { action, limitType, quota, quotaUsed } = data;

          if (action === "minus") {
            Toast("至少选择一件商品");
          }
        }
      },
      goodsId: "",
      quota: 10,
      quotaUsed: 0,
      ballFlag: false,
      goodsNum: 0
    };
  },
  computed: {
    ...mapState({
      cartList: state => state.cart
    }),
    ...mapGetters(["cartTotalNum"])
  },
  methods: {
    ...mapMutations(["addcart"]),
    showcart() {
      this.showBase = true;
    },
    showmsg() {
      this.show = true;
    },
    returnBtn() {
      this.$router.go(-1);
    },
    updateNum(value) {
      this.ballFlag = true;
      this.badgeFlag = true;
      this.goodsNum = value;
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.badgeFlag = false;
      }, 1000);
    },
    onBuyClicked() {},
    onAddCartClicked(skuData) {
      // console.log(skuData);
      var v = "";
      this.sku.tree.some(item => {
        if (skuData.selectedSkuComb[item.k_s]) {
          item.v.some(data => {
            if (data.id == skuData.selectedSkuComb[item.k_s]) {
              this.$refs.center.innerHTML = data.name;
              v = data.name;
              this.$refs.center.innerHTML += "  x" + skuData.selectedNum;
              this.$refs.left.innerHTML = "已选";
              this.$refs.left.style.color = "rgba(0, 0, 0, 0.87)";
            }
          });
        }
      });
      this.addcart({
        gid: skuData.goodsId,
        isSelect: true,
        v: {
          name: v,
          num: skuData.selectedNum,
          price: skuData.selectedSkuComb.price / 100
        }
      });
    },
    imagepreview(index) {
      ImagePreview({
        images: this.goodsInfo.ImgPreview,
        startPosition: index,
        onClose() {
          // do something
        }
      });
    },
    onClickMiniBtn() {},
    onClickBigBtn() {},
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
        .getElementById("badgeBall")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
  },
  activated() {
    var gid = this.$route.params.gid;
    axios.get("/static/mock/goodsinfo.json").then(result => {
      result.data.forEach(item => {
        if (item.gid == gid) {
          this.goodsInfo = item;
          this.goodsId = item.gid;
          this.sku.price = item.price;
          this.goods.title = item.name;
          this.goods.picture = item.imgsrc;
          this.sku.tree = item.tree;
          this.sku.list = item.list;
        }
      });
    });
    this.cartList.some(item => {
      if (item.gid == gid) {
        this.$refs.center.innerHTML = item.v[0].name;
        this.$refs.center.innerHTML += "  x" + item.v[0].num;
        this.$refs.left.innerHTML = "已选";
        this.$refs.left.style.color = "rgba(0, 0, 0, 0.87)";
        return true;
      } else {
        this.$refs.left.innerHTML = "未选";
        this.$refs.left.style.color = "red";
        this.$refs.center.innerHTML = "";
      }
    });
  }
};
</script>
<style lang="scss">
.detail_container {
  position: relative;
  &::-webkit-scrollbar {
    display: none !important;
  }
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: fixed;
    z-index: 10000;
    top: 555px;
    left: 300px;
  }
  #badgeBall {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    position: fixed;
    z-index: 10000;
    top: 620px;
    left: 130px;
    text-align: center;
    line-height: 20px;
    color: white;
  }
  .van-swipe {
    overflow: hidden;
    .van-swipe-item {
      img {
        width: 100%;
      }
    }
  }
  .returnBtn {
    position: absolute;
    top: 20px;
    left: 20px;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: rgba($color: #000000, $alpha: 0.7);
    color: white;
    text-align: center;
    i {
      line-height: 35px;
    }
  }
  .server_box {
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 100px;
    .server_info {
      margin: 25px 0;
      display: flex;
      img {
        width: 16px;
        height: 16px;
        margin-right: 16px;
      }
      p {
        font-size: 16px;
        display: flex;
        flex-direction: column;
        b {
          margin-top: 4px;
          color: rgba(0, 0, 0, 0.54);
          font-size: 14px;
        }
      }
    }
  }
  .overview-goods-name {
    padding: 16px 16px 0;
    border-top: 2px solid #e7ebf6;
    .goods-name {
      line-height: 1.5em;
      font-size: 20px;
    }
  }
  .product_info_product_desc {
    .goods-brief {
      padding: 0 16px;
      font-size: 14px;
      line-height: 18px;
      color: #3c3c3c;
    }
  }
  .product_info_product_price {
    padding: 0 16px 16px;
    .price {
      padding: 10px 0 0;
      color: #ff6700;
      font-size: 22px;
      font-weight: 550;
    }
  }
  .card_box {
    background-color: #fafafa;
    border-radius: 5px;
    overflow: hidden;
    margin: 8px 16px 10px;
    padding-bottom: 20px;
    img {
      height: 12px;
    }
    span {
      font-size: 12px;
      margin-left: 5px;
      margin-right: 5px;
    }
    .product-section {
      padding: 12px 16px;
      display: flex;
      position: relative;
      .left {
        color: red;
        margin-right: 12px;
        font-size: 12px;
        line-height: 14px;
      }
      .center {
        color: rgba(0, 0, 0, 0.87);
        font-size: 12px;
        line-height: 14px;
      }
      i {
        position: absolute;
        right: 10px;
        top: 10px;
      }
    }
  }
}
</style>
