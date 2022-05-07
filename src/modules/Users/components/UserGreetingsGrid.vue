<script setup lang="ts">
import { ref } from "vue";
import type { Card } from "@/interfaces/Card";

import AppCardHorizontal from "@/components/app/AppCardHorizontal.vue";

defineProps({
  message: {
    type: String,
    default: "Welcome Back!",
  },
});

const cards = ref<Array<Card>>([
  {
    id: "UdwqONbgfeYV5LUM",
    thumbnail:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe1b208b540b1419be505c696/1/en/default",
    title: "Daily Mix 1",
    color: "#86198f",
    type: "playlist",
  },
  {
    id: "JPFLwixN9YIA4w1t",
    thumbnail:
      "https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_DEFAULT-en.jpg",
    title: "On Repeat",
    color: "#5b21b6",
    type: "playlist",
  },
  {
    id: "KF26VazNL8V6K6Vi",
    thumbnail:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebf6284a310a10b07852e358cd/2/en/default",
    title: "Daily Mix 2",
    color: "#1e40af",
    type: "playlist",
  },
  {
    id: "kaVAaDR1gLvy3aeO",
    thumbnail:
      "https://i.scdn.co/image/ab67706c0000da8408370e6fdc54f0f60cf907ba",
    title:
      "watching masbintang's goofy smile as the citylights reflect on his eyes",
    color: "#155e75",
    type: "playlist",
  },
  {
    id: "LVP8hCXFMN7AOO3l",
    thumbnail:
      "https://i.scdn.co/image/ab67706c0000da84ca576bcb318a3e34dfa0d175",
    title: "Melancholic sanguine",
    color: "#065f46",
    type: "playlist",
  },
  {
    id: "LVP8hCXFMN7AOO3l",
    thumbnail:
      "https://i.scdn.co/image/ab67616d0000b273b55d26c578e30129b0a7e86e",
    title: "Manusia",
    color: "#3f6212",
    type: "playlist",
  },
]);
</script>

<template>
  <div class="py-6">
    <div class="font-bold text-3xl mb-4">{{ message }}</div>

    <div class="grid grid-cols-3 gap-4 mt-2">
      <template v-for="(card, index) in cards" :key="index">
        <AppCardHorizontal v-bind="card" />
      </template>
    </div>
  </div>
</template>
