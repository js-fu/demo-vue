// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'reset.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import ElementLocale from 'element-ui/lib/locale'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // 饿了么UI 中文包
import enLocale from 'element-ui/lib/locale/lang/en' // 饿了么UI 英文包

import VueI18n from 'vue-i18n'
import myZhLocale from './locales/zh/index'
import myEnLocale from './locales/en/index'

import store from '@/store'

Vue.use(ElementUI)
Vue.use(VueI18n)

// 多语言
const messages = {
  zh: {
    ...zhLocale,
    ...myZhLocale
  },
  en: {
    ...enLocale,
    ...myEnLocale
  }
}

let randomNum = Math.random()
let locale = randomNum > 0.5 ? 'zh' : 'en'
console.log('多语言', { locale })

const i18n = new VueI18n({
  locale, // set locale
  messages // set locale messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  template: '<App/>',
  components: { App }
})
