<template>
    <div class="wechat-login" @click="onWechatLogin">
        <img src="../../images/wechat-logo.png" alt="微信快捷登录">
        <div>微信快捷登录</div>
    </div>
</template>
<script>
export default {
  name: 'dy-wechatLogin',
  props: {
    appid: {
      type: String
    },
    redirectTo: {
      type: String
    }
  },
  methods: {
    onWechatLogin () {
      if (!this.redirectTo || !this.appid) return
      window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?' + 'appid=' + this.appid + '&redirect_uri=' + this.redirectTo + '&response_type=code&scope=snsapi_userinfo&state=1'
    }
  }
}
</script>
<style lang="less" scoped>
    .wechat-login {
        text-align: center;
        font-size: 14px;
    }
</style>
