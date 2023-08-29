<template>
  <div>
    <svg>
      <use
        :xlink:href="prefix + name"
        :style="{ width, height }"
        :fill="color"
      ></use>
    </svg>
  </div>
</template>

<script lang="ts" setup>
// 接收父组件传递过来的图标参数

defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 图标名字
  name: String,
  // 颜色
  color: {
    type: String,
    default: '',
  },
  // 宽度
  width: {
    type: String,
    default: '16px',
  },
  // 高度
  height: {
    type: String,
    default: '16px',
  },
})
</script>
