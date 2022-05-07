<script setup lang="ts">
import { RouterLink } from "vue-router";

import BaseIconWrapper from "@/components/base/BaseIconWrapper.vue";
import BasePinnedIcon from "@/components/base/BasePinnedIcon.vue";
import BasePinTrackButton from "@/components/base/BasePinTrackButton.vue";
import ChevronUpIcon from "@/components/icons/ChevronUpIcon.vue";
import PipIcon from "@/components/icons/PipIcon.vue";

import { useTrack } from "@/modules/Tracks/composables/useTrack";
const {
  track,
  trackClosed,
  trackTooltipMessage,
  trackLibraryIcon,
  saveOrRemoveFromLibrary,
} = useTrack();
</script>

<template>
  <div class="flex items-center justify-start gap-4 p-4">
    <div
      v-if="trackClosed"
      class="relative aspect-square h-full group"
      :style="`background: url('${track.thumbnail}') center center/cover`"
    >
      <BasePinnedIcon>
        <BasePinTrackButton @click="trackClosed = false">
          <ChevronUpIcon class="fill-current" />
        </BasePinTrackButton>
      </BasePinnedIcon>
    </div>

    <div class="flex items-center gap-4">
      <div class="flex flex-col items-start gap-0 leading-none">
        <RouterLink
          class="text-xs line-clamp-1 hover:underline"
          :to="track.track_url"
        >
          <span> {{ track.title }} </span>
        </RouterLink>

        <RouterLink
          v-for="artist in track.artists"
          :key="artist.id"
          class="opacity-70 hover:opacity-100 hover:underline"
          :to="artist.profile_url"
        >
          <span class="text-[10px]"> {{ artist.name }} </span>
        </RouterLink>
      </div>

      <div class="flex items-center">
        <BaseIconWrapper
          v-tooltip="trackTooltipMessage"
          :class="{ 'text-[#1ed760]': track.is_liked }"
          :is-active="track.is_liked"
          @click="saveOrRemoveFromLibrary()"
        >
          <component :is="trackLibraryIcon" class="fill-current" />
        </BaseIconWrapper>

        <BaseIconWrapper>
          <PipIcon class="fill-current" />
        </BaseIconWrapper>
      </div>
    </div>
  </div>
</template>
