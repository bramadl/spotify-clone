<script setup lang="ts">
import ChevronUpIcon from "@/components/icons/ChevronUpIcon.vue";

import { useTrack } from "@/modules/Tracks/composables/useTrack";
const { trackClosed } = useTrack();
</script>

<template>
  <RouterLink
    v-if="!trackClosed"
    class="relative flex-shrink-0 w-full aspect-square bg-[url('https://i.scdn.co/image/ab67616d0000b273a9f6c04ba168640b48aa5795')] bg-cover"
    to="/"
  >
    <div class="absolute right-1 top-1">
      <button
        class="w-6 h-6 inline-flex items-center justify-center bg-black rounded-full opacity-70 hover:opacity-100 hover:scale-105 transition ease-out duration-200"
        @click="trackClosed = true"
      >
        <ChevronUpIcon class="rotate-180 fill-current" />
      </button>
    </div>
  </RouterLink>
</template>
