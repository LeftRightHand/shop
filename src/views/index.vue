<template>
  <div class="index-wrapper">
      <div class="index-left">
        <div class="index-left-block">
          <h2>全部产品</h2>
          <template v-for="product in productList">
            <h3>{{product.title}}</h3>
            <ul>
              <li v-for="item in product.list">
                <a :href="item.url">{{item.name}}</a>
              </li>
            </ul>
            <div v-if="!product.last" class="hr"></div>
          </template>
        </div>
        <div class="index-left-block lastext-news">
          <h2>最新消息</h2>
          <ul>
            <li v-for="item in newsList" class="new">
              <a :href="item.url" class="new-item">{{item.title}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="index-right">
        <slider class="slider" :sliders="slides" :inv="invTime"></slider>
        <div class="index-board-list">
          <div class="index-board-item"
               v-for="(item, index) in boardList"
               :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
            <div class="index-board-item-inner">
              <h2>{{item.title}}</h2>
              <p>{{item.description}}</p>
              <div class="index-board-button">
                <router-link class="button" :to="{path:''}">立即购买</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

  import axios from 'axios'
  import Slider from "../components/slider/slider";

  export default {
    name: "index",
    components: {Slider},
    data() {
      return {
        invTime: 3000,
        slides: [
          {
            src: require('../assets/slideShow/pic1.jpg'),
            title: 'xxx1',
            href: 'detail/analysis'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            title: 'xxx2',
            href: 'detail/count'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            title: 'xxx3',
            href: 'http://xxx.xxx.com'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            title: 'xxx4',
            href: 'detail/forecast'
          }
        ],
        newsList:[],
        boardList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            id: 'car',
            toKey: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            toKey: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            id: 'loud',
            toKey: 'forecast',
            saleout: true
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            id: 'hill',
            toKey: 'publish',
            saleout: false
          }
        ],
        productList: {
          pc: {
            title: 'PC产品',
            list: [
              {
                name: '数据统计',
                url: 'http://starcraft.com'
              },
              {
                name: '数据预测',
                url: 'http://warcraft.com'
              },
              {
                name: '流量分析',
                url: 'http://overwatch.com',
                hot: true
              },
              {
                name: '广告发布',
                url: 'http://hearstone.com'
              }
            ]
          },
          app: {
            title: '手机应用类',
            last: true,
            list: [
              {
                name: '91助手',
                url: 'http://weixin.com'
              },
              {
                name: '产品助手',
                url: 'http://twitter.com',
                hot: true
              },
              {
                name: '智能地图',
                url: 'http://maps.com'
              },
              {
                name: '团队语音',
                url: 'http://phone.com'
              }
            ]
          }
        }
      }
    },
    created() {
      axios.get('/api/getNewsList', {}).then((res)=>{
        this.newsList = res.data.data;
        console.log(this.newsList)
      })
    }

  }
</script>

<style scoped>
  .index-wrapper {
    width: 1200px;
    margin: 0 auto;
  }
  .index-left {
    float: left;
    width: 200px;
    text-align: left;
  }
  .index-left-block {
    margin: 10px;
    background: #fff;
    box-shadow: 0 0 1px #ddd;
  }
  .index-left-block h2 {
    background: #4fc08d;
    color: #ffffff;
    padding: 10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3 {
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;
  }
  .index-left-block ul {
    padding: 10px 15px;
  }
  .index-left-block li {
    padding: 6px;
  }
  .index-left-block .hr {
    background: #4fc08d;
    margin-bottom: 20px;
  }
  .index-right {
    float: left;
    width: 900px;
  }
  .slider {
    margin: 10px;
    width: 900px;
    height: 460px;
  }
  .index-board-list {
    margin-top: 40px;
    overflow: hidden;
  }
  .index-board-item {
    float: left;
    width: 400px;
    background: #fff;
    margin-right: 20px;
    padding-left: 20px;
  }
  .index-board-item-inner {
    min-height: 125px;
    padding-left: 120px;
  }
  .index-board-item h2 {
    font-size: 18px;
    font-weight: bold;
    color: #000;
    margin-bottom: 15px;
  }
  .index-board-button {
    margin-top: 20px;
  }
  .index-board-car .index-board-item-inner{
    background: url(../assets/images/1.png) no-repeat;
  }
  .index-board-loud .index-board-item-inner{
    background: url(../assets/images/2.png) no-repeat;
  }
  .index-board-earth .index-board-item-inner{
    background: url(../assets/images/3.png) no-repeat;
  }
  .index-board-hill .index-board-item-inner{
    background: url(../assets/images/4.png) no-repeat;
  }
  .line-last {
    margin-right: 0;
  }
  .new {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
