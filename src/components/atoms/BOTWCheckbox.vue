<template>
  <label class="botw-checkbox">
    <input class="botw-checkbox__checkbox" type="checkbox" />
    <span class="botw-checkbox__label botw-checkbox__label--on">On</span>
    <span class="botw-checkbox__label botw-checkbox__label--off">Off</span>
  </label>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BOTWCheckbox extends Vue {}
</script>
<style lang="scss" scoped>
.botw-checkbox {
  $self: &;
  @include focusable();
  display: flex;

  &__checkbox {
    width: 0;
    margin: 0;
    appearance: none;
  }

  &__label {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    border-radius: 0.125rem;

    &--on {
      flex: 2 1 auto;
    }

    &--off {
      flex: 1 1 auto;
    }

    #{$self}__checkbox:checked ~ &--on,
    #{$self}__checkbox:not(:checked) ~ &--off {
      background-color: rgba($botw-yellow, 0.2);
    }
  }
}
</style>
