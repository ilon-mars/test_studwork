import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useToastStore = defineStore('toast', () => {
  const error = ref(null);

  function showError(message: string) {
    error.value = message;
  }

  function closeError() {
    error.value = null;
  }

  return {
    error,
    showError,
    closeError
  };
});
