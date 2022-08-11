<template>
  <component :is="component" class="component"></component>
</template>

<script>
import eo from "@/posts/eo.md";
import rs from "@/posts/rs.md";

export default {
  components: {
    eo,
    rs,
  },
  computed: {
    component() {
      return this.$route.params.id;
    },
  },
};
</script>

<style></style>
