<script setup lang="ts">
defineProps({
  message: {
    type: String,
    default: "Welcome Back!",
  },
});
</script>

<template>
  <div class="py-6">
    <div class="font-bold text-3xl mb-4">{{ message }}</div>
    <div class="grid grid-cols-3 gap-4 mt-2">
      <slot />
    </div>
  </div>
</template>
