<template>
    <template v-for="(item, index) in props.menuList" :key="index">
        <el-menu-item v-if="!item.children||item.children.length===0" :index="item.url">{{ item.name }}</el-menu-item>
        <el-sub-menu v-else :index="item.url">
            <template #title>{{ item.name }}</template>
            <navigationMenu :menuList="item.children"></navigationMenu>
        </el-sub-menu>
    </template>
</template>

<script lang="ts" setup>
import navigationMenu from '@/components/navigation/navigationMenu.vue'
import {MenuList} from '@/components/navigation/pageNavigation.vue'

let props = defineProps({
    menuList: {
        type: Array as ()=>MenuList[],
        default: []
    }
})

</script>
<style lang='scss' scoped>
.flex-grow {
    flex-grow: 1;
}
</style>