<template>
  <section class="sticky" id="article-menu">
    <div class="tile is-parent is-vertical">
      <article class="is-child is-success">
        <ul class="has-text-left notification is-success">
          <li>
            <p :class="{highlighed:itemToHighlight==1}" @click.prevent="someMethod('1')">Some link 1</p>
          </li>
          <li>
            <p :class="{highlighed:itemToHighlight==2}" @click.prevent="someMethod('2')">Some link 2</p>
          </li>
          <li>
            <p :class="{highlighed:itemToHighlight==3}" @click.prevent="someMethod('3')">Some link 3</p>
          </li>
          <li>
            <p :class="{highlighed:itemToHighlight==4}" @click.prevent="someMethod('4')">Some link 4</p>
          </li>
          <li>
            <p :class="{highlighed:itemToHighlight==5}" @click.prevent="someMethod('5')">Some link 5</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import HTMLUtils from '@/utils/html-utils.ts';
export default Vue.extend({
  props: ['itemToHighlight'],
  methods: {
    someMethod(divToScroll: string) {
      const headingCSSSelector = 'div[id="content"]>div>h1';
      const elements = HTMLUtils.getAllElementsBySelector(headingCSSSelector);

      const heightToScroll = elements
        .filter(el => divToScroll === el.getAttribute('id'))
        .map(el => el.offsetTop + 30)
        .pop();

      window.scrollTo({
        top: heightToScroll,
        behavior: 'instant',
      });
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


