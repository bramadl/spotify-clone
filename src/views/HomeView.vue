<script setup lang="ts">
import { ref } from "vue";
import { useColor } from "@/composables/useColor";
import AppHeading from "@/components/app/AppHeading.vue";
import UserGreetingsGrid from "@/modules/Users/components/UserGreetingsGrid.vue";
import RecordGridList from "@/modules/Records/components/RecordGridList.vue";
import RecordCard from "@/modules/Records/components/RecordCard.vue";
import type { Records } from "@/interfaces/Records";

const { backgroundColor } = useColor();

const userCommonGenres = ref<Records>({
  id: "qQ4jukKrsj6c2Qr6",
  title: "Good afternoon",
  records: [
    {
      id: "UdwqONbgfeYV5LUM",
      thumbnail:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe1b208b540b1419be505c696/1/en/default",
      title: "Daily Mix 1",
      color: "#86198f",
      type: "playlist",
    },
    {
      id: "JPFLwixN9YIA4w1t",
      thumbnail:
        "https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_DEFAULT-en.jpg",
      title: "On Repeat",
      color: "#5b21b6",
      type: "playlist",
    },
    {
      id: "KF26VazNL8V6K6Vi",
      thumbnail:
        "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebf6284a310a10b07852e358cd/2/en/default",
      title: "Daily Mix 2",
      color: "#1e40af",
      type: "playlist",
    },
    {
      id: "kaVAaDR1gLvy3aeO",
      thumbnail:
        "https://i.scdn.co/image/ab67706c0000da8408370e6fdc54f0f60cf907ba",
      title:
        "watching masbintang's goofy smile as the citylights reflect on his eyes",
      color: "#155e75",
      type: "playlist",
    },
    {
      id: "LVP8hCXFMN7AOO3l",
      thumbnail:
        "https://i.scdn.co/image/ab67706c0000da84ca576bcb318a3e34dfa0d175",
      title: "Melancholic sanguine",
      color: "#065f46",
      type: "playlist",
    },
    {
      id: "LVP8hCXFMN7AOO3l",
      thumbnail:
        "https://i.scdn.co/image/ab67616d0000b273b55d26c578e30129b0a7e86e",
      title: "Manusia",
      color: "#3f6212",
      type: "playlist",
    },
  ],
});

const userRecommendationGenres = ref<Array<Records>>([
  {
    id: "nCuUtcyxWqma94dV",
    title: "Made for Bram",
    records: [
      {
        id: "BD8JSRqUtyGUH7Tm",
        thumbnail:
          "https://newjams-images.scdn.co/v3/release-radar/ab6761610000e5eb7f9cb6cb3ac6f8a055153ced/en/default",
        title: "Release Radar",
        type: "playlist",
        description:
          "Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday.",
      },
      {
        id: "aZKLCVzKAzGLZndO",
        thumbnail:
          "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb56a1ec4c883485665fc49f62/3/en/default",
        title: "Daily Mix 3",
        type: "playlist",
        description: "Reality Club, Arash Buana, Efek Rumah Kaca and more",
      },
      {
        id: "v7zCrfCwfoV5dKfg",
        thumbnail:
          "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb265ef5547ecff4dabd6352bf/4/en/default",
        title: "Daily Mix 4",
        type: "playlist",
        description: "John Mayer, Janno Gibbs, Secondhand Serenade and more",
      },
      {
        id: "1lGa5evxkXehKkrh",
        thumbnail:
          "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebd8b9980db67272cb4d2c3daf/5/en/default",
        title: "Daily Mix 5",
        type: "playlist",
        description: "Billie Eilish, Lana Del Rey, Alessia Cara and more",
      },
      {
        id: "bkhcjwA9CVEXWwQx",
        thumbnail:
          "https://mixed-media-images.spotifycdn.com/daily-drive/daily-drive-2.0-en-default.jpg",
        title: "Daily Drive",
        type: "playlist",
        description: "A mix of news and music made for you",
      },
    ],
  },
]);
</script>

<template>
  <div class="w-full h-[320px] px-8 overlay" :style="backgroundColor">
    <UserGreetingsGrid :message="userCommonGenres.title">
      <RecordCard
        v-bind="record"
        v-for="record in userCommonGenres.records"
        :key="record.id"
        orientation="horizontal"
      />
    </UserGreetingsGrid>

    <div
      v-for="genre in userRecommendationGenres"
      :key="genre.id"
      class="py-6 pb-12"
    >
      <AppHeading :title="genre.title" :path-url="`/genre/${genre.id}`" />
      <RecordGridList>
        <RecordCard
          v-for="record in genre.records"
          :key="record.id"
          v-bind="record"
        />
      </RecordGridList>
    </div>
  </div>
</template>
