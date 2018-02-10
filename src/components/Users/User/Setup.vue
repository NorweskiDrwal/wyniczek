<template>
  <main id="setup" class="fullscreen">
    <v-container fill-height grid-list-lg>
      <div id="setup__wrap">
        <v-layout row wrap>
          <v-flex xs10 sm6 offset-xs1 offset-sm3>
            <v-form v-model="valid" ref="form" lazy-validation>
              <v-layout row wrap>
                <v-flex xs12 sm6>
                  <v-text-field
                    label="Nazwa użytkownika"
                    type="username"
                    v-model="username"
                    :rules="[(v) => !!v || 'Nazwa użytkownika jest wymagana']"
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    label="Imię"
                    type="name"
                    v-model="name"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    label="Wiek"
                    type="age"
                    v-model="age"
                    required
                    :items="['6-9', '10-12', '13-15', '16+']"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    label="Rodzaj szkoły"
                    type="school"
                    v-model="school"
                    required
                    :items="['Szkoła podstawowa', 'Gimnazjum', 'Liceum', 'Technikum', 'Szkoła policealna', 'Szkoła zawodowa']"
                    :rules="[(v) => !!v || 'Rodzaj szkoły jest wymagany']"
                  ></v-select>
                </v-flex>
              </v-layout>

              <v-btn large block @click="onSetup" :disabled="!valid">
                kontynuuj
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
        valid: false,
        username: null,
        name: null,
        age: null,
        school: null
      }
    },
    methods: {
      onSetup () {
        if (this.username == null && this.school == null) { alert('missing data') }
        this.$store.dispatch('setupUser', { username: this.username, name: this.name, age: this.age, school: this.school })
      }
    },
    computed: {
      userDetails () {
        return this.$store.getters.userDetails
      }
    },
    watch: {
      userDetails (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/pakiety')
        }
      }
    }
  }
</script>

<style lang="scss">

  #setup {
    background: $purple;
  }
  
  #setup__wrap {
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
