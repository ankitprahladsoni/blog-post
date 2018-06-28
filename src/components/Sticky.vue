<template>
  <section class="sticky">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 150px;
}
</style>


