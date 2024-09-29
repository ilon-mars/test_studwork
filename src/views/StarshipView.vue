<template>
  <AppLoader v-if="!starship" />

  <StarshipDetails
    v-else
    :starship="starship"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import AppLoader from '@/components/AppLoader.vue';
import StarshipDetails from '@/components/Starship/StarshipDetails.vue';
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
    router.replace({ name: RouteName.NOT_FOUND })
  }
});
</script>
