<template>
     <section class="sticky" id="article-menu">
          <div class="box" >
            <ul class="has-text-left">
              <li><a href=# :class="{highlighed:itemToHighlight==1}" @click.prevent="someMethod('1')">some link 1</a></li>
              <li><a href=# :class="{highlighed:itemToHighlight==2}" @click.prevent="someMethod('2')">some link 2</a></li>
              <li><a href=# :class="{highlighed:itemToHighlight==3}" @click.prevent="someMethod('3')">some link 3</a></li>
              <li><a href=# :class="{highlighed:itemToHighlight==4}" @click.prevent="someMethod('4')">some link 4</a></li>
              <li><a href=# :class="{highlighed:itemToHighlight==5}" @click.prevent="someMethod('5')">some link 5</a></li>
            </ul>
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
        .map(el => el.offsetTop + 60)
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
</style>


