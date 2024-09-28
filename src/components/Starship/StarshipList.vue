<template>
  <ul>
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
