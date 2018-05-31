<template>
    <div class="mask-wrapper">
      <div class="mask" v-show="isShow" @click="onClose"></div>
        <div v-show="isShow">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
      name: "navMask",
      props: {
        isShow: {
          type: Boolean,
          default: false
        }
      },
      methods: {
        onClose() {
          this.$emit('on-close')
        }
      }
    }
</script>

<style scoped>

  .mask {
    position: fixed;
    background: #000;
    opacity: 0.3;
    z-index: 50;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .drop-enter-active {
    transition: all 0.5s ease;
  }
  .drop-leave-active {
    transition: all 0.3s ease;
  }
  .drop-enter {
    transform: translateY(-500px);
  }
  .drop-leave-active {
    transform: translateY(-500px);
  }
</style>
