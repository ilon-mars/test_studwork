<template>
  <input
    v-model="modelValue"
    :class="$style.root"
  />
</template>

<script setup lang="ts">
const modelValue = defineModel<string>()
</script>

<style module>
.root {
  border: 1px solid transparent;
  background-color: var(--bg-dark-dimmed);
  color: var(--base-light);
  padding: 0 var(--space-s);
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--base-accent);
  }
}
</style>
