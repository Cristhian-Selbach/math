import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@pinia/nuxt"],
	buildModules: ["@pinia/nuxt"],
	app: {
		head: {
			link: [
				{
					rel: "stylesheet",
					type: "text/css",
					href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
				},
			],
		},
	},
});
