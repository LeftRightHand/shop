<template>
    <div class="slider">
      <transition-group tag="ul" class='slide-ul' :name="name">
        <li v-for="(item , index ) in sliders" :key="index" v-show="index===nowIndex">
          <a :href="item.href">
            <img :src="item.src">
          </a>
        </li>
      </transition-group>
      <ul class="slide-pages">
        <li v-for="(item, index) in sliders"
            @click="touchGoto(index)"
            class="slide-page-point"
        >
          <a :class="{'active': index === nowIndex}">{{ index + 1 }}</a>
        </li>
      </ul>
      <div class="control-wrapper">
        <a class="prev" @click="touchGoto(prevIndex)"></a>
        <a class="next" @click="touchGoto(nextIndex)"></a>
      </div>
    </div>
</template>

<script>
    export default {
      name: "slider",
      props: {
        sliders: {
          type: Array,
          default:[]
        },
        inv: {
          type: Number,
          default: 2000
        },
        name: {
          type: String,
          default: 'move'
        },
      },
      data() {
        return {
          nowIndex: 0,
          isShow: true
        }
      },
      computed: {
        prevIndex () {
          if (this.nowIndex === 0) {
            return this.sliders.length - 1
          }
          else {
            return this.nowIndex - 1
          }
        },
        nextIndex() {
          if (this.nowIndex === this.sliders.length - 1) {
            return 0
          } else {
            return this.nowIndex + 1
          }
        }
      },
      methods : {
        touchGoto(index) {
          this._clearInv()
          this.goto(index)
          this.runInv()
        },
        goto(index) {
          this.isShow = false;
          setTimeout(()=>{
            this.isShow = true;
            this.nowIndex = index
          }, 10)
        },
        runInv() {
          this.invId = setInterval(()=>{
            this.goto(this.nextIndex);
          }, this.inv)
        },
        _clearInv () {
          clearInterval(this.invId)
        }
      },
      mounted() {
        this.runInv();
      }
    }
</script>

<style scoped>
  .slide-pages {
    position: absolute;
    bottom: 20px;
    right: 30px;
  }
  .slide-pages  li {
    display: inline-block;
    height: 18px;
  }
  .slide-pages a {
    display: block;
    width: 6px;
    height: 6px;
    margin: 0 5px;
    border: 2px solid #fff;
    border-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    text-align: left;
    text-indent: -9999px;
    overflow: hidden;
    _zoom: 1;
    background: #f5f5f5;
    background: rgba(0, 0, 0, 0.4);
    -webkit-transition: all .2s;
    transition: all .2s;
  }
  .slide-pages li .active {
    background: #fff;
    background: rgba(255, 255, 255, 0.4);
    border-color: #757575;
    border-color: rgba(0, 0, 0, 0.4);
  }

  .control-wrapper a {
      display: inline-block;
      position: absolute;
      top: 50%;
      width: 41px;
      height: 69px;
      transform: translateY(-50%);
  }

  .prev {
    left: 0;
    background: url("http://c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png") no-repeat -84px 50%;
  }
  .prev:hover {
      background-position: 0 50%
  }

  .next {
    right: 0;
    display: inline-block;
    background: url(//c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -125px 50%;
  }
  .next:hover {
      background-position: -42px 50%;
  }

  .slider {
    position: relative;
    overflow: hidden;
  }
  .slide-ul li {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .slide-ul img {
    width: 100%;
    height: 100%;
  }
  .move-enter-active {
    transition: all 0.5s ease;
    transform: translateX(0)
  }

  .move-leave-active {
    transition: all 0.5s ease;
    transform: translateX(-100%);
  }

  .move-enter {
    transform: translateX(100%);
  }

  .move-leave {
    transform: translateX(0);
  }
</style>
