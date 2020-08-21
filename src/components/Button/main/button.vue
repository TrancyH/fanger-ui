<template>
  <button
    class='f-button'
    :disabled='disabled'
    :class='[
      type ? "f-button-" + type : "",
      full == true ? "f-button-full" : "f-button-inline",
      size ? "f-button-" + size : "f-button-normal"
    ]'>
    <slot />
  </button>
</template>

<script>
import '@/style/button/button.scss'
export default {
  name: 'fButton',
  props: {
    // 按钮类型（颜色）
    type: {
      type: String,
      default: 'primary'
    },
    // 是否占全行
    full: {
      type: Boolean
    },
    // 按钮尺寸 big normal small
    size: {
      type: String,
      default: 'normal'
    },
    // 是否禁用
    disabled: {
      type: Boolean
    }
  }
}
</script>