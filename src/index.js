import bar from './router-progressbar.vue'
import Config from './config'
export default {
  install (Vue, options) {
    Config.options = options
    Vue.component('RouterProgressbar', bar)
  }
}
