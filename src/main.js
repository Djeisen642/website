import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './routes/home.vue';
import blog from './routes/blog.vue';
import projects from './routes/projects.vue';
import contact from './routes/contact.vue';
import app from './app.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/home/', component: home },
  { path: '/blog/', component: blog },
  { path: '/projects/', component: projects },
  { path: '/contact/', component: contact },
];

const router = new VueRouter({
  routes,
});

const main = new Vue({
  router,
  template: '<app/>',
  components: {
    app,
  },
});

main.$mount('#myApp');
