<template>
  <form :class="$style.root" @submit.prevent="onSubmit">
    <BaseInput v-model.trim="inputValue" type="search" />

    <BaseButton :styleType="BaseButtonType.PRIMARY">search</BaseButton>
    <BaseButton
      type="button"
      :disabled="!inputValue"
      @click="onClick"
    >clear</BaseButton>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import BaseButton from '@/components/UI/BaseButton.vue';
import BaseInput from '@/components/UI/BaseInput.vue';
import { BaseButtonType } from '@/enums/BaseButtonType';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const router = useRouter();

const inputValue = ref(props.modelValue);

const updateAddressBar = (value: string) => {
  router.push({
    query: {
      q: value
    }
  });
};

const onSubmit = () => {
  emit('update:modelValue', inputValue.value);

  updateAddressBar(inputValue.value);

  if (!inputValue.value) {
    router.replace({ query: undefined });
  }
};

const onClick = () => {
  inputValue.value = '';
  onSubmit();
};
</script>

<style module>
.root {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: var(--space-s);
}

.searchButton {
  background-color: var(--base-accent-dimmed);
}
</style>
