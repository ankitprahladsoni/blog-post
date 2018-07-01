<template>
    <div class="navbar-end">
        <nav class="top">
            <div class="dropdownBackground">
                <span class="arrow"></span>
            </div>
            <ul class="menu-items">
                <li @mouseenter.self="handleEnter" @mouseleave.self="handleLeave" v-for="menuItem in menuItems" :key="menuItem.title">
                    <a class="button is-info is-outlined">
                        {{menuItem.title}}
                    </a>
                    <ul class="dropdown courses">
                        <li v-for="pattern in menuItem.patterns" :key="pattern.value">
                            <a :href="pattern.link">{{pattern.name}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HTMLUtils from '@/utils/HTMLUtils';
@Component
export default class NavMenu extends Vue {
  private menuItems = [
    {
      title: 'Creational',
      patterns: [{ name: 'Factory Pattern', link: '#' }],
    },
    {
      title: 'Structural',
      patterns: [{ name: 'Adapter Pattern', link: '#' }],
    },
    {
      title: 'Behavioural',
      patterns: [{ name: 'Strategy Pattern', link: '#' }],
    },
  ];

  private handleEnter(event: MouseEvent) {
    const el = event.target as HTMLElement;
    const background = HTMLUtils.getHTMLElementBySelector(
      '.dropdownBackground',
    );
    el.classList.add('trigger-enter');
    setTimeout(
      () =>
        el.classList.contains('trigger-enter') &&
        el.classList.add('trigger-enter-active'),
      150,
    );
    background.classList.add('open');
    const nav = HTMLUtils.getHTMLElementBySelector('.top');
    const dropdown = HTMLUtils.getHTMLElementByElAndSelector(el, '.dropdown');

    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left,
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty(
      'transform',
      `translate(${coords.left}px, ${coords.top}px)`,
    );
  }

  private handleLeave(event: MouseEvent) {
    const el = event.target as HTMLElement;
    const background = HTMLUtils.getHTMLElementBySelector(
      '.dropdownBackground',
    );
    el.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
  }
}
</script>

<style lang="scss" scoped>
nav ul {
  display: flex;
}

.menu-items {
  margin-right: 2em;
  li {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0.5em 0.5em;
    a {
      text-decoration: none;
      padding: 5px 5px;
    }
  }
}

.dropdown {
  opacity: 0.5;
  position: absolute;
  overflow: hidden;
  padding: 20px;
  top: -40px;
  border-radius: 2px;
  transition: all 0.5s;
  transform: translateY(100px);
  will-change: opacity;
  display: none;
}

.trigger-enter .dropdown {
  display: block;
}

.trigger-enter-active .dropdown {
  opacity: 1;
}

.dropdownBackground {
  width: 100px;
  height: 100px;
  position: absolute;
  background: rgb(68, 112, 255);
  border-radius: 4px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s, opacity 0.1s, transform 0.2s;
  transform-origin: 50% 0;
  display: flex;
  justify-content: center;
  opacity: 0;
}

.dropdownBackground.open {
  opacity: 1;
}

.arrow {
  position: absolute;
  width: 20px;
  height: 20px;
  display: block;
  background: rgb(68, 112, 255);
  transform: translateY(-50%) rotate(45deg);
}

.courses {
  min-width: 300px;
}

.dropdown a {
  text-decoration: none;
  color: white;
}

.button.is-info.is-outlined {
  background: #fff;
  &:hover {
    background: #209cee;
  }
}
</style>