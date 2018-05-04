import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _3260ffcc = () => import('..\\..\\src\\pages\\users.vue' /* webpackChunkName: "pages_users" */).then(m => m.default || m)
const _77143736 = () => import('..\\..\\src\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */).then(m => m.default || m)
const _61928f1e = () => import('..\\..\\src\\pages\\users\\_id.vue' /* webpackChunkName: "pages_users__id" */).then(m => m.default || m)
const _7b47cc8a = () => import('..\\..\\src\\pages\\users\\id\\index.vue' /* webpackChunkName: "pages_users_id_index" */).then(m => m.default || m)
const _1e667993 = () => import('..\\..\\src\\pages\\admin.vue' /* webpackChunkName: "pages_admin" */).then(m => m.default || m)
const _d787f8f4 = () => import('..\\..\\src\\pages\\produtos.vue' /* webpackChunkName: "pages_produtos" */).then(m => m.default || m)
const _2611b4d4 = () => import('..\\..\\src\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/users",
			component: _3260ffcc,
			children: [
				{
					path: "",
					component: _77143736,
					name: "users"
				},
				{
					path: ":id",
					component: _61928f1e,
					children: [
						{
							path: "",
							component: _7b47cc8a,
							name: "users-id"
						}
					]
				}
			]
		},
		{
			path: "/admin",
			component: _1e667993,
			name: "admin"
		},
		{
			path: "/produtos",
			component: _d787f8f4,
			name: "produtos"
		},
		{
			path: "/",
			component: _2611b4d4,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
