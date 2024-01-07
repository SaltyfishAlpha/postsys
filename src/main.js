import { createApp } from 'vue';
import App from './App.vue';
import Antd from 'ant-design-vue';
import qs from 'qs';

import router from '@/router/index'
import './test/mock';

import './assets/main.css'
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)
app.use(Antd).use(router).use(qs)
app.mount('#app')

