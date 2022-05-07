<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

import { useColor } from "@/composables/useColor";

import AppHeading from "@/components/app/AppHeading.vue";

// import PauseIcon from "@/components/icons/PauseIcon.vue";
import PlayIcon from "@/components/icons/PlayIcon.vue";
import UserGreetingsGrid from "@/modules/Users/components/UserGreetingsGrid.vue";

const { activeColor } = useColor();

const message = ref<string>("Good afternoon");
</script>

<template>
  <div
    class="w-full h-[320px] px-8 overlay"
    :style="`background-color: ${activeColor}`"
  >
    <UserGreetingsGrid :message="message" />

    <div class="py-6 pb-12">
      <AppHeading title="Made For You" path-url="/genre/Sr2esEWDLiyqb2bu" />

      <div class="grid grid-cols-5 gap-4 mt-2">
        <div class="p-4 bg-[#181818] hover:bg-[#282828] rounded group">
          <div
            class="relative w-full aspect-square bg-[url('https://newjams-images.scdn.co/v3/release-radar/ab6761610000e5eb7f9cb6cb3ac6f8a055153ced/en/default')] bg-cover shadow-lg"
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
              Release Radar
            </RouterLink>
            <p class="text-xs opacity-70 line-clamp-2">
              Catch all the latest music from artists you follow, plus new
              singles picked for you. Updates every Friday.
            </p>
          </div>
        </div>
        <div class="p-4 bg-[#181818] hover:bg-[#282828] rounded group">
          <div
            class="relative w-full aspect-square bg-[url('https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb56a1ec4c883485665fc49f62/3/en/default')] bg-cover shadow-lg"
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
              Daily Mix 3
            </RouterLink>
            <p class="text-xs opacity-70 line-clamp-2">
              Reality Club, Arash Buana, Efek Rumah Kaca and more
            </p>
          </div>
        </div>
        <div class="p-4 bg-[#181818] hover:bg-[#282828] rounded group">
          <div
            class="relative w-full aspect-square bg-[url('https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb265ef5547ecff4dabd6352bf/4/en/default')] bg-cover shadow-lg"
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
              Daily Mix 4
            </RouterLink>
            <p class="text-xs opacity-70 line-clamp-2">
              John Mayer, Janno Gibbs, Secondhand Serenade and more
            </p>
          </div>
        </div>
        <div class="p-4 bg-[#181818] hover:bg-[#282828] rounded group">
          <div
            class="relative w-full aspect-square bg-[url('https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebd8b9980db67272cb4d2c3daf/5/en/default')] bg-cover shadow-lg"
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
              Daily Mix 5
            </RouterLink>
            <p class="text-xs opacity-70 line-clamp-2">
              Billie Eilish, Lana Del Rey, Alessia Cara and more
            </p>
          </div>
        </div>
        <div class="p-4 bg-[#181818] hover:bg-[#282828] rounded group">
          <div
            class="relative w-full aspect-square bg-[url('https://mixed-media-images.spotifycdn.com/daily-drive/daily-drive-2.0-en-default.jpg')] bg-cover shadow-lg"
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
              Daily Drive
            </RouterLink>
            <p class="text-xs opacity-70 line-clamp-2">
              A mix of news and music made for you
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
