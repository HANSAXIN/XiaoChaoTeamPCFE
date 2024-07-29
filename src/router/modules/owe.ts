const routes = [
  // {
  //   path: "/login",
  //   name: 'login',
  //   component: () => import("@/pages/login.vue"), //路由懒加载
  // },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/homePage.vue"),

    children: [
      {
        path: "/home/user",
        name: "homeUser",
        component: () => import("@/views/user.vue"),
      },
      {
        path: "/home/manage",
        name: "homeManage",
        component: () => import("@/views/manage.vue"),
      },
    ],
  },
  //添加（放在最后）
  {
    path: "/:pathMatch(.*)*",
    name: "pathMatch",
    component: () => import("@/views/notFound.vue"),
  },
];

export default routes;