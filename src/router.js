import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './Home'
import AboutUs from './AboutUs'
import OurWork from './OurWork'
import JoinUs from './JoinUs'
import Subdomains from './Subdomains'
import Podcasts from './Podcasts'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/join', name: 'JoinUs', component: JoinUs },
    { path: '/work', name: 'OurWork', component: OurWork },
    { path: '/about', name: 'AboutUs', component: AboutUs },
    { path: '/', name: 'Home', component: HomePage },
    { path: '/podcasts', name: 'Podcasts', component: Podcasts },
    { path: '/subdomains', name: 'Subdomains', component: Subdomains }
  ],
  mode: 'history'
})
