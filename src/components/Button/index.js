import Button from './main/button.vue'
// 明白vue.use方法原理的同学都能明白这段代码的意义
// 当被use的时候, 进行icon组件的渲染
Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button