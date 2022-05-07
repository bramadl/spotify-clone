<script setup lang="ts">
import { ref } from "vue";

import BaseIconWrapper from "@/components/base/BaseIconWrapper.vue";
import BaseSlider from "@/components/base/BaseSlider.vue";
import DeviceIcon from "@/components/icons/DeviceIcon.vue";
import LyricIcon from "@/components/icons/LyricIcon.vue";
import QueueIcon from "@/components/icons/QueueIcon.vue";
import VolumeIcon from "@/components/icons/VolumeIcon.vue";

const volume = ref<string | number>(100);
</script>

<template>
  <div class="flex items-center justify-end p-4">
    <ul class="flex items-center gap-2">
      <li class="flex items-center gap-2">
        <BaseIconWrapper v-tooltip="'Lyrics'">
          <LyricIcon class="fill-current" />
        </BaseIconWrapper>
      </li>

      <li class="flex items-center gap-2">
        <BaseIconWrapper v-tooltip="'Queue'">
          <QueueIcon class="fill-current" />
        </BaseIconWrapper>
      </li>

      <li class="flex items-center gap-2">
        <BaseIconWrapper v-tooltip="'Connect to a device'">
          <DeviceIcon class="fill-current" />
        </BaseIconWrapper>
      </li>

      <li class="flex items-center gap-2">
        <BaseIconWrapper v-tooltip="'Mute'">
          <VolumeIcon class="fill-current" />
        </BaseIconWrapper>

        <div class="relative group w-[100px]">
          <BaseSlider v-model="volume" />
        </div>
      </li>
    </ul>
  </div>
</template>
