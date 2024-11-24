const routes = [
    // {
    //   path: "/login",
    //   name: 'login',
    //   component: () => import("@/pages/login.vue"), //路由懒加载
    // },
    {
      path: "/personal/personal",
      name: "personal",
      component: () => import("@/views/personal/personal.vue"),
     
    },
    //添加（放在最后）
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "pathMatch",
    //   component: () => import("@/views/notFound.vue"),
    // },
  ];
  
  export default routes;