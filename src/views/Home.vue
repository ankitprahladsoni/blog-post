<template>
  <div class="home">
    <Article :article-params="$route.params" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Article from '@/components/Article/Article.vue';

@Component({
  components: {
    Article,
  },
})
export default class Home extends Vue {}
</script>
