<template>
  <AppLoader v-if="isLoading" />

  <template v-else>
    <AppSearchBar v-model.trim="searchValue" />
    <StarshipList :list="filteredList"/>
  </template>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import AppLoader from '@/components/AppLoader.vue';
import AppSearchBar from '@/components/AppSearchBar.vue';
import StarshipList from '@/components/Starship/StarshipList.vue';
import { useSearch } from '@/composables/useSearch';
import StarshipController from '@/controllers/StarshipController';
import { Starship } from '@/types/Starship';
import { searchByName } from '@/utils/searchByName';

const isLoading = ref(true);
const starships = ref<Starship[]>([]);

const {
  searchValue,
  filteredList,
  getSearchQueryParams
} = useSearch<Starship>(starships, searchByName);

onMounted(async () => {
  starships.value = await StarshipController.getAll() || [];
  isLoading.value = false;

  getSearchQueryParams();
});
</script>
