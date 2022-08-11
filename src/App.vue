<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import defaultLayout from "@/layouts/defaultLayout.vue";

export default {
  components: {
    defaultLayout,
  },
  computed: {
    layout() {
      const routeLayout = this.$route.meta.layout;
      return routeLayout === "blogLayout" ? "blogLayout" : "defaultLayout";
    },
  },
};
</script>

<style></style>
