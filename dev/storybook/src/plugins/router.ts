import { createRouter, createWebHistory } from "vue-router";

const Home = () => ({
    template: `<div> Home </div>`,
});

const About = () => ({
    template: `<div> About </div>`,
});

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/:deviceId", name: "Home", component: Home },
        { path: "/about", name: "About", component: About },
    ],
});