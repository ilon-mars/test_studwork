<template>
  <RouterLink
    :class="$style.root"
    :to="to"
  >
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  to: Object,
}>();
</script>

<style module>
.root {
  color: var(--base-accent);
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--base-light);
  }
}
</style>
