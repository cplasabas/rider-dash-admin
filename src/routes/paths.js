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
  },
  {
    path: "/coupons",
    icon: "local_offer",
    meta: {
      breadcrumb: true,
      requiresAuth: true,
      menu: true
    },
    name: "Coupons",
    component: () => import("@/pages/Coupons.vue")
  },
  {
    path: "/settings",
    icon: "settings",
    meta: {
      breadcrumb: true,
      requiresAuth: true,
      menu: true
    },
    name: "Settings",
    component: () => import("@/pages/Settings.vue")
  }
];
