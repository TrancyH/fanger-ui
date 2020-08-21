import Vue from 'vue'
import Icon from './Icon'
import fButton from './Button'
const Components = {
  Icon,
  fButton
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components

export {
  Icon,
  fButton
}