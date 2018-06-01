<template>
  <div class="login-wrapper">
    <div class="login-content">
      <div class="login-title">
        <h2>用户名密码登录</h2>
      </div>
      <div class="login-input">
        <input type="text" height="35" width="100%" placeholder="请输入用户名">
      </div>
      <div class="login-input">
        <input type="password" height="35" width="100%" placeholder="请输入密码">
      </div>
      <div class="login-btn">登录</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

  .login-wrapper {
    position: fixed;
    width: 300px;
    height: 400px;
    overflow: auto;
    background: #fff;
    z-index: 60;
    box-shadow: 0 0 1px #ddd;
    left: 50%;
    top: 20%;
  }
  .login-content {
    text-align: center;
  }
  .login-title {
    color: #000;
    font-size: 16px;
  }
  .login-input {
    height: 35px;
    line-height: 35%;
    margin: 20px auto;
    text-align: center;
  }
  .login-input input {
    width: 78%;
    height: 35px;
    line-height: 35px;
  }
  .login-btn {
    width: 80%;
    height: 40px;
    line-height: 40px;
    margin: 30px auto;
    background: #4fc08d;
    color: #ffffff;
    border-radius: 2px;
    box-shadow: 0 0 1px #ddd;
    cursor: pointer;
  }
</style>
