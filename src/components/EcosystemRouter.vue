<template>
  <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">{{ $t('router') }}</a></li>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class EcosystemRouter extends Vue {
  mounted (): void {
    console.log("router", this.$t('router'));
  }
}
</script>

<style scoped>
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
