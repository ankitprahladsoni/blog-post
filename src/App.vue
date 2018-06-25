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
import Article from '@/components/Article/Article.vue';
import Footer from '@/components/Footer.vue';
export default Vue.extend({
  components: {
    Header,
    Article,
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
}
</style>
