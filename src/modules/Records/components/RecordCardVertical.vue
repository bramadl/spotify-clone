<script setup lang="ts">
import { RouterLink } from "vue-router";

// import PauseIcon from "@/components/icons/PauseIcon.vue";
import PlayIcon from "@/components/icons/PlayIcon.vue";

defineProps({
  id: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  artist: {
    type: Array,
    default: null,
  },
  type: {
    type: String,
    default: "playlist",
    validator(value: string) {
      return ["playlist", "album", "artist", "episode"].includes(value);
    },
  },
});
</script>

<template>
  <div class="p-4 bg-[#181818] hover:bg-[#282828] rounded group">
    <div
      class="relative w-full aspect-square shadow-lg"
      :style="`background: url('${thumbnail}') center center/cover`"
    >
      <div class="absolute right-2 bottom-2">
        <div
          class="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition ease-out duration-200"
        >
          <button
            class="w-12 h-12 inline-flex items-center justify-center bg-[#1ed760] hover:bg-[#1fdf64] hover:scale-105 active:bg-[#169c46] text-black rounded-full transition ease-out duration-200"
            style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25)"
          >
            <PlayIcon class="fill-current" />
          </button>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <RouterLink class="font-semibold text-sm line-clamp-1 mb-1" to="/">
        {{ title }}
      </RouterLink>
      <p class="text-xs opacity-70 line-clamp-2">
        {{ description }}
      </p>
    </div>
  </div>
</template>
