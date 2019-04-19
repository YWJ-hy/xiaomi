<template>
  <div class="cart_container">
    <transition
      appear
      enter-active-class="animated zoomInLeft"
      leave-active-class="animated zoomOutRight"
    >
      <van-nav-bar
        title="购物车"
        :left-arrow="true"
        :fixed="true"
        :z-index="2000"
        @click-left="$router.go(-1)"
      >
        <van-icon name="search" slot="right"/>
      </van-nav-bar>
    </transition>
    <div class="cart_list" v-if="cartTotalNum">
      <div class="cart_good" v-for="(item,index) in cartList" :key="index">
        <van-checkbox
          v-model="getGoodsisSelect[item.gid]"
          checked-color="#07c160"
          @click="updateSelect(item.gid)"
        ></van-checkbox>
        <van-card :num="getGoodsNum[item.gid]" :title="item.name" :thumb="item.imgsrc">
          <div slot="desc">
            <div
              style="font-size:14px;"
              v-for="(data,index) in getGoodsV[item.gid]"
              :key="index"
            >{{`${data} x${getGoodsVNum[item.gid][data]}`}}</div>
          </div>
          <div slot="price">
            <p ref="price">￥{{getGoodsVPrice[item.gid][getGoodsV[item.gid][0]]}}</p>
          </div>
          <div slot="footer">
            <van-button type="primary" @click="selectV(item.gid,index)">{{getGoodsV[item.gid][0]}}</van-button>
            <van-stepper
              v-model="getGoodsVNum[item.gid][getGoodsV[item.gid][vIndexList[index].vIndex]]"
              @change="ballFlag=!ballFlag"
              @plus="updateGoodsNum({gid:item.gid,num:1,name:getGoodsV[item.gid][vIndexList[index].vIndex]})"
              @minus="updateGoodsNum({gid:item.gid,num:-1,name:getGoodsV[item.gid][vIndexList[index].vIndex]})"
              :disable-input="true"
            />
            <van-button type="info" @click="remove(item.gid)">
              <i class="iconfont icon-shanchu"></i>
            </van-button>
          </div>
        </van-card>
        <van-submit-bar :price="getGoodsTotalAmount*100" button-text="提交订单" @submit="onSubmit">
          <van-checkbox v-model="getcartAllselect" @click="toggleSelect">全选</van-checkbox>
          <span slot="tip" @click="showMsg">
            <div style="text-align:center">填写收货信息</div>
          </span>
        </van-submit-bar>
      </div>
    </div>
    <div class="cartEmpty" v-else>
      <van-icon name="cart-o"/>
      <p>您的购物车还是空的喔</p>
    </div>
    <van-actionsheet v-model="show" title="种类选择">
      <van-picker :columns="columns" @change="onChange"/>
    </van-actionsheet>
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <van-actionsheet v-model="show1" title="收货信息">
      <van-address-edit
        :area-list="areaList"
        show-postal
        :show-delete="false"
        :show-set-default="false"
        show-search-result
        :search-result="searchResult"
        @save="onSave"
      />
    </van-actionsheet>
    <van-dialog v-model="show2" title="确认信息" show-cancel-button @confirm="success" confirmButtonText="确认下单">
      <van-cell-group>
        <van-cell title="收货人" :value="content.name"/>
        <van-cell title="联系电话" :value="content.tel"/>
        <van-cell
          title="收货地址"
          :value="content.province+content.city+content.county+content.addressDetail"
        />
        <van-cell title="邮编" :value="content.postalCode"/>
      </van-cell-group>
    </van-dialog>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import $ from "jquery";
