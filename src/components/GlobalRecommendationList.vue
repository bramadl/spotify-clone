<script setup lang="ts">
import BaseIconMenuWrapper from "@/components/base/BaseIconMenuWrapper.vue";
import BaseAppMenu from "@/components/base/BaseAppMenu.vue";
import HeartIcon from "@/components/icons/HeartIcon.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";

const appGradient = "bg-[linear-gradient(135deg,#450af5,#c4efd9)]";

function createPlaylist(): void {
  //
}
</script>

<template>
  <ul class="px-2">
    <li>
      <BaseAppMenu @click="createPlaylist">
        <BaseIconMenuWrapper class="bg-white">
          <PlusIcon />
        </BaseIconMenuWrapper>
        <span class="font-semibold text-sm"> Create Playlist </span>
      </BaseAppMenu>
    </li>

    <li>
      <BaseAppMenu tag="a" to="/collection/tracks">
        <BaseIconMenuWrapper :class="appGradient">
          <HeartIcon class="fill-current" />
        </BaseIconMenuWrapper>
        <span class="font-semibold text-sm"> Liked Songs </span>
      </BaseAppMenu>
    </li>
  </ul>
</template>
