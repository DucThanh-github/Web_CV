import { useAppnavStore } from '../modules/stores/store.js'
export default defineNuxtRouteMiddleware((to, from) => {
    const store = useAppnavStore()
    store.handleActive(to.path.slice(1,to.path.length))
  })