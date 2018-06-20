<template>
     <section class="section expand" id="navbar-section">
        <nav class="navbar is-fixed-top expand" role="navigation" aria-label="main navigation" style="background: lightblue;">
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
            <div id="title" class="expand">
                Strategy Pattern
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <a class="navbar-item">
                        Home
                    </a>
                    <a class="navbar-item">
                        About
                    </a>
                    <a class="navbar-item">
                        Contact
                    </a>
                </div>
            </div>

        </nav>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  mounted() {
    window.addEventListener('scroll', e => {
      const elements: Element[] = this.getElementsFromSelectors(
        'nav',
        '#navbar-section',
        '#title',
      );

      if (window.scrollY) {
        this.collapse(elements);
      } else {
        this.expand(elements);
      }
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
        classes.remove('expcollapseand');
      });
    },

    getElementsFromSelectors(...selectors: string[]) {
      return selectors.map(s => document.querySelector(s) as Element);
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

  div div.navbar-menu {
    transition: all 0.5s ease;
    height: $expandedHeight;
    align-items: flex-end;
  }
}

nav.collapse {
  height: 0px;
  align-items: flex-end;
  transition: all 0.5s ease;

  div {
    div.navbar-menu {
      transition: all 0.5s ease;
      height: $collapsedHeight;
    }

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

#title {
  width: 100%;
  text-align: center;
  font-family: unset;

  &.expand {
    font-size: 100px;
    transition: all 0.5s ease;
  }

  &.collapse {
    font-size: 40px;
    transition: all 0.5s ease;
  }
}

#avatarDiv {
  padding-bottom: 0px;
}
</style>


