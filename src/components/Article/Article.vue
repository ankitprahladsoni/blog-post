<template>
        <div class="columns">
                <div class="column is-2"><article-buttons></article-buttons></div>
                <div class="column is-8"><article-content @scroll="scrollMethod"></article-content> </div>
                <div class="column is-2"><article-menu :item-to-highlight="highlightItem"></article-menu></div>
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


