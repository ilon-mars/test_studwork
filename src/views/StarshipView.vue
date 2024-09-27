<template>
  <AppLoader v-if="!starship" />

  <template v-else>
    <p v-for="[key, value] in Object.entries(starship)">{{ key }}: {{ value }}</p>
  </template>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import AppLoader from '@/components/AppLoader.vue';
import StarshipController from '@/controllers/StarshipController';
import { RouteName } from '@/enums/RouteName';
import { Starship } from '@/types/Starship';

const route = useRoute();
const router = useRouter();

const starship = ref<Starship | null>(null);

onMounted(async () => {
  try {
    starship.value = await StarshipController.getById(route.params.id as string);
  } catch (error) {
    router.push({ name: RouteName.NOT_FOUND })
  }
});
</script>
