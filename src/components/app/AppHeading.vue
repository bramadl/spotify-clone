<script setup lang="ts">
import { RouterLink } from "vue-router";

defineProps({
  pathUrl: {
    type: String,
    default: "/",
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="flex items-end justify-between mb-4">
    <div class="flex flex-col leading-3">
      <RouterLink class="font-bold text-2xl hover:underline" :to="pathUrl">
        {{ title }}
      </RouterLink>
      <p v-if="subtitle" class="text-sm opacity-70">{{ subtitle }}</p>
    </div>
    <RouterLink
      class="uppercase font-semibold text-xs opacity-70 hover:opacity-100 tracking-widest"
      :to="pathUrl"
    >
      See All
    </RouterLink>
  </div>
</template>
