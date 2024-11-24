<template>
  <div class="common-layout">
    <el-container class="el-container">
      <el-header>
        <pageTopNavigation></pageTopNavigation>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>{{a}}</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import pageTopNavigation from "@/components/navigation/pageNavigation.vue"
import { ref } from 'vue';
const a = ref('1')

</script>
<style lang="scss" scoped>
.el-container {
  width: 100vw;
}
</style>
