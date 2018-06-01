<template>
    <div class="detail-wrapper">
      <div class="detail">
        <div class="detail-left">
          <div class="product-board">
            <img :src="productIcon">
            <ul>
              <router-link v-for="(item, index) in products"
                           :key="index"
                           :to="{path: item.path}"
                           tag="li"
                           active-class="active">
                {{item.name}}
              </router-link>
            </ul>
          </div>
        </div>
        <div class="detail-right">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "detail",
      data () {
        return {
          products: [
            {
              name: '数据统计',
              path: 'count',
              icon: require('../assets/images/1.png'),
              active: false
            },
            {
              name: '数据预测',
              path: 'forecast',
              active: false
            },
            {
              name: '流量分析',
              path: 'analysis',
              active: false
            },
            {
              name: '广告发布',
              path: 'publish',
              active: false
            }
          ],
          imgMap: {
            '/detail/count': require("../assets/images/1.png"),
            '/detail/forecast': require("../assets/images/2.png"),
            '/detail/analysis': require("../assets/images/3.png"),
            '/detail/publish': require("../assets/images/4.png")
          }
        }
      },
      computed: {
        productIcon() {
          return this.imgMap[this.$route.path]
        }
      }
    }
</script>

<style scoped>
  .detail-wrapper {
    width: 100%;
    overflow: hidden;
  }
  .detail {
    width: 1200px;
    margin: 0 auto;
  }
  .detail-left {
    float: left;
    width: 200px;
    text-align: center;
  }
  .product-board {
    background: #ffffff;
    padding: 20px 0;
  }
  .product-board ul {
    margin-top: 20px;
  }
  .product-board li {
    padding: 10px 15px;
    cursor: pointer;
  }
  .product-board li.active,
  .product-board li:hover {
    background: #4fc08d;
    color: #ffffff;
  }
  .product-board li a {
    display: block;
  }
  .detail-right {
    float: left;
    width: 980px;
    margin-left: 20px;
  }
</style>
