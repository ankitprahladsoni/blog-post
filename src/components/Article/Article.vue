<template>
  <div class="columns">
    <div class="column is-1">
      <article-buttons></article-buttons>
    </div>
    <div class="column is-8">
      <article-content @scroll="scrollMethod" :sections="sections"></article-content>
    </div>
    <div class="column is-3">
      <article-menu :item-to-highlight="highlightItem" :sections="sections"></article-menu>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ArticleMenu from './ArticleMenu.vue';
import ArticleContent from './ArticleContent.vue';
import ArticleButtons from './ArticleButtons.vue';

export default Vue.extend({
  components: {
    ArticleMenu,
    ArticleContent,
    ArticleButtons,
  },
  data() {
    return {
      highlightItem: '',
      sections: require('../../article-content/strategy-pattern.json'),
    };
  },
  methods: {
    scrollMethod(data: string) {
      this.highlightItem = data;
    },
  },
});
</script>

<style lang="scss" scoped>
</style>


