<template>
  <div v-if="isChild" class="blog component">
    <introduction class="intro" />
    <div class="wrapper">
      <card-item v-for="card in cards" :key="card.slug" :card="card" />
    </div>
  </div>
  <router-view v-else></router-view>
</template>

<script>
import introduction from "@/posts/introduction.md";
import CardItem from "@/components/cardItem.vue";
export default {
  name: "BlogView",
  components: {
    introduction,
    CardItem,
  },
  data() {
    return {
      cards: [
        {
          title: "Energy Overflow",
          thumb: "energy-overflow.webp",
          desc: "Extremely fast-paced game play involves dynamic rotation and proper Hype management and sometimes cooldown alignment for optimal DPS.",
          tldr: "Zoom zoom",
          slug: "/blog/eo",
        },
        {
          title: "Robust Spirit",
          thumb: "robust-spirit.webp",
          desc: "Robust Spirit focus on slow gameplay with static cycle DPS rotation and heavily focus on Specialization.",
          tldr: "Real slow",
          slug: "/blog/rs",
        },
      ],
    };
  },
  computed: {
    isChild() {
      return this.$route.params.id === "";
    },
  },
};
</script>

<style lang="sass">
.intro
    margin-bottom: 80px
.wrapper
    display: flex
    flex-wrap: wrap
    justify-content: center
    margin-bottom: 50px
</style>
