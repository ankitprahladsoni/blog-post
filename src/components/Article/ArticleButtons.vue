<template>
     <section class="sticky" id="article-buttons">
            <div class="tile is-parent is-vertical">
                <article class="tile is-child">
                    <p class="subtitle"><i class="fab fa-github-alt fa-2x"></i></p>
                    <p class="subtitle"><i class="fab fa-linkedin fa-2x"></i></p>
                    <p class="subtitle"><i class="fas fa-share-alt fa-2x"></i></p>
                    <p class="subtitle"><i class="fas fa-bookmark fa-2x"></i></p>
                </article>
            </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 100px;
}
 article{
     color: green;
 }
</style>


