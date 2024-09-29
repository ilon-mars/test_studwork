<template>
  <li :class="$style.root">
    <RouterLink
      :class="$style.link"
      :to="{ name: RouteName.STARSHIP, params: { id } }"
    >
      <span :class="$style.name">{{ item.name }}</span>
      <span :class="$style.model">{{ item.model }}</span>

      <ArrowIcon :class="$style.icon"/>
    </RouterLink>
  </li>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import { RouteName } from '@/enums/RouteName';
import { Starship } from '@/types/Starship';
import { getIdFromUrl } from '@/utils/getIdFromUrl';

const props = defineProps<{
  item: Starship
}>();

const id = ref(getIdFromUrl(props.item.url));
</script>

<style module>
.root {
  border-top: 1px solid var(--base-light);
}

.link {
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr 20px;
  padding: var(--space-l) 0;
}

.name {
  color: var(--fg-role-text);
}

.model {
  color: var(--base-accent);
}

.icon {
  width: 20px;
  height: 20px;
  fill: var(--base-accent);
}
</style>
