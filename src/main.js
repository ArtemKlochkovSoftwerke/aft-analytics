import './styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import AftButton from './UI/ui-library/Button.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

app.component(AftButton)
app.use(ElementPlus)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
