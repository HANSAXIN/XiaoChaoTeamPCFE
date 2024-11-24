<template>
  <div>
    <div>


      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
        @select="handleSelect" router>
        
        <el-menu-item index="0">
          <!-- <img style="width: 100px" src="/images/element-plus-logo.svg" alt="Element logo" /> -->
          潮晟文化有限公司
        </el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="/home/homePage" >{{ props.title }}</el-menu-item>
        <el-sub-menu index="2">
          <template #title>Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <div class="flex-grow" />
        <el-menu-item index="0">
          <!-- <img style="width: 100px" src="/images/element-plus-logo.svg" alt="Element logo" /> -->
          登录/注册
        </el-menu-item>
      </el-menu>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router';
const props = defineProps({
  title: {
    type: String,
    default: '213312312'
  }
})
const route = useRoute()
const activeIndex = computed(() => {
  console.log(route.path)
  return route.path
})
// const activeIndex = ref('2')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style lang='scss' scoped>
.flex-grow {
  flex-grow: 1;
}
</style>