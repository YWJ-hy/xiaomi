<template>
  <div>
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
      <div class="import">
        <input type="text" class="tex-l" placeholder="请输入电话号码">
      </div>
      <div class="submit-1">
        <input type="submit" class="sub-l" value="注册">
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
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
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
  }
  .nf-link-l{
    margin-top: 200px;
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
