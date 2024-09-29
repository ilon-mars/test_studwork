<template>
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
</template>

<script setup lang="ts">
import BaseButton from '@/components/UI/BaseButton.vue';

defineProps<{
  isPrevDisabled: boolean,
  isNextDisabled: boolean
}>();

defineEmits<{
  (e: 'prev'): void,
  (e: 'next'): void,
}>();
</script>
