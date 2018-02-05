<template>
  <main id="profile" class="fullscreen">
    <v-container fluid fill-height>
      <div id="profile__wrap">

      <!-- profile content -->  
        <div id="profile__content">
          <v-dialog v-model="settings" fullscreen transition="dialog-bottom-transition" :overlay=false><user-settings/></v-dialog>
          <v-dialog v-model="solutions" fullscreen transition="dialog-bottom-transition" :overlay=false><user-solutions/></v-dialog>
          <v-dialog v-model="theory" fullscreen transition="dialog-bottom-transition" :overlay=false><content-theory/></v-dialog>
          <v-dialog v-model="calculators" fullscreen transition="dialog-bottom-transition" :overlay=false><content-calculators/></v-dialog>
        </div>
      <!-- profile content --> 

      <!-- profile navigation drawer -->
        <v-navigation-drawer id="profile__drawer" permanent light absolute right width="280">
          <v-toolbar flat class="transparent">
            <v-list class="pa-0">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src="https://randomuser.me/api/portraits/men/85.jpg" />
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>John Leider</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-list class="pt-0" dense>
            <v-divider></v-divider>
            <v-list-tile class="pt-1 pb-1" v-for="item in items" :key="item.title" @click="item.link">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile id="drawer__logout" @click="onLogout">
              <v-list-tile-action>
                <v-icon>power_settings_new</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>WYLOGUJ</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      <!-- end profile navigation drawer -->
      </div>
    </v-container>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'wyniczki', icon: 'drag_handle', link: this.showSolutions },
          { title: 'udostępnione zadanka', icon: 'autorenew', link: '' },
          { title: 'baza wiedzy', icon: 'account_balance', link: this.showTheory },
          { title: 'kalkulatory', icon: 'dialpad', link: this.showCalculators },
          { title: 'ustawienia', icon: 'settings', link: this.showSettings },
          { title: 'pomoc', icon: 'help', link: '/pomoc' }
        ],
        settings: false,
        solutions: false,
        calculators: false,
        theory: false
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
        this.$router.push('/')
      },
      showSettings () { this.settings = true },
      showTheory () { this.theory = true },
      showCalculators () { this.calculators = true },
      showSolutions () { this.solutions = true }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  .container {padding: 0;}

  #profile {
    background: linear-gradient(90deg, rgba(11,153,189,1), rgba(92,45,81,1) 85%);
    // rgba(11,153,189,0.5) rgba(92,45,81,0.5)
  }

  #profile__wrap {
    width: 100vw;

    #profile__content {
      height: 100vh;
      margin-right: 280px;
    }

    #profile__drawer {
      background: $purple;
      border-left: 2px solid $yellow;
    }

    .toolbar__content {
      background: $yellow;

      .list__tile {
        color: $purple;
      }
    }

    .list__tile {
      color: $yellow;
      font-family: $text-font;
      font-size: 17px;

      i {color: $yellow;}
    }
  }  

  #drawer__logout {
    background: $yellow;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;

    .list__tile__content, .list__tile__action {
      color: $red;

      i {color: $red;}
    }

    &:hover {
      background: $red;
    }
    &:hover .list__tile__content {color: $yellow;}
    &:hover i {
      color: $yellow;
    }
  }

  .dialog {box-shadow: none ; width: auto;}
  .dialog--fullscreen {right: 280px; top: 64px}

</style>