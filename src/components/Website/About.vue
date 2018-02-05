<template>
  <div id="o-nas" class="fullscreen">
    <v-container fluid>
      <div id="about__figure"></div>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <div id="about__text--wrap">
            <h1></h1>
          </div>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  .container {padding: 0;}

  #o-nas {background: $yellow;}

  #about__figure {
    background: $blue;
    clip-path: polygon(0% 0%, 17% 0, 36% 49%, 23% 100%, 0% 100%);
    height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
  }

  #about__text--wrap {
    z-index: 10;
  }

</style>

