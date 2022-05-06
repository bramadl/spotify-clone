<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import SpotifyIcon from "./components/icons/SpotifyIcon.vue";
import HomeIcon from "./components/icons/HomeIcon.vue";
import SearchIcon from "./components/icons/SearchIcon.vue";
import LibraryIcon from "./components/icons/LibraryIcon.vue";
import PlusIcon from "./components/icons/PlusIcon.vue";
import HeartIcon from "./components/icons/HeartIcon.vue";
import HeartOutlineIcon from "./components/icons/HeartOutlineIcon.vue";
import PipIcon from "./components/icons/PipIcon.vue";
import LyricIcon from "./components/icons/LyricIcon.vue";
import QueueIcon from "./components/icons/QueueIcon.vue";
import DeviceIcon from "./components/icons/DeviceIcon.vue";
import VolumeIcon from "./components/icons/VolumeIcon.vue";
// import PlayIcon from "./components/icons/PlayIcon.vue";
import PauseIcon from "./components/icons/PauseIcon.vue";
import NextTrackIcon from "./components/icons/NextTrackIcon.vue";
import PrevTrackIcon from "./components/icons/PrevTrackIcon.vue";
import ShuffleIcon from "./components/icons/ShuffleIcon.vue";
import RepeatIcon from "./components/icons/RepeatIcon.vue";
import ChevronBack from "./components/icons/ChevronBack.vue";
import ChevronNext from "./components/icons/ChevronNext.vue";
import DropdownChevron from "./components/icons/DropdownChevron.vue";
import PlayIcon from "./components/icons/PlayIcon.vue";
import ChevronUpIcon from "./components/icons/ChevronUpIcon.vue";
import ExternalLinkIcon from "./components/icons/ExternalLinkIcon.vue";

const value = ref<number>(100);
const duration = ref<number>(0);
const inDragging = ref<boolean>(false);
const inDraggingTwo = ref<boolean>(false);
const trackClosed = ref<boolean>(true);
</script>

