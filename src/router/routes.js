import Home from '@/pages/Home.vue'
import Gallery from '@/pages/Gallery.vue'

import Page404 from '@/pages/Page404'
const routes = [
  {
    path: '/',
    component: Home,

  },
  {
    path: '/gallery/:id',
    component: Gallery,
  },
  {
    path: '*',
    name: 'page404',
    component: Page404,
    meta: {
      title: 'Page not found'
    }
  }

]

export default routes
