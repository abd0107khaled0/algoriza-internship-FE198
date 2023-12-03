// import store from "../vuex";
import {useCounterStore} from "./../store/index";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("./../views/Home.vue"),
        meta: { requiresAuth: false, title: "home" },
    },
    {
        path: "/sign-in",
        name: "SignIn",
        component: () => import("./../views/Auth/Login.vue"),
        meta: { title: "SignIn", requiresAuth: false },
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("./../views/Auth/Register.vue"),
        meta: { title: "Register", requiresAuth: false },
    },
    {
        path: "/my-trips",
        name: "MyTrips",
        component: () => import("./../views/MyTrips.vue"),
        meta: { title: "My Trips", requiresAuth: true },
    },
    {
        path: "/checkout/:id",
        name: "Checkout",
        component: () => import("./../views/CheckOut.vue"),
        meta: { title: "checkout", requiresAuth: true },
    },
    {
        path: "/product-details/:id",
        name: "ProductDetails",
        component: () => import("./../views/ProductDetails.vue"),
        meta: { title: "ProductDetails", requiresAuth: true },
    },
    {
        path: "/search/:id",
        name: "Search",
        component: () => import("./../views/Search.vue"),
        meta: { title: "Search", requiresAuth: true },
    },
    {
        path: "/main",
        name: "Main",
        component: () => import("./../views/Main/Main.vue"),
        meta: { title: "Main", requiresAuth: true },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "ErrorPage",
        component: import("./../views/ErrorPage.vue"),
        meta: { title: "ErrorPage", requiresAuth: false }
    },
];

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    document.title = to.meta.title;
    let store = useCounterStore()
    let status = store.loginGetter
    if (to.meta.requiresAuth && !status.email ) {
        return {
            path: "/sign-in",
            query: { redirect: to.fullPath },
        };
    }
});

export default router;


