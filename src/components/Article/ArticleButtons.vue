<template>
  <Sticky>
    <div class="tile is-parent is-vertical">
      <article class="tile is-child">
        <p class="subtitle">
          <i id="github" class="fab fa-github fa-2x"></i>
        </p>
        <p class="subtitle">
          <i id="linkedin" class="fab fa-linkedin fa-2x"></i>
        </p>
        <p class="subtitle">
          <i id="share" class="fas fa-share-alt fa-2x"></i>
        </p>
        <p class="subtitle">
          <i id="bookmark" class="far fa-bookmark fa-2x"></i>
        </p>
      </article>
    </div>
  </Sticky>
</template>

<script lang="ts">
import Vue from 'vue';
import Sticky from '@/components/Sticky.vue';
export default Vue.extend({
  components: {
    Sticky,
  },
});
</script>

<style lang="scss" scoped>
i {
  cursor: pointer;
}

#linkedin {
  color: #2b7fa8;
}

#bookmark {
  color: #c17527;
}
</style>


