export const routes = [
  {
    path: "/dialog",
    component: () => import("./components/list-with-dialog.vue"),
  },
  {
    path: "/table",
    component: () => import("./components/table.vue"),
  },
  {
    path: "/tableFixed",
    component: () => import("./components/table-fixed.vue"),
  },
];
