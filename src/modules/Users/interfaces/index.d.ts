export interface User {
  id: string;
  name: string;
  avatar: string;
  is_premium: boolean;
}

export interface UserProfileMenu {
  path_url: string;
  external: boolean;
  text: string;
}
