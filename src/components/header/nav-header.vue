<template>
  <div class="header">
    <div class="header-inner">
      <div class="header-logo">
        <img width="40" height="40" src="../../assets/logo.png" >
      </div>
      <div class="header-nav">
        <ul>
          <li>登录</li>
          <li class="nav-pile">|</li>
          <li>注册</li>
          <li class="nav-pile">|</li>
          <li>关于</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "nav-header"
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
