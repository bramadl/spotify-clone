<script setup lang="ts">
import { ref } from "vue";

import BaseIconWrapper from "@/components/base/BaseIconWrapper.vue";
import BaseSlider from "@/components/base/BaseSlider.vue";
import BaseTrackTime from "@/components/base/BaseTrackTime.vue";
import NextTrackIcon from "@/components/icons/NextTrackIcon.vue";
import PauseIcon from "@/components/icons/PauseIcon.vue";
import PrevTrackIcon from "@/components/icons/PrevTrackIcon.vue";
import RepeatIcon from "@/components/icons/RepeatIcon.vue";
import ShuffleIcon from "@/components/icons/ShuffleIcon.vue";

const duration = ref<string | number>(0);
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-2 p-4">
    <div class="flex items-start gap-4">
      <BaseIconWrapper disabled>
        <ShuffleIcon class="fill-current" />
      </BaseIconWrapper>

      <BaseIconWrapper>
        <PrevTrackIcon class="fill-current" />
      </BaseIconWrapper>

      <BaseIconWrapper is-active class="bg-white text-black">
        <PauseIcon class="fill-current" />
      </BaseIconWrapper>

      <BaseIconWrapper>
        <NextTrackIcon class="fill-current" />
      </BaseIconWrapper>

      <BaseIconWrapper disabled>
        <RepeatIcon class="fill-current" />
      </BaseIconWrapper>
    </div>

    <div class="w-full h-auto flex items-center justify-center gap-2">
      <BaseTrackTime>0:00</BaseTrackTime>

      <div class="flex-1 relative group w-full">
        <BaseSlider v-model="duration" :max="300" />
      </div>

      <BaseTrackTime>4:02</BaseTrackTime>
    </div>
  </div>
</template>
