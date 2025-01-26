<template>
  <div class="page-navigation">
    <div class="page-navigation-left">
      <img style="width: 100px" src="@/assets/images/test1.jpg" alt="潮晟文化有限公司" />
      <div class="page-navigation-left-menu">
        <div class="page-navigation-left-menu-item cursor-pointer" v-for="(item, index) in menuList" :key="index"
          @click="jumpRouter(item, index)" :class="{ 'is-active': activeIndex === index }">
          <div>
            {{ item.name }}
          </div>
        </div>

      </div>
    </div>

    <div class="page-navigation-right">
      <div class="login-register">登录/注册</div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const activeIndex = ref(0)
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

const jumpRouter = (itemp: Object, indexp: number) => {
  activeIndex.value = indexp
  router.push({
    path: (itemp as { url: string }).url,
  })
}


</script>
<style lang='scss' scoped>
.page-navigation {
  width: calc(100% - 30px);
  height: 60px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  .page-navigation-left {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .page-navigation-left-menu {
      display: flex;
      height: 100%;
    }

    .page-navigation-left-menu-item {
      display: flex;
      width: 100px;
      justify-content: center;
      align-items: center;

    }
  }

  .page-navigation-right {
    .login-register {
      background-color: #ea8435;
      padding: 5px 10px;
      border-radius: 20px;
    }
  }
}

.is-active {
  color: #ea8435;
  // border-bottom: 1px solid #ea8435;
}
</style>