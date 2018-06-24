<template>

  <div id="app">
    <div id="nav">
      <Header></Header>
      <section class="section">
        <div class="container">
            <Article></Article>
        </div>
     </section>
     <Footer></Footer>
    </div>
   
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/components/Header.vue';
import Article from '@/components/Article.vue';
import Footer from '@/components/Footer.vue';
export default Vue.extend({
  components: {
    Header,
    Article,
    Footer,
  },
});
</script>


<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
