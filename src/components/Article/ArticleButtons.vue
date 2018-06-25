<template>
     <section class="sticky" id="article-buttons">
            <div class="tile is-parent is-vertical">
                <article class="tile is-child">
                    <p class="subtitle" ><i id="github" class="fab fa-github fa-2x"></i></p>
                    <p class="subtitle" ><i id="linkedin" class="fab fa-linkedin fa-2x"></i></p>
                    <p class="subtitle" ><i id="share" class="fas fa-share-alt fa-2x"></i></p>
                    <p class="subtitle" ><i id="bookmark" class="far fa-bookmark fa-2x"></i></p>
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


