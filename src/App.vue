<template>

  <div id="app">

    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/header/Header.vue';
import Footer from '@/components/Footer.vue';
export default Vue.extend({
  components: {
    Header,
    Footer,
  },
});
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.2rem;
}
</style>
