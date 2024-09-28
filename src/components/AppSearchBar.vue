<template>
    <input
      :value="modelValue"
      @input="onInput"
      type="search"
    />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import { debounce } from '@/utils/debounce';

defineProps<{
  modelValue: string
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const router = useRouter();

const onInput = debounce((e: Event) => {
  if (!e.target) {
    return;
  }

  const value = (e.target as HTMLInputElement).value.trim();

  emit('update:modelValue', value);

  router.push({
    query: {
      q: value,
    },
  });
}, 500);
</script>
