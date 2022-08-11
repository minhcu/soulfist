<template>
  <div class="home">
    <slide-show />
    <p class="noti">Nothing is here yet</p>
  </div>
</template>

<script>
// @ is an alias to /src
import slideShow from "@/components/slideShow.vue";

export default {
  name: "HomeView",
  components: {
    slideShow,
  },
};
</script>

<style lang="sass">
.noti
  height: 300px
  line-height: 300px
  font-size: 30px
  text-align: center
  color: grey
</style>
