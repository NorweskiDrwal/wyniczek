<template>
  <main id="logowanie" class="fullscreen">
    <v-container fill-height>
      <div id="logowanie__wrap">
        <v-layout row wrap>
          <v-flex xs10 sm6 offset-xs1 offset-sm3>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-text-field
                label="E-mail"
                v-model="email"
                type="email"
                :rules="emailRules"
                required
              ></v-text-field>
              <v-text-field 
                label="Hasło" 
                v-model="password" 
                min="6"
                :append-icon="visible ? 'visibility' : 'visibility_off'" 
                :append-icon-cb="() => (visible = !visible)"
                :type="visible ? 'password' : 'text'" 
                :rules="[(v) => v.length >= 6 || 'Min. 6 znaków']"
                required
                @keyup.enter="onLogin">
              </v-text-field>

              <v-btn large block @click="onLogin" :disabled="!valid">
                zaloguj
              </v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        valid: true,
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail jest wymagany',
          (v) => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Nieprawidłowy adres e-mail'
        ],
        password: '',
        custom: true,
        visible: true,
        checkbox: false
      }
    },
    methods: {
      onLogin () {
        this.$store.dispatch('loginUser', { email: this.email, password: this.password })
      }
    },
    computed: {
      progress () {
        return Math.min(100, this.password.length * 9)
      },
      color () {
        return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
      },
      user () {
        return this.$store.getters.user
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/pakiety')
        }
      }
    }
  }
</script>

<style lang="scss">

  #logowanie {
    background: $blue;
  }
  
  #logowanie__wrap {
    width: 100vw;

    form {
      background: #fff;
      border-radius: 10px;
      box-shadow: 0px 0px 10px 3px $purple;
      padding: 20px;

      input {
        color: $blue;
      }
      button {
        background: $yellow;
        color: $blue;
        font-size: 20px;
        border: 3px solid $blue;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 2px;
      }
    }
  }

</style>
