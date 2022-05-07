import { reactive } from "vue";

import type { User, UserProfileMenu } from "@/modules/Users/interfaces";

const user = reactive<User>({
  id: "3xfNIyGQ98z5Sgt0",
  avatar: "https://i.scdn.co/image/ab6775700000ee8542e6ced073967440e1b26907",
  is_premium: false,
  name: "Bram Adl",
});

export function useUser() {
  const userProfileMenu: Array<UserProfileMenu> = [
    {
      external: true,
      path_url: `/user/${user.id}/account`,
      text: "Account",
    },
    {
      external: false,
      path_url: `/user/${user.id}/`,
      text: "Profile",
    },
    {
      external: true,
      path_url: `/user/${user.id}/premium`,
      text: "Upgrade to premium",
    },
  ];

  return {
    userProfileMenu,
    user,
  };
}
