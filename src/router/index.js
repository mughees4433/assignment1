import Vue from "vue";
import VueRouter from "vue-router";
import listOfProducts from "../components/listOfProducts.vue";
import listOfCategories from "../components/listOfCategories.vue";
import Home from "../components/Home.vue";
import Product from '../components/Product.vue'
import YourCart from '../components/YourCart.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/categories", name: "categories", component: listOfCategories },
  {
    path: "/products",
    name: "products",
    component: listOfProducts,
  },
  {
    path: "/products/:productID",
    name: "products",
    component: Product,
  },
  {
    path: "/cart",
    name: "your cart",
    component: YourCart,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
