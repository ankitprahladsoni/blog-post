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
import ContentLoader from '@/article-content/ContentLoader.ts';

export default Vue.extend({
  props: ['articleParams'],
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
    this.sections = ContentLoader.getArticle(
      this.articleParams.folder,
      this.articleParams.name,
    );
  },
});
</script>

<style lang="scss" scoped>
</style>


