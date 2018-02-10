import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    userDetails: []
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setupUser (state, payload) {
      state.userDetails = payload
    }
  },
  actions: {
    registerUser ({commit, getters}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const newUser = {
            id: user.uid
          }
          commit('setUser', newUser)
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            console.log(error.message = 'Ten adres e-mail jest już w użyciu.')
          }
        })
    },
    loginUser ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const newUser = {
            id: user.uid
          }
          commit('setUser', newUser)
        })
        .catch((error) => {
          if (error.code === 'auth/user-not-found') {
            console.log(error.message = 'Nieprawidłowy adres e-mail lub hasło.')
          }
        })
    },
    setupUser ({commit, getters}, payload) {
      const userDetails = {
        username: payload.username,
        name: payload.name,
        age: payload.age,
        school: payload.school
      }
      const user = getters.user
      let key
      firebase.database().ref('users/' + user.id + '/details').push(userDetails)
        .then((data) => {
          key = data.key
          return key
        })
        .then((data) => {
          commit('setupUser', {
            ...userDetails,
            id: key
          })
        })
        .catch((error) => { console.log(error) })
    },
    fetchUser ({commit, getters}) {
      const user = firebase.auth().currentUser.uid
      console.log(user)
      firebase.database().ref('users/' + user + '/details/').once('value')
        .then((data) => {
          let userDetails = []
          const obj = data.val()
          for (let key in obj) {
            userDetails = {
              id: key,
              username: obj[key].username,
              name: obj[key].name,
              age: obj[key].age,
              school: obj[key].school
            }
          }
          commit('setupUser', userDetails)
          console.log(userDetails)
        })
    },
    autoLogin ({commit}, payload) {
      commit('setUser', { id: payload.uid })
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    userDetails (state) {
      return state.userDetails
    }
  }
})
