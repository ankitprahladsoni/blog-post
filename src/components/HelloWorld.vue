<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nemo, animi porro, iste error aut voluptatibus vero accusantium distinctio corrupti libero? Dignissimos ad distinctio praesentium voluptates asperiores placeat maiores explicabo.
      Ex reprehenderit fugit recusandae repudiandae nihil nulla illo cumque perspiciatis perferendis sunt iure dolore aut delectus nesciunt, quisquam omnis mollitia. Nobis aspernatur exercitationem quam, eaque id eos unde deleniti maxime!
      Quo labore tempora accusantium inventore omnis corporis unde optio similique? Error nam veniam ipsum mollitia sit, illo sint iure, perferendis, neque beatae quidem architecto minus assumenda reiciendis nulla dignissimos minima.
      Totam, qui voluptates delectus quod inventore fuga, excepturi itaque dolores, in nesciunt repellat esse. Adipisci ullam unde, molestiae esse recusandae optio pariatur dolor delectus natus, facilis sint. Officiis, nemo fugiat.
      Earum aliquid praesentium obcaecati, voluptatum quia unde nostrum neque dignissimos tempora eum laborum iste assumenda aperiam quam odio blanditiis provident facere numquam labore sit dolor alias suscipit veritatis quod. Dolores.
      Natus quibusdam dolor blanditiis magni harum fuga nam vitae distinctio sapiente ratione? Veniam in soluta a consequuntur ipsam unde. Laudantium blanditiis ad neque consequuntur delectus. Corporis repellendus earum corrupti provident.
      Quaerat optio error suscipit tenetur eaque quisquam asperiores laboriosam consequuntur, fuga ut officiis maiores numquam maxime sint at. Amet corporis ipsam autem minima praesentium blanditiis doloremque labore in, voluptatum aliquam?
      Amet harum dolor, beatae ipsum asperiores recusandae labore officiis nulla, at laboriosam eligendi sunt omnis consectetur commodi temporibus eum mollitia, iste libero? Nobis et harum enim provident repellat praesentium. Reprehenderit.
      Fugit, consequuntur amet fuga ipsa expedita repudiandae nulla distinctio nobis est natus odit, a aspernatur similique ipsam blanditiis modi aliquam. Aliquam neque qui deserunt inventore. Ea dolores nisi numquam architecto?
      Provident molestias perferendis minima libero ducimus nesciunt sunt esse consequatur dignissimos accusamus, ratione placeat quod exercitationem unde labore culpa, sit pariatur, aut facere! Quibusdam, voluptatum! Id veniam reiciendis explicabo ab.
      <a href="https://github.com/vuejs/vue-cli/tree/dev/docs" target="_blank">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank">typescript</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank">pwa</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha" target="_blank">unit-mocha</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress" target="_blank">e2e-cypress</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
