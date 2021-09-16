import Vue from "vue";
import VueRouter from "vue-router";
import listOfProducts from '../components/listOfProducts.vue'
import listOfCategories from '../components/listOfCategories'
Vue.use(VueRouter);

const routes = [
  { path: "/categories", name: "categories", component: listOfCategories },
  {
    path: "/products",
    name: "products",
    component: listOfProducts,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
