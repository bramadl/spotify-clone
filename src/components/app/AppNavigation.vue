<script setup lang="ts">
import { useUser } from "@/modules/Users/composables/useUser";
import { useColor } from "@/composables/useColor";

import UserProfileDropdown from "@/modules/Users/components/UserProfileDropdown.vue";
import UserUpgradeButton from "@/modules/Users/components/UserUpgradeButton.vue";

const { activeColor } = useColor();
const {
  user: { is_premium },
} = useUser();
</script>

<template>
  <div
    class="sticky top-0 left-0 z-[1] w-full h-16 flex items-center justify-between px-8 noise"
    :style="`background-color: ${activeColor}`"
  >
    <nav class="flex items-center gap-4">
      <slot />
    </nav>

    <nav class="flex items-center gap-8">
      <UserUpgradeButton v-if="!is_premium" />
      <UserProfileDropdown />
    </nav>
  </div>
</template>
