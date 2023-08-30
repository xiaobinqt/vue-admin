<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { reqLogin } from '@/api/user'
import { onMounted } from 'vue'

onMounted(() => {
  reqLogin({
    username: 'admin',
    password: '111111',
  })
})
</script>

<!--<script setup lang="ts">-->
<!--import { Edit } from '@element-plus/icons-vue'-->
<!--</script>-->

<style scoped lang="scss">
h1 {
  color: $color;
}
</style>
