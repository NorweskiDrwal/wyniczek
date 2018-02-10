<template>
  <v-app>
  <!-- header toolbar -->
    <v-toolbar id="toolbar__wrapper" fixed>

    <!-- dropdown menu -->  
      <v-menu class="hidden-sm-and-up">
        <v-toolbar-items slot="activator">
          <v-icon dark>menu</v-icon>
        </v-toolbar-items>
        <v-list id="dropdown__menu">
          <v-list-tile v-if="userIsAuthenticated" class="dropdown__list" @click="onFetch">
            <v-list-tile-title class="dropdown__list--item">Dzienniczek</v-list-tile-title>
          </v-list-tile>      
          <v-list-tile class="dropdown__list" v-for="item in menuItems" :key="item.title" :to="item.link">
            <v-list-tile-title v-text="item.title" class="dropdown__list--item" />
          </v-list-tile>
          <v-list-tile v-if="!userIsAuthenticated" class="dropdown__list" to="/rejestracja">
            <v-list-tile-title class="dropdown__list--item">Zarejestruj</v-list-tile-title>
          </v-list-tile>  
          <v-list-tile v-if="!userIsAuthenticated" class="dropdown__list" to="/logowanie">
            <v-list-tile-title class="dropdown__list--item">Zaloguj</v-list-tile-title>
          </v-list-tile>  
        </v-list>
      </v-menu>
    <!-- end dropdown menu -->

    <!-- logo -->   
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer" class="hidden-xs-only">WYNICZEK</router-link>
      </v-toolbar-title>
    <!-- end logo menu --> 

    <!-- left menu --> 
      <v-toolbar-items class="hidden-xs-only" scroll-off-screen>
        <v-btn class="toolbar__item" :ripple="false" flat :to="item.link" v-for="item in menuItems" :key="item.title">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>    
    <!-- emd left menu --> 

    <!-- right menu -->   
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="userIsAuthenticated" class="hidden-xs-only">
        <v-btn class="toolbar__item --prof" :ripple="false" @click="onFetch" flat >
          <v-icon left>assignment</v-icon>
          Dzienniczek
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-if="!userIsAuthenticated" class="hidden-xs-only">
        <v-btn class="toolbar__item --reg" :ripple="false" to="/rejestracja" flat >
          Zarejestruj
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items v-if="!userIsAuthenticated" class="hidden-xs-only">
        <v-btn class="toolbar__item --log" :ripple="false" to="/logowanie" flat >
          Zaloguj
        </v-btn>
      </v-toolbar-items>
    <!-- end right menu --> 

    <!-- mobile logo -->   
      <v-toolbar-items class="hidden-sm-and-up">
        <v-icon dark>wifi_tethering</v-icon>
      </v-toolbar-items> 
    <!-- end mobile logo --> 

    </v-toolbar>
  <!-- end header toolbar -->

  <!-- page content -->
    <main>
      <router-view />
    </main>
  <!-- end page content -->

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  },
  computed: {
    menuItems () {
      let menuItems = [
        { title: 'O nas', link: '/o-nas' },
        { title: 'Pakiety', link: '/pakiety' },
        { title: 'Kontakt', link: '/kontakt' }
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { title: 'Pakiety', link: '/pakiety' },
          { title: 'Baza wiedzy', link: '/baza-wiedzy' },
          { title: 'Kalkulatory', link: '/kalkulatory' }
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    },
    onFetch () {
      this.$store.dispatch('fetchUser')
      this.$router.push('/profil')
    }
  }
}
</script>

<style lang="scss">

  .menu__content {border-radius: 10px;}

  #dropdown__menu {
    background: $yellow;
    border: 2px solid $red;
    border-radius: 10px;
    margin: 0;
    padding: 0;
    top: 0px;

    .dropdown__list--item {
      width: 100vw;
    }
  }

  #toolbar__wrapper {
    background: $blue;

    .toolbar__item {
      color: #fff;
      font-family: $menu-font;
      font-size: 21px;

      .btn__content {}      
      .btn__content::before {opacity: 0;}
      &:hover {color: $red;}
    }

    .--prof {
      background: $yellow !important;
      border-radius: 0;
      color: $purple;
      width: 280px;
      
      &:hover {color: $red;}
    }

    .--exit {
      background: $red !important;
      border-radius: 0;
      color: #fff;
      
      &:hover {color: $yellow;}
    }

    .--reg {
      background: $yellow !important;
      border-radius: 0;
      color: $purple;
      
      &:hover {color: $blue;}
    }

    .--log {
      background: $purple !important;
      border-radius: 0;
      
      &:hover {color: $yellow;}
    }
  }

</style>
