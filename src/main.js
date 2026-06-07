/* eslint-disable */
import { createApp } from 'vue';
import ShardsVue from '@gorse/shards-vue';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router';

// Layouts
import Default from '@/layouts/Default.vue';

function createEventHub() {
  const listeners = Object.create(null);

  return {
    $on(event, callback) {
      listeners[event] = listeners[event] || new Set();
      listeners[event].add(callback);
    },
    $off(event, callback) {
      if (!listeners[event]) {
        return;
      }

      if (callback) {
        listeners[event].delete(callback);
      } else {
        listeners[event].clear();
      }
    },
    $emit(event, ...args) {
      if (!listeners[event]) {
        return;
      }

      listeners[event].forEach(callback => callback(...args));
    },
  };
}

const app = createApp(App);

app.use(router);
app.use(ShardsVue);
app.component('default-layout', Default);
app.config.globalProperties.$eventHub = createEventHub();

app.mount('#app');
