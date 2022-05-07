<script setup lang="ts">
import AppNavigation from "@/components/app/AppNavigation.vue";
import BaseIconWrapper from "@/components/base/BaseIconWrapper.vue";
import ChevronBack from "@/components/icons/ChevronBack.vue";
import ChevronNext from "@/components/icons/ChevronNext.vue";
</script>

<template>
  <div class="relative flex-1 h-full bg-[#121212] overflow-auto">
    <AppNavigation>
      <div class="flex items-center gap-4">
        <BaseIconWrapper
          class="bg-black"
          disabled
          disabled-class="disabled:opacity-50"
        >
          <ChevronBack class="fill-current" />
        </BaseIconWrapper>

        <BaseIconWrapper
          class="bg-black"
          disabled
          disabled-class="disabled:opacity-50"
        >
          <ChevronNext class="fill-current" />
        </BaseIconWrapper>
      </div>
    </AppNavigation>

    <slot />
  </div>
</template>
