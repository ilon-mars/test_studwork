<template>
  <section :class="$style.root">
    <h2 :class="$style.title">{{ starship.name }}</h2>

    <StarshipDetailsList :starship="starship" />

    <template v-if="films?.length">
      <h3 :class="$style.subtitle">Films</h3>
      <ul :class="$style.list">
        <li v-for="[film, index] in films" :key="index">{{ film }}</li>
      </ul>
    </template>

    <template v-if="pilots?.length">
      <h3 :class="$style.subtitle">Pilots</h3>
      <ul :class="$style.list">
        <li v-for="[pilot, index] in pilots" :key="index">{{ pilot }}</li>
      </ul>
    </template>

    <BaseLink :to="{ name: RouteName.STARSHIP_LIST }" :class="$style.link">Back to list</BaseLink>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

import StarshipDetailsList from '@/components/Starship/StarshipDetailsList.vue';
import BaseLink from '@/components/UI/BaseLink.vue';
import FilmController from '@/controllers/FilmController';
import PilotController from '@/controllers/PilotController';
import { RouteName } from '@/enums/RouteName';
import { Film } from '@/types/Film';
import { Pilot } from '@/types/Pilot';
import { Starship } from '@/types/Starship';

const props = defineProps<{
  starship: Starship;
}>();

const router = useRouter();

const films = ref<Film[] | undefined>([]);
const pilots = ref<Pilot[] | undefined>([]);

onMounted(async () => {
  try {
    [films.value, pilots.value] = await Promise.all([
      FilmController.getAll(props.starship.films),
      PilotController.getAll(props.starship.pilots)
    ]);
  } catch (error) {
    await router.replace({ name: RouteName.NOT_FOUND });
  }
});
</script>

<style module>
.root {
  padding-top: var(--space-l);
}

.title {
  margin: 0;
}

.subtitle {
  margin-top: var(--space-m);
  margin-bottom: var(--space-s);
}

.list {
  list-style: none;
  padding-left: var(--space-s);
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-m);

  &::before {
    content: '';
    width: 4px;
    height: 100%;
    background-color: var(--bg-dark-dimmed);
    display: block;
    position: absolute;
    left: 0;
  }
}

.link {
  display: block;
  margin-top: var(--space-l);
  text-align: center;
}
</style>
