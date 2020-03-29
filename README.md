<h1>vue-router-progressbar<a href="https://www.npmjs.com/package/vue-router-progressbar"><img alt="npm" src="https://img.shields.io/npm/v/vue-router-progressbar?color=sucess"></a></h1>

One easy to use progressbar plugin for [vue-router](https://github.com/vuejs/vue-router)

## Install

```
yarn add vue-router-progressbar
```

## Usage

```js
import "vue-router-progressbar/dist/index.css";
import VueRouterProgressbar from "vue-router-progressbar";
Vue.use(VueRouterProgressbar, options) // all instance config 
```

```html
<router-progressbar :options="options" /> <!-- this instance config -->
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


