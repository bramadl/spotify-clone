import { ref, computed } from "vue";

const activeColor = ref<string>("rgb(180, 180, 180)");
const backgroundColor = computed<string>(() => {
  return `background-color: ${activeColor.value}`;
});

export function useColor() {
  function setActiveColor(color: string) {
    activeColor.value = color;
  }

  return {
    activeColor,
    backgroundColor,
    setActiveColor,
  };
}
