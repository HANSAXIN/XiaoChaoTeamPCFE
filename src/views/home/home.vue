<template>
  <div class="common-layout">
    <el-container class="el-container">
      <el-header>
        <pageTopNavigation :title="textData.title"></pageTopNavigation>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>222</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import pageTopNavigation from "@/components/page/pageTop/pageNavigation.vue"
import { ref, reactive } from 'vue';
const textData = reactive({
  title: '首页'
})
</script>
<style lang="scss" scoped>
.el-container {
  width: 100vw;
}
</style>
