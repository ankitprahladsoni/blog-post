<template>
  <section class="section expand" id="navbar-section">
    <nav class="navbar is-fixed-top expand" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#" id="avatarDiv">
          <img src="https://avatars2.githubusercontent.com/u/8023641" alt="avatar">
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true">sfa</span>
          <span aria-hidden="true">safasdf</span>
          <span aria-hidden="true">asdfasdfsd</span>
        </a>
      </div>
      <nav-menu/>
    </nav>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import HTMLUtils from '@/utils/HTMLUtils';
import NavMenu from './NavMenu.vue';
export default Vue.extend({
  components: {
    NavMenu,
  },
  mounted() {
    window.addEventListener('scroll', e => {
      const elements = HTMLUtils.getAllElementBySelectors(
        'nav',
        '#navbar-section',
      );

      window.scrollY ? this.collapse(elements) : this.expand(elements);
    });
  },
  methods: {
    collapse(elements: Element[]) {
      elements.map(element => element.classList).forEach(classes => {
        classes.add('collapse');
        classes.remove('expand');
      });
    },

    expand(elements: Element[]) {
      elements.map(element => element.classList).forEach(classes => {
        classes.add('expand');
        classes.remove('collapse');
      });
    },
  },
});
</script>

<style lang="scss" scoped>
$expandedHeight: 150px;
$collapsedHeight: 50px;

nav {
  transition: all 0.5s ease;
  div a img {
    transition: all 0.5s ease;
    height: $expandedHeight;
    width: $expandedHeight;
    border-radius: 50%;
  }
}

#navbar-section {
  &.expand {
    height: $expandedHeight;
  }
  &.collapse {
    height: min-content;
    padding-bottom: 0px;
  }
}

nav.expand {
  height: $expandedHeight;
  align-items: flex-end;
  transition: all 0.5s ease;
}

nav.collapse {
  height: 0px;
  align-items: flex-end;
  transition: all 0.5s ease;

  div {
    a img {
      transition: all 0.5s ease;
      height: $collapsedHeight;
      width: $collapsedHeight;
    }
  }
}

.navbar-item {
  padding-top: 0px;
  padding-bottom: 15px;

  img {
    max-height: unset;
  }
}

#avatarDiv {
  padding-bottom: 0px;
}

.navbar {
  background: linear-gradient(to left, #021b79 0%, #0575e6 100%);
}
</style>


