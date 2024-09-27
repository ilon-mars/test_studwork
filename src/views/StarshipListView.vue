<template>
  <AppLoader v-if="isLoading" />

  <ul v-else>
    <StarshipCard
      v-for="item in list"
      :key="item.name"
      :item="item"
    />
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import AppLoader from '@/components/AppLoader.vue';
import StarshipCard from '@/components/StarshipCard.vue';
import StarshipController from '@/controllers/StarshipController';
import { Starship } from '@/types/Starship';

const isLoading = ref(true);
const list = ref<Starship[]>([]);

onMounted(async () => {
  list.value = await StarshipController.getAll();
  isLoading.value = false;
});
</script>
