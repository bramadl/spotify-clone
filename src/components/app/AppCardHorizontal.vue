<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useColor } from "@/composables/useColor";

// import PauseIcon from "@/components/icons/PauseIcon.vue";
import PlayIcon from "@/components/icons/PlayIcon.vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "rgb(180, 180, 180)",
  },
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    validator(value: string) {
      return ["playslist", "album"].includes(value);
    },
  },
});

const { setActiveColor } = useColor();
const defaultColor = "rgb(180, 180, 180)";
const resolvedRoutePath = computed<string>(() => {
  return `${props.type}/${props.id}`;
});
</script>

<template>
  <div
    class="flex items-center justify-between gap-4 bg-white/10 hover:bg-white/20 focus-within:bg-white/20 transition ease-out duration-200 rounded overflow-hidden cursor-pointer group"
    @mouseenter="setActiveColor(color)"
    @mouseleave="setActiveColor(defaultColor)"
  >
    <div
      class="w-20 h-20"
      style="box-shadow: 4px 0 8px rgba(0, 0, 0, 0.25)"
      :style="`background: url('${thumbnail}') center center/cover`"
    />
    <div class="flex-1 flex flex-col">
      <RouterLink
        class="text-sm font-semibold line-clamp-2"
        :to="resolvedRoutePath"
      >
        {{ title }}
      </RouterLink>
    </div>
    <div
      class="mr-4 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition ease-out duration-200"
    >
      <button
        class="w-12 h-12 inline-flex items-center justify-center bg-[#1ed760] hover:bg-[#1fdf64] hover:scale-105 active:bg-[#169c46] text-black rounded-full transition ease-out duration-200"
        style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25)"
      >
        <PlayIcon class="fill-current" />
      </button>
    </div>
  </div>
</template>
