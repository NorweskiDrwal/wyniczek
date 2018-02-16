import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'normalize.css'

import * as firebase from 'firebase'

import LandingPage from './components/Website/LandingPage'
import Main from './components/Website/Main'
import About from './components/Website/About'
import Service from './components/Website/Service'
import Settings from './components/Users/User/Settings.vue'
import Solutions from './components/Users/User/Solutions.vue'
import Theory from './components/Content/Theory.vue'
import Calculators from './components/Content/Calculators.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.component('web-landing', LandingPage)
Vue.component('web-main', Main)
Vue.component('web-about', About)
Vue.component('web-service', Service)
Vue.component('user-settings', Settings)
Vue.component('user-solutions', Solutions)
Vue.component('content-theory', Theory)
Vue.component('content-calculators', Calculators)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDIy0PQfa7c81A5zw-QU1KV_X9hTJ9yubg',
      authDomain: 'wyniczek-app.firebaseapp.com',
      databaseURL: 'https://wyniczek-app.firebaseio.com',
      projectId: 'wyniczek-app',
      storageBucket: 'wyniczek-app.appspot.com',
      messagingSenderId: '211064032373'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoLogin', user)
        // var username = firebase.database().ref('users/' + user.id + '/details/').once('value').then((data) => {
        //   this.$store.dispatch('setupUser', user)
        // })
        // console.log(username)
      }
    })
  }
})
