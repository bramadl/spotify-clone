import { reactive, ref, computed } from "vue";

import type { Track } from "@/modules/Tracks/interfaces";

import HeartIconMd from "@/components/icons/HeartIconMd.vue";
import HeartOutlineIcon from "@/components/icons/HeartOutlineIcon.vue";

const trackClosed = ref<boolean>(true);
const track = reactive<Track>({
  thumbnail: "https://i.scdn.co/image/ab67616d0000b273a9f6c04ba168640b48aa5795",
  title: "idontwannabeyouanymore",
  track_url: "",
  artists: [
    {
      id: "KEs4A5Gp",
      name: "Billie Eilish",
      profile_url: "",
    },
  ],
  is_liked: true,
});

export const useTrack = () => {
  const trackTooltipMessage = computed<string>(() =>
    track.is_liked ? "Remove from your library" : "Save to your library"
  );

  const trackLibraryIcon = computed<string>(() =>
    track.is_liked ? HeartIconMd : HeartOutlineIcon
  );

  function saveOrRemoveFromLibrary(): void {
    track.is_liked = !track.is_liked;
  }

  return {
    track,
    trackClosed,
    trackTooltipMessage,
    trackLibraryIcon,
    saveOrRemoveFromLibrary,
  };
};
