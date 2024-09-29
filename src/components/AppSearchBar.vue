<template>
    <form @submit.prevent="onSubmit">
      <input
        v-model.trim="inputValue"
        type="search"
      />
      <button>search</button>
      <button type="button" @click="onClick">clear</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
  modelValue: string
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const router = useRouter();

const inputValue = ref(props.modelValue);

const updateAddressBar = (value: string) => {
  router.push({
    query: {
      q: value,
    },
  });
};

const onSubmit =() => {
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
