<template>
  <section :class="$style.root">
    <h2 :class="$style.title">Resource wasn't found</h2>
    <img src="@/assets/img/error-page.gif" />
    <BaseLink
      :to="{ name: RouteName.STARSHIP_LIST }"
    >Go to main?</BaseLink>
  </section>
</template>

<script setup lang="ts">
import BaseLink from '@/components/UI/BaseLink.vue';
import { RouteName } from '@/enums/RouteName';
</script>

<style module>
.root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  padding-top: var(--space-m);
  gap: var(--space-m);
}

.title {
  text-align: center;
  margin: 0;
}
</style>
