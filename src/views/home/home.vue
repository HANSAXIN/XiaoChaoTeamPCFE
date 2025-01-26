<template>
  <div class="common-layout">
    <pageTopNavigation class="page-top-navigation" :class="{ 'is-scroll': isScroll }"></pageTopNavigation>

    <div class="page-content" :style="{ height: windowsClientHeight+'px' }">

      <router-view></router-view>
      <div>
        {{ 213123 }}
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import pageTopNavigation from "@/components/navigation/pageNavigation.vue"
import { styleUtils } from '@/untils/styleUtils/styleUtils';
import { onMounted, ref } from "vue";

const windowsClientHeight = ref(0) 
let isScroll = ref(false)
onMounted(() => {
  windowsClientHeight.value = styleUtils.windowsClientHeight
  const ptnDOM = document.querySelector('.page-top-navigation') as HTMLElement;
  // 修改CSS变量的值
  if (ptnDOM !== null) {
    ptnDOM.style.setProperty('--theme--bg--color', 'black');
  } else {
    alert("123")
  }
  window.addEventListener('scroll', handleScroll);


  // const scrollElement = document.querySelector(".page-content")

  // if (scrollElement) {
  //   console.log(123)
  //   scrollElement.addEventListener("scroll", function () {
  //     console.log(scrollElement.scrollTop > document.documentElement.clientHeight, "asdadasdasd")

  //     if (scrollElement.scrollTop > document.documentElement.clientHeight) {
  //       isScroll.value = true
  //     } else {
  //       isScroll.value = false
  //     }
  //     // console.log(scrollElement.scrollTop,"scrollTop",isScroll.value)
  //   })

  // }
})
const handleScroll = () => {
  if (window.scrollY  > document.documentElement.clientHeight) {
    isScroll.value = true
  } else {
    isScroll.value = false
  }
}


</script>
<style lang="scss" scoped>
:root {
  --theme--bg--color: #ea8435;
}

.common-layout {
  width: 100%;

  .page-top-navigation {
    position: fixed;
    top: 0;
    left: 0;
    background-color: transparent;

  }

  .page-content {
    width: 100%;
  }

}

.is-scroll {
  background-color: black !important;
  color: white;
}
</style>
