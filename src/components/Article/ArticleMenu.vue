<template>
  <Sticky id="article-menu">
    <article class="message is-info">
      <ul class="message-body has-text-left">
        <li v-for="section in sections" :key="section.id" :class="{active:divToHighlight==section.id}">
          <router-link :to="subHeadingId(section.id)">{{getSubHeading(section.components)}}</router-link>
        </li>
      </ul>
    </article>
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
a {
  color: #23d160;
}

li {
  padding: 0.2em;
}

.active {
  background: linear-gradient(to right, #c2e7fd, #f6fbfe 60%);
}

.message a:not(.button):not(.tag) {
  text-decoration: none;
}
</style>


