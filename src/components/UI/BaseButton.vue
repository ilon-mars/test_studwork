<template>
  <button :class="[$style.root, $style[styleType]]">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { BaseButtonType } from '@/enums/BaseButtonType';

type Props = {
  styleType?: BaseButtonType;
};

withDefaults(defineProps<Props>(), {
  styleType: BaseButtonType.DEFAULT
});
</script>

<style module>
.root {
  background-color: var(--bg-dark-dimmed);
  border: none;
  font-weight: 500;
  font-style: normal;
  color: var(--base-light);
  font-size: 18px;
  letter-spacing: 0.2px;
  padding: var(--space-s) var(--space-m);
  transition: background-color 0.3s ease;

  &:not(:disabled):hover {
    cursor: pointer;
    background-color: transparent;
  }

  &:disabled {
    opacity: 0.5;
  }
}

.primary {
  background-color: var(--base-accent-dimmed);

  &:not(:disabled):hover {
    background-color: rgb(254, 95, 5, 0.5);
  }
}
</style>
