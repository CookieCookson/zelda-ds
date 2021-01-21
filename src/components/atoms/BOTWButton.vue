<template>
  <button class="botw-button"><slot></slot></button>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BOTWButton extends Vue {}
</script>
<style lang="scss" scoped>
.botw-button {
  @include focusable();
}
</style>
