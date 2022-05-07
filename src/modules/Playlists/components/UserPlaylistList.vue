<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

import type { Playlist } from "@/modules/Playlists/interfaces";

const playlists = ref<Array<Playlist>>([
  {
    name: "On Repeat",
    path_url: "/playlist/1itVv3q0hXSE8wDm",
  },
  {
    name: "Nightingale",
    path_url: "/playlist/Hud3CkLaTqE1CCmn",
  },
  {
    name: "Touring",
    path_url: "/playlist/9kAbOkowLOinHwuN",
  },
]);
</script>

<template>
  <ul class="px-2 overflow-auto">
    <li v-for="({ name, path_url }, index) in playlists" :key="index">
      <RouterLink
        class="w-full h-8 flex items-center gap-4 px-4 opacity-70 hover:opacity-100 transition ease-out duration-200"
        :to="path_url"
      >
        <span class="text-sm"> {{ name }} </span>
      </RouterLink>
    </li>
  </ul>
</template>
