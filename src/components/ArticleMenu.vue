<template>
     <section class="" id="article-menu">
         <div class="box fixed" >
         <ul>
            
             <li><a href=# :class="{highlighed:itemToHighlight==1}">some link 1</a></li>
             <li><a href=# :class="{highlighed:itemToHighlight==2}">some link 2</a></li>
             <li><a href=# :class="{highlighed:itemToHighlight==3}">some link 3</a></li>
             <li><a href=# :class="{highlighed:itemToHighlight==4}">some link 4</a></li>
             <li><a href=# :class="{highlighed:itemToHighlight==5}">some link 5</a></li>
         </ul>
         </div>
    
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: ['itemToHighlight'],
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


