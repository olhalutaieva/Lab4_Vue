import Vue from 'vue';
import App from './App.vue';
import TaskProvider from '@/providers/TaskProvider';

Vue.config.productionTip = false;

Vue.use(TaskProvider);

new Vue({
  render: (h) => h(App),
}).$mount('#app');