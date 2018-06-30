<template>
  <div class="home">
    <Article :article-id="$route.params.id"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Article from '@/components/article/Article.vue';

@Component({
  components: {
    Article,
  },
})
export default class Home extends Vue {}
</script>
