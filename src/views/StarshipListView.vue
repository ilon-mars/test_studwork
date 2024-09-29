<template>
  <AppLoader v-if="isLoading" />

  <template v-else>
    <AppSearchBar v-model.trim="searchValue" />
    <StarshipList :list="list"/>

    <AppPagination
      v-show="!isSortingMode"
      :isNextDisabled="isNextDisabled"
      :isPrevDisabled="isPrevDisabled"
      @prev="goPrev"
      @next="goNext"
    />
  </template>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

import AppLoader from '@/components/AppLoader.vue';
import AppPagination from '@/components/AppPagination.vue';
import AppSearchBar from '@/components/AppSearchBar.vue';
import StarshipList from '@/components/Starship/StarshipList.vue';
import { usePagination } from '@/composables/usePagination';
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

const {
  isPrevDisabled,
  isNextDisabled,
  goPrev,
  goNext,
  paginatedList
} = usePagination<Starship>(starships);

onMounted(async () => {
  starships.value = await StarshipController.getAll() || [];
  isLoading.value = false;

  getSearchQueryParams();
});

const isSortingMode = computed(() => searchValue.value);

const list = computed(() => isSortingMode.value ? filteredList.value : paginatedList.value)
</script>
