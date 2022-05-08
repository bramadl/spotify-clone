<script setup lang="ts">
import RecordCardHorizontal from "@/modules/Records/components/RecordCardHorizontal.vue";
import RecordCardVertical from "@/modules/Records/components/RecordCardVertical.vue";

defineProps({
  id: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "rgb(180, 180, 180)",
  },
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: null,
  },
  artist: {
    type: Array,
    default: null,
  },
  type: {
    type: String,
    default: "playlist",
    validator(value: string) {
      return ["playlist", "album", "artist", "episode"].includes(value);
    },
  },
  orientation: {
    type: String,
    default: "vertical",
    validator(value: string) {
      return ["horizontal", "vertical"].includes(value);
    },
  },
});
</script>

<template>
  <RecordCardHorizontal
    v-if="orientation === 'horizontal'"
    :id="id"
    :color="color"
    :thumbnail="thumbnail"
    :title="title"
    :type="type"
  />

  <RecordCardVertical
    v-else
    :id="id"
    :thumbnail="thumbnail"
    :title="title"
    :description="description"
    :artist="artist"
    :type="type"
  />
</template>
