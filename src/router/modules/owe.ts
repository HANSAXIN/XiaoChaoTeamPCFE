const routes = [
  // {
  //   path: "/login",
  //   name: 'login',
  //   component: () => import("@/pages/login.vue"), //路由懒加载
  // },
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/home.vue"),
    redirect: '/home/homePage',
    children: [
      {
        path: "/home/homePage",
        name: "homeUser",
        component: () => import("@/views/home/homePage.vue"),
      },

    ],
  },
  //添加（放在最后）
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "pathMatch",
  //   component: () => import("@/views/notFound.vue"),
  // },
];

export default routes;