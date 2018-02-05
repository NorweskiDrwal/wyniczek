<template>
  <div id="glowna" class="fullscreen">
    <v-container fluid>
      <div id="main__figure"></div>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <div id="main__text--wrap">
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

  #glowna {background: $blue;}

  #main__figure {
    background: $purple;
    clip-path: polygon(0 0, 39% 0, 24% 100%, 0% 100%);
    height: 100vh;
    position: absolute;
    top: 0;
    width: 100%;
  }

  #main__text--wrap {
    z-index: 10;
  }

</style>

