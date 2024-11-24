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
    redirect: '/home/homePage/homePage',
    children: [
      // 首页
      {
        path: "/home/homePage/homePage",
        name: "homePage",
        component: () => import("@/views/home/homePage/homePage.vue"),
      },
      // 艺人
      {
        path: "/home/artists/artists",
        name: "artists",
        component: () => import("@/views/home/artists/artists.vue"),
      },
      // 核心
      {
        path: "/home/core/core",
        name: "core",
        component: () => import("@/views/home/core/core.vue"),
      },
      // 商务
      {
        path: "/home/business/business",
        name: "business",
        component: () => import("@/views/home/business/business.vue"),
      },
      // 交流
      {
        path: "/home/communication/communication",
        name: "communication",
        component: () => import("@/views/home/communication/communication.vue"),
      },
      // 我们
      {
        path: "/home/ours/ours",
        name: "ours",
        component: () => import("@/views/home/ours/ours.vue"),
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