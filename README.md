# vue-router-progressbar
One simple progressbar plugin for [vue-router](https://github.com/vuejs/vue-router)

## install

```
yarn add vue-router-progressbar
```

## usage

```
import "vue-router-progressbar/dist/index.css";
import VueRouterProgressbar from "vue-router-progressbar";
Vue.use(VueRouterProgressbar, options)
```

```
<router-view></router-view>
<router-progressbar :options="options" />
```

## options
```
{
    zIndex: 10000,
    top: 0,
    height: '3px',
    color: '#42b983',
    startEasing: 'ease-out',
    startDuration: '10s',
    endEasing: 'ease-out',
    endDuration: '.25s'
}
```


