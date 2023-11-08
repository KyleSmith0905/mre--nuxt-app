export default defineNuxtRouteMiddleware((to, from) => {
	console.log(from.fullPath);
	console.log(to.fullPath);
	return;
})
