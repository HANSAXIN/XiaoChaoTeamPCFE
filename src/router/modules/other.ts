const routes = [
    // {
    //   path: "/login",
    //   name: 'login',
    //   component: () => import("@/pages/login.vue"), //路由懒加载
    // },
    {
      path: "/loginAndRegister/loginAndRegister",
      name: "loginAndRegister",
      component: () => import("@/views/loginAndRegister/loginAndRegister.vue"),
     
    },
    //添加（放在最后）
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "pathMatch",
    //   component: () => import("@/views/notFound.vue"),
    // },
  ];
  
  export default routes;