<template>
  <div class="w-full h-screen flex flex-col overflow-hidden">
    <div class="w-full flex-1 flex overflow-hidden">
      <div
        class="w-64 h-full flex-shrink-0 flex flex-col gap-6 pt-6 overflow-hidden"
      >
        <div class="px-2">
          <div class="px-4">
            <RouterLink to="/">
              <SpotifyIcon class="w-full max-w-[130px] h-10" />
            </RouterLink>
          </div>
        </div>
        <ul class="px-2">
          <li>
            <RouterLink
              class="w-full h-10 flex items-center gap-4 px-4 opacity-100 hover:opacity-100 transition ease-out duration-200"
              to="/"
            >
              <HomeIcon class="fill-current" />
              <span class="font-semibold text-sm">Home</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              class="w-full h-10 flex items-center gap-4 px-4 opacity-70 hover:opacity-100 transition ease-out duration-200"
              to="/"
            >
              <SearchIcon class="fill-current" />
              <span class="font-semibold text-sm">Search</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              class="w-full h-10 flex items-center gap-4 px-4 opacity-70 hover:opacity-100 transition ease-out duration-200"
              to="/"
            >
              <LibraryIcon class="fill-current" />
              <span class="font-semibold text-sm"> Your Library </span>
            </RouterLink>
          </li>
        </ul>
        <ul class="px-2">
          <li>
            <button
              class="w-full h-10 flex items-center gap-4 px-4 hover:text-white transition ease-out duration-200 opacity-70 hover:opacity-100"
            >
              <span
                class="w-6 h-6 flex-shrink-0 inline-flex items-center justify-center bg-white rounded-sm"
              >
                <PlusIcon />
              </span>
              <span class="font-semibold text-sm"> Create Playlist </span>
            </button>
          </li>
          <li>
            <button
              class="w-full h-10 flex items-center gap-4 px-4 hover:text-white transition ease-out duration-200 opacity-70 hover:opacity-100"
            >
              <span
                class="w-6 h-6 flex-shrink-0 inline-flex items-center justify-center bg-[linear-gradient(135deg,#450af5,#c4efd9)] rounded-sm"
              >
                <HeartIcon class="fill-current" />
              </span>
              <span class="font-semibold text-sm"> Liked Songs </span>
            </button>
          </li>
        </ul>
        <div class="px-2">
          <div class="px-4"><div class="w-full h-px px-2 bg-white/20" /></div>
        </div>
        <ul class="px-2 overflow-auto">
          <li>
            <RouterLink
              class="w-full h-8 flex items-center gap-4 px-4 opacity-70 hover:opacity-100 transition ease-out duration-200"
              to="/"
            >
              <span class="text-sm"> On Repeat </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              class="w-full h-8 flex items-center gap-4 px-4 opacity-70 hover:opacity-100 transition ease-out duration-200"
              to="/"
            >
              <span class="text-sm"> Touring </span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              class="w-full h-8 flex items-center gap-4 px-4 opacity-70 hover:opacity-100 transition ease-out duration-200"
              to="/"
            >
              <span class="text-sm"> Nightingale </span>
            </RouterLink>
          </li>
        </ul>
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
      </div>
      <div class="relative flex-1 h-full bg-[#121212] overflow-auto">
        <div
          class="sticky top-0 left-0 z-[1] w-full h-16 flex items-center justify-between px-8 bg-purple-400 noise"
        >
          <nav class="flex items-center gap-4">
            <button
              class="w-8 h-8 inline-flex items-center justify-center disabled:opacity-50 opacity-70 hover:opacity-100 transition ease-out duration-200 bg-black rounded-full"
              disabled
            >
              <ChevronBack class="fill-current" />
            </button>
            <button
              class="w-8 h-8 inline-flex items-center justify-center opacity-100 hover:opacity-100 transition ease-out duration-200 bg-black rounded-full"
            >
              <ChevronNext class="fill-current" />
            </button>
          </nav>

          <nav class="flex items-center gap-8">
            <button
              class="inline-flex items-center justify-center border border-white/20 hover:border-2 hover:border-white hover:bg-black rounded-full p-0.5"
            >
              <span
                class="text-xs font-semibold px-4 h-7 inline-flex items-center justify-center"
              >
                Upgrade
              </span>
            </button>

            <Menu as="div" class="relative inline-block text-left">
              <MenuButton
                class="inline-flex items-center justify-center border border-transparent hover:border-[#282828] bg-black/70 hover:bg-[#282828] rounded-full p-0.5"
              >
                <span
                  class="w-7 h-7 rounded-full bg-[url('https://i.scdn.co/image/ab6775700000ee8542e6ced073967440e1b26907')] bg-cover bg-center"
                />
                <span class="text-xs font-semibold px-2">Bram</span>
                <DropdownChevron class="fill-current mr-1" />
              </MenuButton>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute right-0 mt-1.5 w-52 origin-top-right rounded-md bg-[#242424] focus:outline-none p-1"
                >
                  <MenuItem v-slot="{ active }">
                    <a
                      class="w-full h-10 flex items-center justify-between px-3 rounded"
                      :class="{
                        'bg-[rgba(255,255,255,0.1)]': active,
                      }"
                      href="/account-settings"
                    >
                      <span class="text-xs">Account</span>
                      <ExternalLinkIcon class="fill-current" />
                    </a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      class="w-full h-10 flex items-center justify-between px-3 rounded"
                      :class="{
                        'bg-[rgba(255,255,255,0.1)]': active,
                      }"
                      href="/account-settings"
                    >
                      <span class="text-xs">Profile</span>
                    </a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      class="w-full h-10 flex items-center justify-between px-3 rounded"
                      :class="{
                        'bg-[rgba(255,255,255,0.1)]': active,
                      }"
                      href="/account-settings"
                    >
                      <span class="text-xs">Upgrade to Premium</span>
                      <ExternalLinkIcon class="fill-current" />
                    </a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      class="w-full h-10 flex items-center justify-between px-3 rounded"
                      :class="{
                        'bg-[rgba(255,255,255,0.1)]': active,
                      }"
                      href="/account-settings"
                    >
                      <span class="text-xs">Log out</span>
                    </a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </nav>
        </div>
        <div class="w-full h-[320px] px-8 bg-purple-400 overlay">
          <div class="py-6">
            <div class="font-bold text-3xl">Good afternoon</div>
            <div class="grid grid-cols-3 gap-4 mt-2">
              <div
                class="flex items-center justify-between gap-4 bg-white/10 hover:bg-white/20 focus-within:bg-white/20 transition ease-out duration-200 rounded overflow-hidden cursor-pointer group"
              >
                <div
                  class="w-20 h-20 bg-[url('https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe1b208b540b1419be505c696/1/en/default')] bg-cover"
                  style="box-shadow: 4px 0 8px rgba(0, 0, 0, 0.25)"
                />
                <div class="flex-1 flex flex-col">
                  <RouterLink class="text-sm font-semibold line-clamp-2" to="/">
                    Daily Mix 1
                  </RouterLink>
                </div>
                <div
                  class="mr-4 opacity-100 group-hover:opacity-100 group-focus-within:opacity-100 transition ease-out duration-200"
                >
                  <button
                    class="w-12 h-12 inline-flex items-center justify-center bg-[#1ed760] hover:bg-[#1fdf64] hover:scale-105 active:bg-[#169c46] text-black rounded-full transition ease-out duration-200"
                    style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25)"
                  >
                    <PauseIcon class="fill-current" />
                  </button>
                </div>
              </div>
              <div
                class="flex items-center justify-between gap-4 bg-white/10 hover:bg-white/20 focus-within:bg-white/20 transition ease-out duration-200 rounded overflow-hidden cursor-pointer group"
              >
                <div
                  class="w-20 h-20 bg-[url('https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_DEFAULT-en.jpg')] bg-cover"
                  style="box-shadow: 4px 0 8px rgba(0, 0, 0, 0.25)"
                />
                <div class="flex-1 flex flex-col">
                  <RouterLink class="text-sm font-semibold line-clamp-2" to="/">
                    On Repeat
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
              <div
                class="flex items-center justify-between gap-4 bg-white/10 hover:bg-white/20 focus-within:bg-white/20 transition ease-out duration-200 rounded overflow-hidden cursor-pointer group"
              >
                <div
                  class="w-20 h-20 bg-[url('https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebf6284a310a10b07852e358cd/2/en/default')] bg-cover"
                  style="box-shadow: 4px 0 8px rgba(0, 0, 0, 0.25)"
                />
                <div class="flex-1 flex flex-col">
                  <RouterLink class="text-sm font-semibold line-clamp-2" to="/">
                    Daily Mix 2
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
              <div
                class="flex items-center justify-between gap-4 bg-white/10 hover:bg-white/20 focus-within:bg-white/20 transition ease-out duration-200 rounded overflow-hidden cursor-pointer group"
              >
                <div
                  class="w-20 h-20 bg-[url('https://i.scdn.co/image/ab67706c0000da8408370e6fdc54f0f60cf907ba')] bg-cover"
                  style="box-shadow: 4px 0 8px rgba(0, 0, 0, 0.25)"
                />
                <div class="flex-1 flex flex-col">
                  <RouterLink class="text-sm font-semibold line-clamp-2" to="/">
                    watching masbintang's goofy smile as the citylights reflect
                    on his eyes
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
              <div
                class="flex items-center justify-between gap-4 bg-white/10 hover:bg-white/20 focus-within:bg-white/20 transition ease-out duration-200 rounded overflow-hidden cursor-pointer group"
              >
                <div
                  class="w-20 h-20 bg-[url('https://i.scdn.co/image/ab67706c0000da84ca576bcb318a3e34dfa0d175')] bg-cover"
                  style="box-shadow: 4px 0 8px rgba(0, 0, 0, 0.25)"
                />
                <div class="flex-1 flex flex-col">
                  <RouterLink class="text-sm font-semibold line-clamp-2" to="/">
                    melancholic sanguine
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
              <div
                class="flex items-center justify-between gap-4 bg-white/10 hover:bg-white/20 focus-within:bg-white/20 transition ease-out duration-200 rounded overflow-hidden cursor-pointer group"
              >
                <div
                  class="w-20 h-20 bg-[url('https://i.scdn.co/image/ab67616d0000b273b55d26c578e30129b0a7e86e')] bg-cover"
                  style="box-shadow: 4px 0 8px rgba(0, 0, 0, 0.25)"
                />
                <div class="flex-1 flex flex-col">
                  <RouterLink class="text-sm font-semibold line-clamp-2" to="/">
                    Manusia
                  </RouterLink>
                </div>
                <div class="mr-4">
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
            </div>
          </div>

          <div class="py-6 pb-12">
            <div class="flex items-center justify-between">
              <div class="flex flex-col leading-3">
                <RouterLink class="font-bold text-2xl hover:underline" to="/">
                  Made For You
                </RouterLink>
                <!-- <p class="text-sm opacity-70">Inspired by your recent activity.</p> -->
              </div>
              <RouterLink
                class="uppercase font-semibold text-xs opacity-70 hover:opacity-100 tracking-widest"
                to="/"
              >
                See All
              </RouterLink>
            </div>
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
                  <RouterLink
                    class="font-semibold text-sm line-clamp-1 mb-1"
                    to="/"
                  >
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
                  <RouterLink
                    class="font-semibold text-sm line-clamp-1 mb-1"
                    to="/"
                  >
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
                  <RouterLink
                    class="font-semibold text-sm line-clamp-1 mb-1"
                    to="/"
                  >
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
                  <RouterLink
                    class="font-semibold text-sm line-clamp-1 mb-1"
                    to="/"
                  >
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
                  <RouterLink
                    class="font-semibold text-sm line-clamp-1 mb-1"
                    to="/"
                  >
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
      </div>
    </div>
    <div
      class="w-full h-24 flex-shrink-0 grid grid-cols-[420px_1fr_420px] bg-[#181818] border-t border-[#282828]"
    >
      <div class="flex items-center justify-start gap-4 p-4">
        <div
          v-if="trackClosed"
          class="relative aspect-square h-full bg-[url('https://i.scdn.co/image/ab67616d0000b273a9f6c04ba168640b48aa5795')] bg-cover group"
        >
          <div class="absolute right-1 top-1">
            <button
              class="w-6 h-6 inline-flex items-center justify-center bg-black rounded-full opacity-0 group-hover:opacity-70 hover:!opacity-100 hover:scale-105 transition ease-out duration-200"
              @click="trackClosed = false"
            >
              <ChevronUpIcon class="fill-current" />
            </button>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-start gap-0 leading-none">
            <RouterLink class="text-xs line-clamp-1 hover:underline" to="/">
              idontwannabeyouanymore
            </RouterLink>
            <RouterLink
              class="text-[10px] opacity-70 hover:opacity-100 hover:underline"
              to="/"
            >
              Billie Eilish
            </RouterLink>
          </div>
          <div class="flex items-center gap-2">
            <button
              v-tooltip="'Save to Your Library'"
              class="w-6 h-6 inline-flex items-center justify-center opacity-70 hover:opacity-100 transition ease-out duration-200"
            >
              <HeartOutlineIcon class="fill-current" />
            </button>
            <button
              class="w-6 h-6 inline-flex items-center justify-center opacity-70 hover:opacity-100 transition ease-out duration-200"
            >
              <PipIcon class="fill-current" />
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center gap-2 p-4">
        <div class="flex items-start gap-4">
          <button
            class="w-8 h-8 inline-flex items-center justify-center disabled:opacity-20 opacity-70 hover:opacity-100 transition ease-out duration-200"
            disabled
          >
            <ShuffleIcon class="fill-current" />
          </button>
          <button
            class="w-8 h-8 inline-flex items-center justify-center opacity-70 hover:opacity-100 transition ease-out duration-200"
          >
            <PrevTrackIcon class="fill-current" />
          </button>
          <button
            class="w-8 h-8 inline-flex items-center justify-center opacity-100 hover:opacity-100 transition ease-out duration-200 bg-white text-black rounded-full"
          >
            <PauseIcon class="fill-current" />
          </button>
          <button
            class="w-8 h-8 inline-flex items-center justify-center opacity-70 hover:opacity-100 transition ease-out duration-200"
          >
            <NextTrackIcon class="fill-current" />
          </button>
          <button
            class="w-8 h-8 inline-flex items-center justify-center disabled:opacity-20 opacity-70 hover:opacity-100 transition ease-out duration-200"
            disabled
          >
            <RepeatIcon class="fill-current" />
          </button>
        </div>
        <div class="w-full h-auto flex items-center justify-center gap-2">
          <span class="text-xs opacity-50">0:00</span>
          <div class="flex-1 relative group w-full">
            <vue-slider
              v-for="slider in 2"
              :key="slider"
              v-model="duration"
              class="absolute left-0 top-0 -translate-y-1/2"
              :class="
                slider === 1
                  ? inDraggingTwo
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-100'
                  : inDraggingTwo
                  ? 'opacity-0'
                  : 'opacity-100 group-hover:opacity-0'
              "
              :dot-size="12"
              :dot-style="
                slider === 1 && {
                  background: 'white',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  boxShadow: '0 2px 4px 0 rgb(0 0 0 / 50%)',
                }
              "
              drag-on-click
              :duration="inDraggingTwo ? 0 : 0.5"
              :max="300"
              :rail-style="{
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '3px',
              }"
              :process-style="{
                background: slider === 1 ? '#1db954' : '#FFFFFF',
                borderRadius: '3px',
              }"
              tooltip="none"
              width="100%"
              @drag-start="() => (inDraggingTwo = true)"
              @drag-end="() => (inDraggingTwo = false)"
            />
          </div>
          <span class="text-xs opacity-50">4:02</span>
        </div>
      </div>
      <div class="flex items-center justify-end p-4">
        <ul class="flex items-center gap-2">
          <li class="flex items-center gap-2">
            <button
              v-tooltip="'Lyrics'"
              class="w-6 h-6 inline-flex items-center justify-center opacity-70 hover:opacity-100 transition ease-out duration-200"
            >
              <LyricIcon class="fill-current" />
            </button>
          </li>
          <li class="flex items-center gap-2">
            <button
              v-tooltip="'Queue'"
              class="w-6 h-6 inline-flex items-center justify-center opacity-70 hover:opacity-100 transition ease-out duration-200"
            >
              <QueueIcon class="fill-current" />
            </button>
          </li>
          <li class="flex items-center gap-2">
            <button
              v-tooltip="'Connect to a device'"
              class="w-6 h-6 inline-flex items-center justify-center opacity-70 hover:opacity-100 transition ease-out duration-200"
            >
              <DeviceIcon class="fill-current" />
            </button>
          </li>
          <li class="flex items-center gap-2">
            <button
              v-tooltip="'Mute'"
              class="w-6 h-6 inline-flex items-center justify-center opacity-70 hover:opacity-100 transition ease-out duration-200"
            >
              <VolumeIcon class="fill-current" />
            </button>

            <div class="relative group w-[100px]">
              <vue-slider
                v-for="slider in 2"
                :key="slider"
                v-model="value"
                class="absolute left-0 top-0 -translate-y-1/2"
                :class="
                  slider === 1
                    ? inDragging
                      ? 'opacity-100'
                      : 'opacity-0 group-hover:opacity-100'
                    : inDragging
                    ? 'opacity-0'
                    : 'opacity-100 group-hover:opacity-0'
                "
                :dot-size="12"
                :dot-style="
                  slider === 1 && {
                    background: 'white',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 50%)',
                  }
                "
                drag-on-click
                :duration="inDragging ? 0 : 0.5"
                :rail-style="{
                  background: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '3px',
                }"
                :process-style="{
                  background: slider === 1 ? '#1db954' : '#FFFFFF',
                  borderRadius: '3px',
                }"
                tooltip="none"
                :width="100"
                @drag-start="() => (inDragging = true)"
                @drag-end="() => (inDragging = false)"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
