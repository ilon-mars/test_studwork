<template>
  <ul :class="$style.root">
    <StarshipListCard
      v-for="item in list"
      :key="item.name"
      :item="item"
    />
  </ul>
</template>

<script setup lang="ts">
import StarshipListCard from '@/components/Starship/StarshipListCard.vue';
import { Starship } from '@/types/Starship';

defineProps<{
  list: Starship[]
}>();
</script>

<style module>
.root {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: var(--space-m) 0;
  min-height: 750px;
  padding-left: 0;
}
</style>
