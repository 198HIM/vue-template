import {createRouter, createWebHashHistory} from "vue-router";



export const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        name: "login",
        path: "/",
        meta:{title: "主页"},
        component: () => import("../views/login.vue")

    },{
        path: "/home",
        meta:{title: "个人信息"},
        component: () => import("../views/home.vue")
    },
    ]

});

router.beforeEach((to,from)=>{
    // @ts-ignore
    document.title = to.meta.title||"默认样式";
})