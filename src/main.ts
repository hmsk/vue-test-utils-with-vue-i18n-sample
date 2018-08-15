import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: {
      router: 'vue-router',
      store: 'vuex',
      dev: 'vue-devtools',
      webpack: 'vue-loader',
      ref: 'awesome-vue'
    }
  }
})

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
