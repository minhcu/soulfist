<template>
  <div class="side-bar__wrapper">
    <div class="side-bar">
      <ul class="side-bar__list">
        <li class="side-bar__item" v-for="item in navItems" :key="item.to">
          <router-link
            class="side-bar__link"
            :to="item.to"
            :class="{ isActive: currentPath === item.to }"
            active-class="isActive"
          >
            <span v-html="item.icon"></span>
            <span>
              {{ item.title }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { nav } from "@/compositionAPI/index.js";

export default {
  name: "sidebarComponent",
  setup() {
    return {
      navItems: nav.navItems,
      currentPath: nav.currentPath,
    };
  },
};
</script>

<style lang="sass">
.side-bar
    width: 96px
    padding: 0 8px
    position: sticky
    top: 74px
    &__wrapper
      display: none
    &__list
        list-style-type: none
        padding: 0
    &__link
        width: 72px
        height: 72px
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        color: #404040!important
        border-radius: 16px
        margin: auto
        margin-top: 4px
        text-decoration: none
        i
            font-size: 1.8rem
        span
            font-size: 1.1rem
            font-weight: 600
            margin-top: 6px
        &:hover
            background-color: #f5f5f5
            color: #1a1a1a
.isActive
    background-color: #e8ebed !important
    color: #1a1a1a !important

@media (min-width: 1023px)
  .side-bar
    &__wrapper
      display: block
</style>
