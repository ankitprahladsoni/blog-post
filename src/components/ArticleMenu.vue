<template>
     <section class="" id="article-menu">
         <div class="box fixed" >
         <ul>
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
export default Vue.extend({
  props: ['itemToHighlight'],
  methods: {
    someMethod(divToScroll: string) {
      const headingCSSSelector = 'div[id="content"]>div>h1';
      const elements = [
        ...(document.querySelectorAll(headingCSSSelector) as NodeListOf<
          HTMLElement
        >),
      ];

      const heightToScroll = elements
        .filter(el => divToScroll === (el.getAttribute('id') || 1))
        .map(el => el.offsetTop - 12)
        .pop();

      window.scrollTo({
        top: heightToScroll,
        behavior: 'smooth',
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
}

.highlighed {
  color: green;
  font-weight: bold;
}
</style>


