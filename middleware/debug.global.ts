export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`Route changed from ${from.path} to ${to.path}`)
  console.log('Current route meta:', to.meta)
  return
}) 