<template>
  <section class="sticky" id="article-menu">
    <div class="tile is-parent is-vertical">
      <article class="is-child is-success">
        <ul class="has-text-left notification is-success">
          <li v-for="section in sections" :key="section.id">
            <p :class="{highlighed:itemToHighlight==section.id}" @click.prevent="scrollToDiv(section.id)">{{getSubHeading(section.components)}}</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import HTMLUtils from '@/utils/HTMLUtils';
export default Vue.extend({
  props: ['itemToHighlight', 'sections'],
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
.sticky {
  position: sticky;
  top: 100px;
}

.highlighed {
  color: green;
  font-weight: bold;
}

p {
  cursor: pointer;
}
</style>


