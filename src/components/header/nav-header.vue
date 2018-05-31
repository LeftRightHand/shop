<template>
  <div class="header">
    <div class="header-inner">
      <div class="header-logo">
        <img width="40" height="40" src="../../assets/logo.png" >
      </div>
      <div class="header-nav">
        <ul>
          <li @click="loginClick">登录</li>
          <li class="nav-pile">|</li>
          <li>注册</li>
          <li class="nav-pile">|</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
    <nav-mask :is-show="isShowLoginMask" @on-close="closeMask">
      <login></login>
    </nav-mask>
  </div>
</template>

<script>
    import navMask from "../mask/mask";
    import Login from "../login/login";

    export default {
      components: {
        Login,
        navMask},
      name: "nav-header",
      data() {
        return {
          isShowLoginMask: false,
        }
      },
      methods: {
        loginClick() {
          this.isShowLoginMask = true
          console.log('login')
        },
        closeMask () {
          this.isShowLoginMask = false
        }
      }
    }
</script>

<style scoped>
  .header {
    background: #363636;
    color: #b2b2b2;
    height: 60px;
    line-height: 60px;
    width: 100%;
  }
  .header-inner {
    width: 1200px;
    margin: 0 auto;
  }
  .header-logo {
    float: left;
    margin: 10px 10px;
  }
  .header-nav {
    float: right;
  }
  .header-nav ul {
    overflow: hidden;
  }
  .header-nav li {
    cursor: pointer;
    float: left;
  }
  .nav-pile {
    padding: 0 10px;
  }



</style>
