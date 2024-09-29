<template>
  <Teleport to="body">
    <div v-if="store.error" :class="$style.root">
      <span>Ooops... {{ store.error }}</span>
      <img src="@/assets/img/error-toast.gif" alt="r2d2" :class="$style.img" />
      <button @click="store.closeError()" :class="$style.close">
        <CloseIcon :class="$style.icon" />
      </button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useToastStore } from '@/stores/toast';

import CloseIcon from '@/components/icons/CloseIcon.vue';

const store = useToastStore();
</script>

<style module>
.root {
  position: absolute;
  z-index: 10;
  right: var(--space-m);
  bottom: var(--space-m);
  background-color: #a52f2f;
  color: var(--base-light);
  padding: var(--space-m);
  width: max(200px, 300px);
  display: flex;
  flex-direction: column;
  gap: var(--space-s);
}

.img {
  width: 200px;
  align-self: center;
}

.close {
  position: absolute;
  top: var(--space-s);
  right: var(--space-s);
  cursor: pointer;
  background-color: transparent;
  width: 25px;
  height: 25px;
  border: none;
  overflow: hidden;
  padding: 0;
}

.icon {
  width: 100%;
  height: 100%;
  stroke: var(--base-light);
}
</style>