import axios from "axios";
import { Toast } from "vant";
import area from "../../assets/js/area.js";
import dialog from "./dialog";
export default {
  data() {
    return {
      ballFlag: false,
      x: "",
      y: "",
      cartList: [],
      value: {},
      show: false,
      show1: false,
      show2: false,
      submitFlag: false,
      checked: false,
      columns: [],
      btnIndex: 0,
      vIndexList: [],
      selectList: {},
      Gid: 0,
      areaList: area,
      searchResult: [],
      content: {}
    };
  },
  computed: {
    ...mapGetters([
      "cartTotalNum",
      "getGoodsNum",
      "getcartAllgid",
      "getGoodsNumAndAmount",
      "getGoodsisSelect",
      "getGoodsV",
      "getGoodsVNum",
      "getGoodsVPrice",
      "getGoodsTotalAmount",
      "getcartOneSelect"
    ]),
    getcartAllselect: {
      get() {
        return this.$store.getters.getcartAllselect;
      },
      set() {}
    }
  },
  methods: {
    onSave(content) {
      this.content = content;
      this.submitFlag = true;
      Toast("保存成功");
    },
    onSubmit() {
      if (!this.getcartOneSelect) {
        Toast("请选择要购买的商品");
      } else {
        if (this.submitFlag) {
          this.show2 = true;
        } else {
          Toast("请点击并填写收货信息");
        }
      }
    },
    success() {
      Toast("恭喜你下单成功，请耐心等待~");
    },
    ...mapMutations([
      "updateGoodsNum",
      "updateGoodsSelected",
      "removeGoods",
      "cartAllSelect",
      "cartAllNoSelect"
    ]),
    remove(gid) {
      this.removeGoods(gid);
      this.cartList.some((item, index) => {
        if (item.gid == gid) {
          this.cartList.splice(index, 1);
          return true;
        }
      });
    },
    updateSelect(gid) {
      this.updateGoodsSelected(gid);
    },
    selectV(gid, btnIndex) {
      this.columns = this.getGoodsV[gid];
      this.Gid = gid;
      this.btnIndex = btnIndex;
      this.show = !this.show;
    },
    onChange(picker, value, index) {
      this.vIndexList[this.btnIndex].vIndex = index;
      $(".van-button--primary .van-button__text")[
        this.btnIndex
      ].innerHTML = value;
      this.$refs.price[this.btnIndex].innerHTML =
        "￥" + this.getGoodsVPrice[this.Gid][value];
      Toast(`当前选择：${value}`);
    },
    showMsg() {
      this.show1 = !this.show1;
    },
    toggleSelect() {
      console.log(this.getcartAllselect);
      this.getcartAllselect ? this.cartAllNoSelect() : this.cartAllSelect();
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
        .getElementsByClassName("van-info")[0]
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
  mounted() {
    axios.get("/static/mock/goodsinfo.json").then(result => {
      this.getcartAllgid.forEach(gid => {
        result.data.some(item => {
          if (item.gid == gid) {
            this.cartList.push(item);
            return true;
          }
        });
      });
      for (var i = 0; i < this.cartList.length; i++) {
        this.vIndexList.push({ vIndex: 0 });
      }
    });
    this.selectList = this.getGoodsisSelect;
    $(".cart_container").delegate(
      ".van-stepper__plus,.van-stepper__minus",
      "click",
      function(event) {
        var position = $(event.target)
          .parent()
          .find(".van-stepper__input")[0]
          .getBoundingClientRect();
        this.x = position.left;
        this.y = position.top;
        $(".ball")[0].style.left = this.x + "px";
        $(".ball")[0].style.top = this.y + "px";
      }
    );
  }
};
</script>
<style lang="scss">
.cart_container {
  margin-top: 50px;
  .cartEmpty {
    text-align: center;
    padding-top: 200px;
    .van-icon {
      font-size: 150px;
    }
    p {
      font-size: 18px;
    }
  }
  .van-submit-bar {
    bottom: 50px;
    .van-submit-bar__bar {
      padding-left: 10px;
    }
  }
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 10000;
    top: 555px;
    left: 300px;
  }
  #badgeBall {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 10000;
    top: 610px;
    left: 243px;
    text-align: center;
    line-height: 20px;
    color: white;
  }
  .cart_good {
    background: #fafafa;
    display: flex;
    align-items: center;
    padding-left: 8px;
    .van-switch--on .van-switch__node {
      transform: translateX(2em);
    }
    .van-switch__node {
      width: 2em;
      height: 2em;
    }
    .van-card {
      flex: 1;
      .van-card__footer {
        > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .van-stepper {
        margin-bottom: 4px;
      }
    }
  }
  .van-nav-bar {
    height: 50px;
    background: #f2f2f2;
    color: #666;
    .van-nav-bar__arrow {
      font-size: 26px;
      color: #666;
    }
    .van-nav-bar__right {
      font-size: 26px;
      .van-icon {
        color: #666;
        vertical-align: none;
      }
    }
  }
}
</style>
