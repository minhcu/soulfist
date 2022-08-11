import { ref, computed } from "vue";
import { useRoute } from "vue-router";

export const nav = {
  navItems: ref([
    { title: "Home", icon: '<i class="fa-solid fa-house"></i>', to: "/" },
    {
      title: "Blog",
      icon: '<i class="fa-solid fa-lightbulb"></i>',
      to: "/blog",
    },
  ]),
  currentPath: computed(() => "/" + useRoute().meta.parentRoute),
};
