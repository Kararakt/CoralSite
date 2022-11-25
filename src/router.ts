import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../src/pages/HomePage.vue";
import Handbags from "./pages/HandbagsPage.vue";
import ProductBoujee from "./pages/ProductBoujeePage.vue";
import ProductCoach from "./pages/ProductCoachPage.vue";
import ProductGrande from "./pages/ProductGrandePage.vue";
import ProductRemus from "../src/pages/ProductRemusPage.vue";
import Basket from "./pages/BasketPage.vue";
import Checkout from "./pages/CheckoutPage.vue";
import WishListPage from "./pages/WishListPage.vue";
import ProfilePage from "./pages/ProfilePage.vue";
import AboutPage from "./pages/AboutPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/Handbags", component: Handbags },
  { path: "/Boujee", component: ProductBoujee },
  { path: "/Coach", component: ProductCoach },
  { path: "/Remus", component: ProductRemus },
  { path: "/Grande", component: ProductGrande },
  { path: "/Watcher", component: Handbags },
  { path: "/Skincare", component: Handbags },
  { path: "/Jewellery", component: Handbags },
  { path: "/Apparels", component: Handbags },
  { path: "/MyCart", component: Basket },
  { path: "/Checkout", component: Checkout },
  { path: "/Wishlist", component: WishListPage },
  { path: "/Profile", component: ProfilePage },
  { path: "/About", component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
