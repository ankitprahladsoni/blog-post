<template>
  <div>
    <section class="section has-text-left" v-for="section in sections" :key="section.id" :id="section.id">
      <div v-for="(component,index) in section.components" :key="index">
        <div v-if="component.type==='subHeading'">
          <h1 class="title is-2" id="sectionSubHeading" :data-index="section.id">{{component.value}}</h1>
        </div>
        <div v-if="component.type==='paragraph'">
          <p>{{component.value}}</p>
        </div>
        <div v-if="component.type==='code'">
          <pre><code class="language-java">{{formatCode(component.value)}}</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HTMLUtils from '@/utils/HTMLUtils';
export default Vue.extend({
  props: ['sections'],
  methods: {
    handleScroll(event: Event) {
      this.$emit('scroll', HTMLUtils.getIndexToScroll());
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
.section {
  padding: 1.5rem 1.5rem;
}
</style>


