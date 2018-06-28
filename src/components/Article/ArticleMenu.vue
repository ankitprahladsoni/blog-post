<template>
  <Sticky id="article-menu">
    <div class="tile is-parent is-vertical">
      <ul class="has-text-left notification is-success">
        <li v-for="section in sections" :key="section.id">
          <p :class="{highlight:divToHighlight==section.id}" @click="scrollToDiv(section.id)">{{getSubHeading(section.components)}}</p>
        </li>
      </ul>
    </div>
  </Sticky>
</template>

<script lang="ts">
import Vue from 'vue';
import Sticky from '@/components/Sticky.vue';
import HTMLUtils from '@/utils/HTMLUtils';
export default Vue.extend({
  props: ['divToHighlight', 'sections'],
  components: {
    Sticky,
  },
  methods: {
    scrollToDiv(divIndex: string) {
      HTMLUtils.scrollToDiv(String(divIndex));
    },
    getSubHeading(components: any[]) {
      return components.find(component => component.type === 'subHeading')
        .value;
    },
  },
});
</script>

<style lang="scss" scoped>
.highlight {
  color: green;
  font-weight: bold;
}

p {
  cursor: pointer;
}
</style>


