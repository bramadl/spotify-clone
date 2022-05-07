<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String, Number],
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
});

defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();
</script>

<template>
  <vue-slider
    :dot-size="12"
    :duration="0"
    drag-on-click
    :min="min"
    :max="max"
    tooltip="none"
    width="100%"
    :model-value="modelValue"
    @change="(value: string | number) => $emit('update:modelValue', value)"
  />
</template>
