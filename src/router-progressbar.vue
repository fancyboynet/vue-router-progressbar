<template>
  <div
    class="vue-router-progressbar"
    :key="key"
    ref="bar"
    :style="style"
    :class="{
    'vue-router-progressbar-start': toStart,
    'vue-router-progressbar-end': toEnd
  }"
  ></div>
</template>

<script>
import Config from './config'
export default {
  props: {
    options: {
      type: Object,
      default () {
        return null
      }
    }
  },
  data () {
    return {
      toStart: false,
      toEnd: false,
      key: 1
    }
  },
  computed: {
    opt () {
      return Object.assign({}, Config.options, this.options)
    },
    style () {
      const {
        zIndex,
        top,
        height,
        color: background,
        startEasing,
        endEasing,
        startDuration,
        endDuration
      } = this.opt
      return {
        zIndex,
        top,
        height,
        background,
        'animation-timing-function': this.toStart ? startEasing : endEasing,
        'animation-duration': this.toStart ? startDuration : endDuration
      }
    }
  },
  mounted () {
    this.$router.beforeEach((to, from, next) => {
      this.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.end()
    })
  },
  methods: {
    start () {
      this.reset()
      this.toStart = true
    },
    end () {
      const bar = this.$refs.bar
      bar.style.width = bar.offsetWidth + 'px'
      this.$nextTick().then(() => {
        this.toStart = false
        this.toEnd = true
      })
    },
    reset () {
      this.toStart = false
      this.toEnd = false
      this.key = this.key + 1
    }
  }
}
</script>
<style lang="less" scoped>
@namespace: ~"vue-router-progressbar";
.@{namespace} {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: #42b983;
  z-index: 10000;
  &.@{namespace}-start {
    animation-name: start;
    animation-fill-mode: forwards;
  }
  &.@{namespace}-end {
    animation-name: end;
    animation-fill-mode: forwards;
  }
  @keyframes start {
    from {
      width: 0;
    }
    to {
      width: 95%;
    }
  }
  @keyframes end {
    99% {
      width: 100%;
    }
    100% {
      width: 0;
    }
  }
}
</style>
