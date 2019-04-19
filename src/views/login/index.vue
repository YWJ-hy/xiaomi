<template>
  <div>
    <div class="header_c">
      <span><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555423709420&di=f50b8999d58faa82a602242ed217690c&imgtype=0&src=http%3A%2F%2Fimg1.szhk.com%2FImage%2F2018%2F06%2F27%2F1530079439278.png" alt=""></span>
      <h4>小米账号登入</h4>
   </div>
   <div class="zhonhe">
     <form action="" method="" @submit.prevent="login">
       <div class="note" v-if="message">
        <input type="text" class="tex" placeholder="手机号码" maxlength="11" v-model="phone">
          <div class="verification">
            <input type="text" class="pas" placeholder="短信验证码" v-model="code">
            <button class="btn" :disabled="!rightPhone"
            :class="{right_phone: rightPhone}" @click.prevent="getCode">
            {{computeTime>0 ? `重新发送(${computeTime}s)` : '获取验证码'}}
            </button><!-- prevent阻止表单的默认行为 -->
          </div>
          <input type="submit" value="立即登入/注册" class="sub">
       </div>
     <div class="user" v-else>
      <input type="text" class="tex" placeholder="邮箱/手机号码/小米ID" v-model="name"><br>
        <div class="zhujian">
          <input type="text" class="pwd" placeholder="密码" v-if="switchover" v-model="pwd">
          <input type="password" class="pwd" placeholder="密码" v-else v-model="pwd">
          <van-icon name="eye" @click="switchover=!switchover" :class="{switColor: switchover}"/>
        </div>
        <div class="cation">
          <input type="text" class="verifi" placeholder="输入验证码">
          <img src="http://localhost:4000/captcha" alt="" @click="getCaptcha">
        </div>
      <input type="submit" value="登入" class="sub">
     </div>
    </form>
   </div>
   <div class="other">
     <div class="sms_link">
       <a href="#" @click="isShow">{{ content }}</a>
     </div>
     <div class="revrese">
       <router-link to="/register">立即注册</router-link>
       <span>|</span>
       <a href="#">忘记密码?</a>
     </div>
     <div class="otherMethods">
       <fieldset class="oth_type_tit">
         <legend align="center">其他方式登入</legend>
       </fieldset>
       <div class="sns-login">
           <a href="#" title="微博"><i class="iconfont icon-wangwangfill"></i></a>
           <a href="#" title="支付宝"><i class="iconfont icon-shoujitaobao"></i></a>
           <a href="#" title="微信"><i class="iconfont icon-xinxifill"></i></a>
       </div>
     </div>
   </div>
   <div class="nf-link">
       <ul>
         <li><a href="#">简体</a><span>|</span></li>
         <li><a href="#">繁体</a><span>|</span></li>
         <li><a href="#">English</a><span>|</span></li>
         <li><a href="#">简体常见问题</a><span>|</span></li>
         <li><a href="#">隐私特权</a></li>
       </ul>
  </div>
   <reminder :alertText="alertText" v-show="showAlert" @closeTip="closeTip"></reminder>
  </div>
</template>
<script>
import reminder from './bottom.vue'
export default {
    data() {
      return {
        message: true,//true代表短信登入 false代表密码登入
        content: '用户密码登入',
        switchover: false,
        computeTime: 0,
        pwd: '',
        phone: '',
        name: '',
        code: '',
        alertText: '',//提示文本
        showAlert: false,  //是否显示提示框
      }
    },
    methods: {
      isShow: function(){
        this.message = !this.message;
        if(this.message){
          this.content = '用户密码登入'
        }else {
          this.content = '手机短信登入/注册'
        }
      },
      getCode: function(){
        console.log(1)
        if (!this.computeTime) {
           this.computeTime = 60
           console.log(this.computeTime)
            const stetime = setInterval(() => {
              this.computeTime--
              console.log(this.computeTime);
              if (this.computeTime <= 0) {
                clearInterval(stetime)
            }
         },1000)
        }
      },
      hintAlert: function(alertText){
        this.showAlert = true
        this.alertText = alertText
      },
      login: function(){
        //前端表单验证
        if (this.message){//短信登入
          const {rightPhone, phone, code} =this
          if (!this.rightPhone){
            //手机号码不正确
            this.hintAlert('手机号码不正确')
          }else if (!/^\d{6}$/.test(code)){
            //验证码不正确
            this.hintAlert('验证码不正确')
          }
        }else {//密码登入
           const {name,pwd} = this
           if (!this.name) {
             //用户名不存在
             this.hintAlert('用户名不存在')
           }else if (!this.pwd) {
             //密码不正确
             this.hintAlert('密码不正确')
           }
        }
      },
      closeTip: function(){
         this.showAlert = false
        this.alertText = ''
      },
      getCaptcha: function(event){
        event.target.src = 'http://localhost:4000/captcha?time='+Date.now()
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
  .header_c{
    width: 335px;
    height: 127px;
    margin-left: 20px;
    text-align: center;
    img{
      width: 48px;
      height: 48px;
      padding-top: 30px;
    }
    h4{
      padding-top: 15px;
      font-size: 20px;
    }
  }
  .tex{
    width: 335px;
    height: 55px;
    border-bottom: 1px solid #bbbbbb;
    margin-left: 20px;
  }
  .zhujian{
    width: 335px;
    height: 55px;
    border-bottom: 1px solid #bbbbbb;
    margin-left: 20px;
    position: relative;
    .pwd{
    width: 300px;
    height: 55px;
    line-height: 55px;
    }
    .van-icon{
      position: absolute;
      right: 10px;
      top: 20px;
      font-size: 20px;
      &.switColor{
        color: orange;
      }
    }

  }
  .cation{
    width: 335px;
    height: 55px;
    border-bottom: 1px solid #bbbbbb;
    margin-left: 20px;
    position: relative;
    .verifi{
      width: 150px;
      height: 50px;
      position: absolute;
      left: 0;
      top: 0;
    }
    img{
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .verification{
    width: 335px;
    height: 55px;
    border-bottom: 1px solid #bbbbbb;
    margin-left: 20px;
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
  .sub{
    width: 335px;
    height: 46px;
    border-radius: 6px;
    margin-left: 20px;
    background: #ff6700;
    color: white;
    line-height: 46px;
    text-align: center;
    font-size: 20px;
    margin-top: 24px;
  }
  .other{
    width: 335px;
    height: 200px;
    margin-left: 20px;
    margin-top: 24px;
    .sms_link{
      width: 100%;
      a{
        display: block;
        width: 100%;
        height: 46px;
        line-height: 46px;
        text-align: center;
        font-size: 18px;
        border-radius: 6px;
        border: 1px solid #cccccc;
        color: #000;
        cursor: pointer;
      }
    }
    .revrese{
      width: 100%;
      height: 20px;
      text-align: center;
      margin-top: 20px;
      span{
        margin: 0 10px;
      }
    }
    .otherMethods{
      width: 100%;
      margin-top: 40px;
      .oth_type_tit{
        border-top: 1px solid #f2f2f2;
        legend{
          font-size: 14px;
          color: #cccccc;
        }
      }
      .sns-login{
        width: 100%;
        height: 44px;
        padding-top: 20px;
        text-align: center;
        i{
          font-size: 24px;
          margin-left: 10px;
        }
      }
    }
  }
  .nf-link{
    margin-top: 30px;
    margin-left: 25px;
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
