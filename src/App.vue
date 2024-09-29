<template>
  <RouterView />
  <AppToast />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import AppToast from '@/components/AppToast.vue';
</script>

<style>
#app {
  color: var(--base-light);
  background-color: var(--base-dark);
  width: 100%;
  height: 100dvh;
  font-family: 'Open Sans', 'Helvetica', sans-serif;
  padding: 0 var(--space-s);
}
</style>
