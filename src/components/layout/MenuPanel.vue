<script setup lang="ts">
import GlobalMenuList from "@/components/GlobalMenuList.vue";
import GlobalMenuDivider from "@/components/GlobalMenuDivider.vue";
import GlobalRecommendationList from "@/components/GlobalRecommendationList.vue";
import SpotifyLogo from "@/components/SpotifyLogo.vue";
import TrackPopupBanner from "@/modules/Tracks/components/TrackPopupBanner.vue";
import UserPlaylistList from "@/modules/Playlists/components/UserPlaylistList.vue";
</script>

<template>
  <div class="w-64 h-full flex-shrink-0 flex flex-col gap-6 overflow-hidden">
    <SpotifyLogo class="mt-6" />
    <GlobalMenuList />
    <GlobalRecommendationList />

    <GlobalMenuDivider />

    <UserPlaylistList />
    <TrackPopupBanner />
  </div>
</template>
