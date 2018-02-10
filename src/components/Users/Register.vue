<template>
  <main id="rejestracja" class="fullscreen">
    <v-container fill-height>
      <div id="rejestracja__wrap">
        <v-layout row wrap>
          <v-flex xs10 sm6 offset-xs1 offset-sm3>
            <v-form v-model="valid" ref="form" lazy-validation>
              <!-- <v-text-field
                label="Nazwa użytkownika"
                type="username"
                v-model="username"
                :rules="[(v) => !!v || 'Nazwa użytkownika jest wymagana']"
                required
              ></v-text-field> -->
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
                @keyup.enter="onRegister">
                loading 
                required>
                <v-progress-linear v-if="custom" slot="progress" :value="progress" height="2" :color="color"></v-progress-linear>
              </v-text-field>
              <v-checkbox
                label="Akceptuję regulamin"
                v-model="checkbox"
                :rules="[v => !!v || 'Aby kontynuować zaakceptuj regulamin']"
                required
              ></v-checkbox>

              <v-btn large block @click="onRegister" :disabled="!valid">
                zarejestruj
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
        // name: '',
        // nameRules: [
        //   (v) => !!v || 'Nick jest wymagany'
        // ],
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail jest wymagany',
          (v) => /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Nieprawidłowy adres e-mail'
        ],
        password: '',
        custom: true,
        visible: true,
        checkbox: false,
        username: ''
      }
    },
    methods: {
      onRegister () {
        this.$store.dispatch('registerUser', { email: this.email, password: this.password, username: this.username })
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
          this.$router.push('/rejestracja/konfiguracja')
        }
      }
    }
  }
</script>

<style lang="scss">

  #rejestracja {
    background: $purple;
  }
  
  #rejestracja__wrap {
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
        color: $purple;
        font-size: 20px;
        border: 3px solid $purple;
        border-radius: 10px;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 2px;
      }
    }
  }

</style>
