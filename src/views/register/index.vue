<template>
  <div id="biaodan">
    <div class="chuche">
      <span>注册小米账号</span>
    </div>
    <div class="chuche-mian">
      <div class="region">
        <span>中国</span>
        <i class="iconfont icon-xiangyou1"></i>
      </div>
      <div class="describe">
        <i>成功注册账号后，国家/地区将不能被修改</i>
      </div>
      <div class="from">
        <form action="" method="" @submit.prevent="register">
          <div class="import">
            <input type="text" class="tex-l" placeholder="请输入电话号码" v-model="phone">
          </div>
          <div class="verification">
            <input type="text" class="pas" placeholder="短信验证码" v-model="code">
            <button class="btn" :disabled="!rightPhone"
            :class="{right_phone: rightPhone}" @click.prevent="getCode">
            {{computeTime>0 ? `重新发送(${computeTime}s)` : '获取验证码'}}
            </button><!-- prevent阻止表单的默认行为 -->
          </div>
          <div class="password">
            <input type="password" name="" id="" class="pas" placeholder="请输入密码" v-model="pwd">
          </div>
          <div class="password">
            <input type="password" name="" id="" class="pas" placeholder="请输入确认密码" v-model="pwd2">
          </div>
          <div class="submit-1">
            <input type="submit" class="sub-l" value="注册">
          </div>
        </form>
      </div>
    </div>
    <div class="nf-link-l">
       <ul>
         <li><a href="#">简体</a><span>|</span></li>
         <li><a href="#">繁体</a><span>|</span></li>
         <li><a href="#">English</a><span>|</span></li>
         <li><a href="#">常见问题</a></li>
       </ul>
    </div>
    <reminder :alertText="alertText" v-show="showAlert" @closeTip="closeTip"></reminder>
  </div>
</template>
<script>
import reminder from '../login/bottom.vue'
export default {
  data() {
    return {
      computeTime: 0,
      phone: '',
      pwd: '',
      pwd2: '',
      code: '',
      alertText: '',//提示文本
      showAlert: false,  //是否显示提示框
    }
  },
  methods: {
    getCode: function(){
        if (!this.computeTime) {
           this.computeTime = 60
            const stetime = setInterval(() => {
              this.computeTime--
              if (this.computeTime <= 0) {
                clearInterval(stetime)
            }
         },1000)
        }
    },
    closeTip: function(){
         this.showAlert = false
        this.alertText = ''
    },
    hintAlert: function(alertText){
        this.showAlert = true
        this.alertText = alertText
    },
    register: function(){
      const {rightPhone, phone, code, pwd,pwd2} =this
        if (!this.rightPhone){
              //手机号码不正确
              this.hintAlert('手机号码不正确')
        }else if (!/^\d{6}$/.test(code)){
              //验证码不正确
              this.hintAlert('验证码不正确')
        }else if (!/^[\w_-]{6,16}$/.test(pwd)){
            //密码不正确
            this.hintAlert('密码不正确')
        }else if(pwd2 !== pwd) {
            this.hintAlert('两次密码不一致')
      }
    }
  },
  computed: {
      rightPhone: function() {
        return /^1[34578]\d{9}$/.test(this.phone);
      }
  },
  components: {
    reminder
  }
}
</script>
<style lang="scss">
  .biaodan{
    width: 375px;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .chuche{
      width: 100%;
      text-align: center;
      padding-top: 35px;
      padding-bottom: 20px;
      span{
        font-size: 20px;
      }
    }
    .chuche-mian{
      padding: 0 28px;
      .region{
        padding-top: 40px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #cccccc;
        i{
          float: right;
        }
      }
      .describe{
        padding-top: 5px;
        i{
          font-size: 12px;
          color: #9b9b9b;
        }
      }
      .import{
        padding-top: 30px;
        .tex-l{
          height: 40px;
          width: 100%;
          border-bottom: 1px solid orangered;
        }
      }
      .password{
        padding-top: 30px;
        .pas{
          height: 40px;
          width: 100%;
          border-bottom: 1px solid orangered;
        }
      }
      .submit-1{
        padding-top: 30px;
        .sub-l{
          height: 40px;
          width: 100%;
          background:  orangered;
          color: white;
          text-align: center;
          line-height: 40px;
          border-radius: 6px;
        }
      }
      .verification{
        width: 319px;
        height: 55px;
        border-bottom: 1px solid orangered;
        .pas{
          width: 200px;
          height: 55px;
        }
        .btn{
          width: 100px;
          border: none;
          background: #ffffff;
          color: #cccccc;
          &.right_phone{
            color: #000;
          }
        }
      }
    }
    .nf-link-l{
      margin-top: 100px;
      margin-left: 75px;
      li{
        float: left;
        a{
          font-size: 14px;
        }
        span{
          padding: 0 8px;
        }
      }
    }
</style>
