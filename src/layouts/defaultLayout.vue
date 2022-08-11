<template>
  <div>
    <header-component />
    <div class="body">
      <sidebar-component />
      <div class="content">
        <slot />
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>
import headerComponent from "@/components/layout/headerComponent.vue";
import footerComponent from "@/components/layout/footerComponent.vue";
import sidebarComponent from "@/components/layout/sidebarComponent.vue";
export default {
  name: "defaultLayout",
  components: { headerComponent, footerComponent, sidebarComponent },
};
</script>

<style lang="sass">
.body
  display: flex
  min-height: 100vh
.content
  flex: 1 1
  padding: 0 16px
  max-width: 100%
@media (min-width: 1023px)
  .content
    padding-left: 20px
    padding-right: 40px
    max-width: calc(100% - 96px)
</style>
