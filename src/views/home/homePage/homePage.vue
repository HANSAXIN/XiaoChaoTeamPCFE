<template>
  <div style="color: black;">
    <!-- 轮播图 -->
    <div class='banner bg-img-fixed'>
      <div>
        <el-carousel motion-blur class="el-carousel-class" :style="{ height: windowsClientHeight + 'px' }">
          <el-carousel-item v-for="item in 4" :key="item">
            <img v-if="item % 2" style="width: 100%;" src="@/assets/images/test1.jpg" alt="潮晟文化有限公司" />
            <img v-else style="width: 100%;" src="@/assets/images/test2.jpg" alt="潮晟文化有限公司" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <!-- 核心 -->
    <div class="core bg-img-fixed"></div>
    <!-- 艺人 -->
    <div class='artists bg-img-fixed'></div>
    <!-- 商务合作 -->
    <div class='banner bg-img-fixed'></div>
    <!-- 社区交流 -->
    <div class='banner bg-img-fixed'></div>
    <!-- 关于我们 -->
    <div></div>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref } from 'vue';

import { styleUtils } from '@/untils/styleUtils/styleUtils';

const windowsClientHeight = ref(0)

onMounted(() => {
  // alert(window.navigator.userAgent.includes('Android'))
  windowsClientHeight.value = styleUtils.windowsClientHeight;
  const bgImgFixed = document.querySelectorAll('.bg-img-fixed');
  // 修改CSS变量的值
  (bgImgFixed as NodeListOf<HTMLElement>).forEach((element) => {
    // 在这里，element是单个的DOM元素，所以你可以安全地访问它的style属性
    element.style.setProperty('--windows--client--height', windowsClientHeight.value + 'px');
  });
})

</script>
<style lang='scss' scoped>
:root {
  --windows--client--height: 100vh;
}

.bg-img-fixed {
  background-attachment: fixed;
  background-size: cover;
  height: var(--windows--client--height);
  width: 100%;
  position: relative;
  z-index: -1;
}

.banner {
  background-color: transparent;
}

.core {
  background-image: url('@/assets/images/test1.jpg');

}

// .core::before{
//     content: '';
//     position: absolute;
//     inset: 0;
//     mask-image: url('@/assets/images/bg1.png');
//     background-size: cover;
//     background-position: center;
//   } 
.artists {
  background-image: url('../../../assets/images/test2.jpg');
}

:deep(.el-carousel-class) {
  .el-carousel__container {
    height: var(--windows--client--height) !important;
  }
}
</style>