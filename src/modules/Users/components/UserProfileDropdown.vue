<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import { useUser } from "@/modules/Users/composables/useUser";

import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon.vue";
import DropdownChevron from "@/components/icons/DropdownChevron.vue";

const { user, userProfileMenu } = useUser();
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <MenuButton
      class="inline-flex items-center justify-center border border-transparent hover:border-[#282828] bg-black/70 hover:bg-[#282828] rounded-full p-0.5"
    >
      <span
        class="w-7 h-7 rounded-full"
        :style="`background: url('${user.avatar}') center center/cover`"
      />
      <span class="text-xs font-semibold px-2"> {{ user.name }} </span>
      <DropdownChevron class="fill-current mr-1" />
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-1.5 w-52 origin-top-right rounded-md bg-[#242424] focus:outline-none p-1"
      >
        <MenuItem
          v-for="({ external, path_url, text }, index) in userProfileMenu"
          :key="index"
          v-slot="{ active }"
        >
          <RouterLink
            class="w-full h-10 flex items-center justify-between px-3 rounded"
            :class="{
              'bg-[rgba(255,255,255,0.1)]': active,
            }"
            :to="path_url"
          >
            <span class="text-xs"> {{ text }} </span>
            <ExternalLinkIcon v-if="external" class="fill-current" />
          </RouterLink>
        </MenuItem>

        <MenuItem v-slot="{ active }">
          <button
            class="w-full h-10 flex items-center justify-between px-3 rounded"
            :class="{
              'bg-[rgba(255,255,255,0.1)]': active,
            }"
          >
            <span class="text-xs">Log out</span>
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
