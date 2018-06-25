<template>
        <div class="columns">
                <div class="column is-2">Buttons Here</div>
                <div class="column is-8"><article-content @scroll="scrollMethod"></article-content> </div>
                <div class="column is-2"><article-menu :item-to-highlight="highlightItem"></article-menu></div>
        </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ArticleMenu from './ArticleMenu.vue';
import ArticleContent from './ArticleContent.vue';

export default Vue.extend({
  components: {
    ArticleMenu,
    ArticleContent,
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


