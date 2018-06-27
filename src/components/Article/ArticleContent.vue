<template>
  <section class="has-text-left" id="article-content">
    <div id="content">
      <div id="1">
        <h1 class="title is-1" id="1">What is it?</h1>
        <p>According to wikipedia, Strategy pattern is a behavioral software design pattern that enables selecting an algorithm at runtime. Instead of implementing a single algorithm directly, code receives run-time instructions as to which in a family of algorithms to use</p>
        <p>This means that an object will have a certain strategy/algorithm, which can be easily injected into it, and that can initialize it's behaviour at the time of creation, or change during runtime.
        </p>
      </div>
      <div id="2">
        <h1 class="title is-1" id="2">Let's dive into a problem statement</h1>
        <p>We have a bunch of Duck subclasses that are derived from a super class Duck(Structure below) If we wish to add fly method in CityDuck and WildDuck, we will create a method fly in Duck. So far so good.
        </p>
        <p>
          But if someone creates a new subclass RubberDuck, then we might fall into some issues. This new class RubberDuck cannot fly, and therefore, the best bet would be to override fly method in Rubberduck to do nothing.
        </p>
        <p>Lets add more fun to the problem, you boss wants you to add WoddenDuck too. Now this WoodenDuck can;t swim, can't fly. We will have to override both the methods to make WoddenDuck not swim and not fly.</p>
        <p>This may go on and on with many more methods to be added in Duck class, and each time a new method is added, we will ahve to check if overriding the superclass behaviour is required in few subclasses or not. This can be a real pain of we have may subclass. We are also duplicating a lot of code in making RubberDuck and WoodenDuck not fly.</p>
        <p>Inheritance is becoming a mess and we are left with lot of duplicate code.</p>
      </div>
      <div id="3">
        <h1 class="title is-1" id="3">The solution</h1>
        <p>Enters the Strategy Pattern. As per the definition, lets make aur class select algorithms at runtime. In our case, fly and swim can be of different algorithms/strategies/behaviour. Instead of passing them as Is-A relationship from parent to child, lets give these behaviours with Has-A relationship.</p>
      <p>
        we create an Interface IFlyBehaviour and ISwimBehaviour, and use them as variables in our Duck class.

        IFlyBehaviour may have multiple implementations such as FlyingHighBehavior and NoFlyBehaviour.
        Same with ISwimBehaviour code below.

      </p>
      <p>now instead of creating different duck classes, we can have a single duck class with behaviour/strategis than can be easily pluged into them.</p>
      If we create setters for these strategies, then we can change the behaviour at runtime.
      </div>
      <div id="4">
        <h1 class="title is-1" id="4">Other examples</h1>
        <p>Sorting arrays can have different strategy.
          Charging a customer based on the time of the day. Day charges and night charges.

        </p>
      </div>
      <div id="5">
        <h1 class="title is-1" id="5">some link 5</h1>
        <p>Conclusion TODO</p>
      </div>
    </div>

  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import HTMLUtils from '@/utils/HTMLUtils';
export default Vue.extend({
  methods: {
    handleScroll(event: Event) {
      const subHeadingSelector = 'div[id="content"]>div>h1';
      const elements = HTMLUtils.getAllElementsBySelector(subHeadingSelector);

      const height: number = window.scrollY + 200;
      const filtered = elements.filter(el => el.offsetTop < height);
      const lastElement: HTMLElement | undefined = filtered.pop();

      if (lastElement) {
        this.$emit('scroll', lastElement.getAttribute('id'));
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.$emit('scroll', 1);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
});
</script>

<style lang="scss" scoped>
</style>


