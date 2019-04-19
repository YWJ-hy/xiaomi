import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var cart = JSON.parse(localStorage.getItem('cart') || '[]')

export default new Vuex.Store({
  state: {
    cart: cart
  },
  mutations: {
    addcart(state, goodinfo) {
      // console.log(goodinfo);
      var flag = false;
      state.cart.some(item => {
        if (item.gid == goodinfo.gid) {
          item.v.some(data => {
            // console.log(data.name,goodinfo.v.name);
            if (data.name == goodinfo.v.name) {
              // console.log(2);
              data.num += parseInt(goodinfo.v.num);
              flag = true;
              return true;
            }
          });
          if (!flag) {
            item.v.push(goodinfo.v);
          }
          flag = true;
        }
      });
      if (!flag) {
        var arr = [];
        arr.push(goodinfo.v);
        goodinfo.v = arr;
        state.cart.push(goodinfo);
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateGoodsNum(state, info) {
      state.cart.some(item => {
        if (item.gid == info.gid) {
          item.v.some(data => {
            if (data.name == info.name) {
              data.num += parseInt(info.num);
              return true;
            }
          });
          return true;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateGoodsSelected(state, gid) {
      state.cart.some(item => {
        if (item.gid == gid) {
          item.isSelect = !item.isSelect;
          return true;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeGoods(state, gid) {
      state.cart.some((item, index) => {
        if (item.gid == gid) {
          state.cart.splice(index, 1);
          return true;
        }
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    cartAllSelect(state) {
      state.cart.forEach(item => {
        item.isSelect = true;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    cartAllNoSelect(state) {
      state.cart.forEach(item => {
        item.isSelect = false;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },
  getters: {
    cartTotalNum(state) {
      var num = 0;
      state.cart.forEach(item => {
        item.v.forEach(data => {
          num += data.num;
        })
      });
      return num;
    },
    getGoodsNum(state) {
      var obj = {};
      var num = 0;
      state.cart.forEach(item => {
        item.v.forEach(data => {
          num += data.num
        })
        obj[item.gid] = num;
        num = 0;
      });
      return obj;
    },
    getGoodsV(state) {
      var obj = {};
      var arr = [];
      state.cart.forEach(item => {
        arr = [];
        item.v.forEach(data => {
          arr.push(data.name);
        });
        obj[item.gid] = arr;
      })
      return obj;
    },
    getGoodsVNum(state) {
      var obj = {};
      var obj1 = {};
      state.cart.forEach(item => {
        obj1 = {};
        item.v.forEach(data => {
          obj1[data.name] = data.num;
        });
        obj[item.gid] = obj1;
      });
      return obj;
    },
    getGoodsVPrice(state) {
      var obj = {};
      var obj1 = {};
      state.cart.forEach(item => {
        obj1 = {};
        item.v.forEach(data => {
          obj1[data.name] = data.price;
        });
        obj[item.gid] = obj1;
      });
      return obj;
    },
    getGoodsisSelect(state) {
      var obj = {};
      state.cart.forEach(item => {
        obj[item.gid] = item.isSelect;
      });
      return obj;
    },
    getcartAllgid(state) {
      var arr = [];
      state.cart.forEach(item => {
        arr.push(item.gid);
      });
      return arr;
    },
    getcartAllselect(state){
      // 所有选中返回true
      var flag=true;
      state.cart.some(item=>{
        if(!item.isSelect){
          flag=false;
          return true;
        }
      });
      return flag;
    },
    getcartOneSelect(state){
      // 只要有一个选中就返回true
      var flag=false;
      state.cart.some(item=>{
        if(item.isSelect){
          flag=true;
          return true;
        }
      });
      return flag;
    },
    getGoodsTotalAmount(state) {
      var amount = 0;
      state.cart.forEach(item => {
        if (item.isSelect) {
          item.v.forEach(data=>{
            amount += data.num * data.price;
          });
        }
      });
      return amount;
    }
  }
})
