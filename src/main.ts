import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'; //引入图标
import 'element-plus/dist/index.css'; //引入样式
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

createApp(App)
  .use(router)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  App.component(key, component);
}
