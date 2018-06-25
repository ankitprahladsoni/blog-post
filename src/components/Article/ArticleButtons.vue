<template>
     <section class="sticky" id="article-buttons">
            <div class="tile is-parent is-vertical">
                <article class="tile is-child">
                    <p class="subtitle"><i class="fa fa-github-alt fa-2x"></i></p>
                    <p class="subtitle"><i class="fa fa-linkedin fa-2x"></i></p>
                    <p class="subtitle"><i class="fa fa-share-alt fa-2x"></i></p>
                    <p class="subtitle"><i class="fa fa-bookmark fa-2x"></i></p>
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
</style>


