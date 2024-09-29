<template>
  <AppLoader v-if="!starship" />

  <template v-else>
    <p v-for="[key, value] in Object.entries(starship)">{{ key }}: {{ value }}</p>

    <ul v-if="films?.length">
      <li v-for="film in films">{{ film }}</li>
    </ul>

    <ul v-if="pilots?.length">
      <li v-for="pilot in pilots">{{ pilot }}</li>
    </ul>
  </template>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import AppLoader from '@/components/AppLoader.vue';
import FilmController from '@/controllers/FilmController';
import PilotController from '@/controllers/PilotController';
import StarshipController from '@/controllers/StarshipController';
import { RouteName } from '@/enums/RouteName';
import { Film } from '@/types/Film';
import { Pilot } from '@/types/Pilot';
import { Starship } from '@/types/Starship';

const route = useRoute();
const router = useRouter();

const starship = ref<Starship | null>(null);
const films = ref<Film[] | undefined>([]);
const pilots = ref<Pilot[] | undefined>([]);

onMounted(async () => {
  try {
    starship.value = await StarshipController.getById(route.params.id as string);
    [films.value, pilots.value] = await Promise.all([
      FilmController.getAll(starship.value.films),
      PilotController.getAll(starship.value.pilots)
    ]);
  } catch (error) {
    router.replace({ name: RouteName.NOT_FOUND })
  }
});
</script>
