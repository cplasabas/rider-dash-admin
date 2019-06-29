export default [
  {
    path: "/",
    meta: {
      public: true,
      menu: false
    },
    name: "Root",
    component: () => import("@/pages/Login.vue")
  },
  {
    path: "/dashboard",
    icon: "dashboard",
    meta: {
      breadcrumb: true,
      requiresAuth: true,
      menu: true
    },
    name: "Dashboard",
    component: () => import("@/pages/Dashboard.vue")
  },
  {
    path: "/orders",
    icon: "assignment",
    meta: {
      breadcrumb: true,
      requiresAuth: true,
      menu: true
    },
    name: "Orders",
    component: () => import("@/pages/Orders.vue")
  },
  {
    path: "/riders",
    icon: "motorcycle",
    meta: {
      breadcrumb: true,
      requiresAuth: true,
      menu: true
    },
    name: "Riders",
    component: () => import("@/pages/Riders.vue")
  }
];
