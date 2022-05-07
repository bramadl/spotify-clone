<script setup lang="ts">
import { RouterLink } from "vue-router";

import type { Menu } from "@/interfaces/Menu";

import HomeIcon from "@/components/icons/HomeIcon.vue";
import LibraryIcon from "@/components/icons/LibraryIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";

const mainMenus: Array<Menu> = [
  {
    icon: HomeIcon,
    path_url: "/",
    text: "Home",
  },
  {
    icon: SearchIcon,
    path_url: "/search",
    text: "Search",
  },
  {
    icon: LibraryIcon,
    path_url: "/collection",
    text: "Your Library",
  },
];
</script>

<template>
  <ul class="px-2">
    <li v-for="({ icon, path_url, text }, index) in mainMenus" :key="index">
      <RouterLink
        class="w-full h-10 flex items-center gap-4 px-4 opacity-70 hover:opacity-100 transition ease-out duration-200"
        :to="path_url"
      >
        <component :is="icon" class="fill-current" />
        <span class="font-semibold text-sm"> {{ text }} </span>
      </RouterLink>
    </li>
  </ul>
</template>
