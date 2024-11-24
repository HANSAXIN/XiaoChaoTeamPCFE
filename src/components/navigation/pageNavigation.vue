<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
      @select="handleSelect" router>

      <el-menu-item index="0">
        <!-- <img style="width: 100px" src="/images/element-plus-logo.svg" alt="Element logo" /> -->
        潮晟文化有限公司
      </el-menu-item>
      <div class="flex-grow" />
      <navigationMenu :menuList="menuList"></navigationMenu>
      <!-- <el-menu-item index="/home/homePage" >{{ props.title }}</el-menu-item>
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
</el-sub-menu> -->
      <div class="flex-grow" />
      <el-menu-item index="/loginAndRegister/loginAndRegister">
        <!-- <img style="width: 100px" src="/images/element-plus-logo.svg" alt="Element logo" /> -->
        登录/注册
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import navigationMenu from '@/components/navigation/navigationMenu.vue'
import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const activeIndex = computed(() => {
  console.log(route.path)
  return route.path
})
export interface MenuList {
  name: string;
  url: string;
  children?: MenuList[]; // children 是可选的，且类型为 MenuList[]
}
let menuList = reactive<MenuList[]>([
  {
    name: '首页',
    url: '/home/homePage/homePage'
  },
  {
    name: '艺人up',
    url: '/home/artists/artists',
    children: [
      {
        name: '小潮院长',
        url: '/home/homePage1',
      },
      {
        name: '杜海皇',
        url: '/home/homePage1',
      },
      {
        name: '小砍、',
        url: '/home/homePage1',
      },
      {
        name: '高斯Goh',
        url: '/home/homePage1',
      },
      {
        name: '小傲想睡觉',
        url: '/home/homePage1',
      },
      {
        name: '阮阮是个天才7',
        url: '/home/homePage1',
      },
      {
        name: '小杨Johnson',
        url: '/home/homePage1',
      },
      {
        name: '虚拟人',
        url: '/home/homePage1',
        children: [
          {
            name: '羊头人',
            url: '/home/homePage1',
          },
          {
            name: '彩虹人',
            url: '/home/homePage1',
          },
        ]
      },

    ]
  },
  {
    name: '核心业务',
    url: '/home/core/core',
    children: [
      {
        name: '线上',
        url: '/home/homePage1',
        children: [
          {
            name: '自媒体视频',
            url: '/home/homePage1',
          },
          {
            name: '直播',
            url: '/home/homePage1',
          },
          {
            name: '周边',
            url: '/home/homePage1',
          },
        ]
      },
      {
        name: '线下',
        url: '/home/homePage1',
      }
    ]
  },
  {
    name: '商务合作',
    url: '/home/business/business',
    children: []
  },
  {
    name: '社区交流',
    url: '/home/communication/communication',
    children: []
  },
  {
    name: '关于我们',
    url: '/home/ours/ours',
    children: []
  }
])
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