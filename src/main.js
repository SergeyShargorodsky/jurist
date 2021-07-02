import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
//import yandexMapPlugin from './plugins/ymapPlugin'

import YmapPlugin from 'vue-yandex-maps'

// const settings = { ... } // настройки плагина
// Global Styles
require('./assets/scss/index.scss');

const settings = {
  apiKey: '',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
}

Vue.use(YmapPlugin, settings)




Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
