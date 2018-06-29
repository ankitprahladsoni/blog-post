<template>
  <Sticky id="article-menu">
    <div class="tile is-parent is-vertical">
      <ul class="has-text-left notification is-success">
        <li v-for="section in sections" :key="section.id">
          <p :class="{highlight:divToHighlight==section.id}">
            <a :href="subHeadingId(section.id)">{{getSubHeading(section.components)}}</a>
          </p>
        </li>
      </ul>
    </div>
  </Sticky>
</template>

<script lang="ts">
import Vue from 'vue';
import Sticky from '@/components/Sticky.vue';
export default Vue.extend({
  props: ['divToHighlight', 'sections'],
  components: {
    Sticky,
  },
  methods: {
    getSubHeading(components: any[]) {
      return components.find(component => component.type === 'subHeading')
        .value;
    },
    subHeadingId(id: string) {
      return '#heading' + id;
    },
  },
});
</script>

<style lang="scss" scoped>
.highlight {
  color: green;
  font-weight: bold;
}

.notification a:not(.button) {
  text-decoration: none;
}
</style>


