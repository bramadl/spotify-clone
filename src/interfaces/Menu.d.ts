import type { ConcreteComponent } from "vue";

export interface Menu {
  path_url: string;
  icon: ConcreteComponent;
  text: string;
}
