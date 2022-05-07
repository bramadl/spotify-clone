<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  disabledClass: {
    type: String,
    default: "disabled:opacity-20",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "base",
    validator(value: string) {
      return ["sm", "base"].includes(value);
    },
  },
});

const computedOpacity = computed<string>(() => {
  return props.isActive ? "opacity-100" : "opacity-70";
});

const computedDimension = computed<string>(() => {
  switch (props.size) {
    case "sm":
      return "w-6 h-6";
    default:
      return "w-8 h-8";
  }
});

const masterClass = computed<Array<string>>(() => {
  return [computedOpacity.value, computedDimension.value, props.disabledClass];
});
</script>

<template>
  <button
    class="inline-flex items-center justify-center hover:opacity-100 transition ease-out duration-200 rounded-full"
    :class="masterClass"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
