<template>
  <dl :class="$style.root">
    <div v-for="prop in propertiesToShow" :class="$style.wrapper">
      <dt :class="$style.field">{{ camelCaseToPhrase(prop) }}</dt>
      <dd :class="$style.value">{{ starship[prop] }}</dd>
    </div>
  </dl>
</template>

<script setup lang="ts">
import { Starship } from '@/types/Starship';

import { propertiesToShow } from '@/constants/Starship';
import { camelCaseToPhrase } from '@/utils/camelCaseToPhrase';

defineProps<{
  starship: Starship,
}>();
</script>

<style module>
.root {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
  border: 1px solid var(--bg-dark-dimmed);
  padding: var(--space-s);
}

.field {
  font-weight: 400;
  font-size: 14px;
  color: var(--base-accent-dimmed);
}

.value {
  margin-left: 0;
}
</style>
