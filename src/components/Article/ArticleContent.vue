<template>
  <section class="has-text-left" id="article-content">
    <div id="content">
      <div v-for="content in articleContents" :key="content.id" :id="content.id">
        <div v-for="(section,index) in content.sections" :key="index">
          <div v-if="section.type=='heading'">
            <h1 class="title is-1" id="sectionHeading" :data-index="content.id">{{section.value}}</h1>
          </div>
          <div v-if="section.type=='paragraph'">
            <p>{{section.value}}</p>
          </div>
          <div v-if="section.type=='code'">
            <pre><code class="language-java">{{formatCode(section.value)}}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import HTMLUtils from '@/utils/HTMLUtils';
export default Vue.extend({
  props: ['articleContents'],
  methods: {
    handleScroll(event: Event) {
      const subHeadingSelector = 'h1[id="sectionHeading"]';
      const height: number = window.scrollY + 200;

      const lastElement:
        | HTMLElement
        | undefined = HTMLUtils.getAllElementsBySelector(subHeadingSelector)
        .filter(el => el.offsetTop < height)
        .pop();

      if (lastElement) {
        this.$emit('scroll', lastElement.dataset.index);
      }
    },

    formatCode(codeLines: string[]) {
      return codeLines.join('\n');
    },
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.$emit('scroll', 1);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
});
</script>

<style lang="scss" scoped>
</style>


