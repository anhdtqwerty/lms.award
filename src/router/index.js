import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

const DEFAULT_PAGE_TITLE = 'Student Award'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(to => {
  _setDocumentTitle(to.meta.title)
})

function _setDocumentTitle(title = DEFAULT_PAGE_TITLE) {
  document.title = title
}

export default router
