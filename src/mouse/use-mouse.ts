import { ref, onMounted, onUnmounted, isVue2, isVue3 } from "vue-demi";
console.log(isVue2);

export function useMouse() {
  const x = ref(0);
  const y = ref(0);

  const update = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
    console.log(x.value, y.value);
  };

  onMounted(() => {
    if (isVue2) {
      console.info("isVue2");
    }
    if (isVue3) {
      console.info("isVue3");
    }
    window.addEventListener("mousemove", update);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", update);
  });

  return {
    x,
    y,
  };
}
