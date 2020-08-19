import Icon from './main/icon.vue'
// 明白vue.use方法原理的同学都能明白这段代码的意义
// 当被use的时候, 进行icon组件的渲染
Icon.install = function(Vue) {
  Vue.component(Icon.name, Icon);
};

export default Icon