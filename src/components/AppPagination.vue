<template>
  <div :class="$style.root">
    <BaseButton
      type="button"
      :disabled="isPrevDisabled"
      @click="$emit('prev')"
    >prev</BaseButton>

    <BaseButton
      type="button"
      :disabled="isNextDisabled"
      @click="$emit('next')"
    >next</BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/UI/BaseButton.vue';

defineProps<{
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}>();

defineEmits<{
  (e: 'prev'): void;
  (e: 'next'): void;
}>();
</script>

<style module>
.root {
  display: flex;
  width: 100%;
  padding: 0 var(--space-s);
  justify-content: center;
  gap: var(--space-s);
}
</style>
