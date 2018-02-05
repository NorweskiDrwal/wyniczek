<template>
  <div id="page__wrapper">

    <web-main />    

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  #app__nav--left, #app__nav--right {
    background: $red;
    opacity: 0.2;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:hover {opacity: 1;}
  }
  #app__nav--left {left: 20px;}
  #app__nav--right {right: 20px;}

</style>

