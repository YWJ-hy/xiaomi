<template>
  <div class="alert_container">
    <div class="text_container">
      <div class="tip_icon">
        <span class="iconfont icon-tishi"></span>
      </div>
      <p class="tip_text">{{alertText}}</p>
      <div class="confrim" @click="closeTip">确认</div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      alertText: String
    },

    methods: {
      closeTip() {
        // 分发自定义事件(事件名: closeTip)
        this.$emit('closeTip')
      }
    }
  }
</script>
<style lang="scss">
   .alert_container{
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     z-index: 200;
     background: rgba(0, 0, 0, .5);
     .text_container{
       width: 200px;
       height: 150px;
       position: absolute;
       top: 50%;
       left: 50%;
       background: white;
       z-index: 201;
       margin-top: -75px;
       margin-left: -100px;
       .tip_icon{
         width: 100%;
         text-align: center;
         span{
           font-size: 60px;
           color: orange;
         }
       }
       .tip_text{
         width: 100%;
         text-align: center;
       }
       .confrim{
         width: 100%;
         height: 50px;
         line-height: 50px;
         text-align: center;
         background: chartreuse;
         color: white;
         position: absolute;
         bottom: 0;
         left: 0;
       }
     }
   }
</style>
