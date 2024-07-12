import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import store from './store/store'
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Contact from "./views/Contact.vue";
import Blog from "./views/Blog.vue";
import BlogPost from "./views/BlogPost.vue";
import Guide from "./views/Guide.vue"
import Brochure from "./views/Brochure.vue";
const routes = [
	{ path: "/", component: Home },
	{ path: "/login", component: Login },
	{ path: "/signup", component: Register },
	{ path: "/blogs", component: Blog },
	{ path: "/register", component: Register },
	{ path: "/Contact", component: Contact },

	{
		path: "/post/:id",
		name: "BlogPost",
		component: BlogPost,
		props: true,
	},
	{
		path: "/guide",
		name: "Guide",
		component: Guide,
		props: true,
	},
	{
		path: "/brochure",
		name: "Brochure",
		component:Brochure,
		props: true,
	},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(store).mount("#app");

