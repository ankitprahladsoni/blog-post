<template>
  <div class="columns">
    <div class="column is-1">
      <article-buttons></article-buttons>
    </div>
    <div class="column is-8">
      <article-content @scroll="scrollMethod" :sections="sections"></article-content>
    </div>
    <div class="column is-3">
      <article-menu :div-to-highlight="divIndex" :sections="sections"></article-menu>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ArticleMenu from './ArticleMenu.vue';
import ArticleContent from './ArticleContent.vue';
import ArticleButtons from './ArticleButtons.vue';

export default Vue.extend({
  props: ['articleId'],
  components: {
    ArticleMenu,
    ArticleContent,
    ArticleButtons,
  },
  data() {
    return {
      divIndex: '',
      sections: [],
    };
  },
  methods: {
    scrollMethod(divIndex: string) {
      this.divIndex = divIndex;
    },
  },
  created() {
    this.sections = require(`../../article-content/${
      this.articleId
    }.js`).default;
  },
});
</script>

<style lang="scss" scoped>
</style>


