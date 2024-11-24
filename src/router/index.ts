import { createRouter, createWebHistory } from "vue-router";
import home from "@/router/modules/home";
import personal from "@/router/modules/personal";
import other from "@/router/modules/other";


const router = createRouter({
  history: createWebHistory(), //可传参数，配置base路径，例如'/app'
  routes: [...home,...personal,...other]
});

export default router;