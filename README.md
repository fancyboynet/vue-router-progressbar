<h1>vue-router-progressbar<a href="https://www.npmjs.com/package/vue-router-progressbar"><img alt="npm" src="https://img.shields.io/npm/v/vue-router-progressbar?color=sucess"></a></h1>
One simple progressbar plugin for [vue-router](https://github.com/vuejs/vue-router)

## Install

```
yarn add vue-router-progressbar
```

## Usage

```
import "vue-router-progressbar/dist/index.css";
import VueRouterProgressbar from "vue-router-progressbar";
Vue.use(VueRouterProgressbar, options)
```

```
<router-view></router-view>
<router-progressbar :options="options" />
```

## Options
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


