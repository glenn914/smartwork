<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {

  },
})
export default class App extends Vue {}

</script>

<style>
body{overflow:hidden}
html{overflow-y:auto;}
html{overflow: auto; }
</style>
