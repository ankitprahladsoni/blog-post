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
    window.addEventListener('scroll', (e) => {
      const nav: Element = document.querySelector('nav') as HTMLElement;
      const navSection: Element = document.querySelector('#navbar-section') as HTMLElement;
      const title: Element = document.querySelector('#title') as HTMLElement;
      const divs: Element[] = [nav, navSection, title];

      if (window.scrollY) {
        this.collapse(divs);
      } else {
        this.expand(divs);
      }
    });
  },
  methods: {
    collapse(divs: Element[]) {
      divs.forEach((div) => {
        div.classList.add('collapse');
        div.classList.remove('expand');
      });
    },

    expand(divs: Element[]) {
      divs.forEach((div) => {
        div.classList.remove('collapse');
        div.classList.add('expand');
      });
    },
  },
});
</script>

<style lang="scss" scoped>
nav {
  transition: all 0.5s ease;
}

nav div a img {
  transition: all 0.5s ease;
  height: 150px;
  width: 150px;
  border-radius: 50%;
}

#navbar-section.expand {
  height: 150px;
}

#navbar-section.collapse {
  height: min-content;
  padding-bottom: 0px;
}

nav.expand {
  height: 150px;
  align-items: flex-end;
  transition: all 0.5s ease;
}

nav.collapse {
  height: 0px;
  align-items: flex-end;
  transition: all 0.5s ease;
}

nav.expand div div.navbar-menu {
  transition: all 0.5s ease;
  height: 150px;
  align-items: flex-end;
}

nav.collapse div div.navbar-menu {
  transition: all 0.5s ease;
  height: 50px;
}

nav.collapse div a img {
  transition: all 0.5s ease;
  height: 50px;
  width: 50px;
}

.navbar-item img {
  max-height: unset;
}

.navbar-item {
  padding-top: 0px;
  padding-bottom: 15px;
}

#title {
  width: 100%;
  text-align: center;
  font-family: unset;
}

#title.expand {
  font-size: 100px;
  transition: all 0.5s ease;
}

#title.collapse {
  font-size: 40px;
  transition: all 0.5s ease;
}

#avatarDiv {
  padding-bottom: 0px;
}
</style>


