<template>
  <div id="app">
    <nav-header></nav-header>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <nav-footer class="nav-footer"></nav-footer>
  </div>
</template>

<script>
import NavHeader from "./components/header/nav-header";
import NavFooter from "./components/footer/nav-footer";
export default {
  name: 'App',
  components: {NavFooter, NavHeader}
}
</script>

<style>
  .nav-footer {
    float: bottom;
    left: 0;
    bottom: 0;
  }
</style>
