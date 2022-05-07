<script setup lang="ts">
import TrackerPanelWrapper from "@/modules/Tracks/components/TrackerPanelWrapper.vue";
import TrackInformation from "@/modules/Tracks/components/TrackInformation.vue";
import TrackControls from "@/modules/Tracks/components/TrackControls.vue";
import TrackAttributes from "@/modules/Tracks/components/TrackAttributes.vue";
</script>

<template>
  <TrackerPanelWrapper>
    <TrackInformation />
    <TrackControls />
    <TrackAttributes />
  </TrackerPanelWrapper>
</template>
