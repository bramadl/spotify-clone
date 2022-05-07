import { ref } from "vue";

const activeColor = ref<string>("rgb(180, 180, 180)");

export function useColor() {
  function setActiveColor(color: string) {
    activeColor.value = color;
  }

  return {
    activeColor,
    setActiveColor,
  };
}
