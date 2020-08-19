import Vue from 'vue'
import TopBar from './TopBar.vue'
import Icon from './Icon'
const Components = {
  TopBar,
  Icon
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components

export {
  Icon,
  TopBar
}