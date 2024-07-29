import { createRouter, createWebHistory } from "vue-router";
import owe from "./modules/owe";

const router = createRouter({
  history: createWebHistory(), //可传参数，配置base路径，例如'/app'
  routes: [...owe]
});

export default router;