<script setup lang="ts">
import { RouterView } from "vue-router";

import MainPanel from "@/components/layout/MainPanel.vue";
import MenuPanel from "@/components/layout/MenuPanel.vue";
import TrackPanel from "@/components/layout/TrackPanel.vue";
</script>

<template>
  <div class="w-full h-screen flex flex-col overflow-hidden">
    <div class="w-full flex-1 flex overflow-hidden">
      <MenuPanel />
      <MainPanel>
        <RouterView />
      </MainPanel>
    </div>
    <TrackPanel />
  </div>
</template>
