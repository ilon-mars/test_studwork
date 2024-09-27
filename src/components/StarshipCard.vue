<template>
  <li>
    <RouterLink :to="{ name: RouteName.STARSHIP, params: { id } }">
      <span>name: {{ item.name }}</span>
      <span>model: {{ item.model }}</span>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import { RouteName } from '@/enums/RouteName';
import { Starship } from '@/types/Starship';
import { getIdFromUrl } from '@/utils/getIdFromUrl';

const props = defineProps<{
  item: Starship
}>();

const id = ref(getIdFromUrl(props.item.url));
</script>
