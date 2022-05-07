<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: "button",
    validator(value: string) {
      return ["button", "router-link", "RouterLink", "a"].includes(value);
    },
  },
});

const resolvedComponent = computed<string | typeof RouterLink>(() => {
  return props.tag === "button" ? "button" : RouterLink;
});
</script>

<template>
  <component
    :is="resolvedComponent"
    class="w-full h-10 flex items-center gap-4 px-4 hover:text-white transition ease-out duration-200 hover:opacity-100"
    :class="isActive ? 'opacity-100' : 'opacity-70'"
  >
    <slot />
  </component>
</template>
