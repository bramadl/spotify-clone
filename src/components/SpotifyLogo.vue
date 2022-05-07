<script setup lang="ts">
import { RouterLink } from "vue-router";

import SpotifyIcon from "@/components/icons/SpotifyIcon.vue";
</script>

<template>
  <div class="px-2">
    <div class="px-4">
      <RouterLink to="/">
        <SpotifyIcon class="w-full max-w-[130px] h-10" />
      </RouterLink>
    </div>
  </div>
</template>
