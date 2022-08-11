<template>
  <div class="navbar__wrapper">
    <div class="navbar__logo">
      <router-link class="navbar__logo__link" to="/">
        <img
          class="navbar__logo__img"
          src="@/assets/logo.webp"
          alt="soulfist guide"
        />
      </router-link>
      <h4 class="navbar__logo__heading">Soulfist Guide</h4>
    </div>
    <div class="navbar__mobile" @click="isShow = true">
      <i class="fa-solid fa-bars"></i>
    </div>
    <div class="navbar__body">
      <div class="search__wrapper">
        <i class="search__icon fa-solid fa-magnifying-glass"></i>
        <input
          class="search__input"
          type="text"
          placeholder="Search something..."
          value
        />
      </div>
    </div>
    <div class="navbar__action">
      <router-link class="search__mobile" to="/search">
        <i class="search__icon fa-solid fa-magnifying-glass"></i>
      </router-link>
      <a
        class="navbar__action__link"
        href="https://discord.gg/lostark"
        rel="nofollow noopener"
        target="__blank"
      >
        <i class="fa-brands fa-discord"></i>
      </a>
    </div>
    <mobile-nav
      v-show="isShow"
      @toggleMobileNav="isShow = !isShow"
      :showChild="isShow"
    />
  </div>
</template>

<script>
import MobileNav from "../mobileNav.vue";
export default {
  name: "headerComponent",
  components: { MobileNav },
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style lang="sass">
.navbar
  &__wrapper
    z-index: 999
    position: sticky
    right: 0
    top: 0
    height: 66px
    display: flex
    padding: 0 16px
    background-color: #fff
    border-bottom: 1px solid #e8ebed
    font-size: 1.4rem
  &__action, &__mobile
    display: flex
  &__logo, &__body, &__action, &__mobile
    align-items: center
    flex: 1 1
  &__logo
    display: none
    &__img
      width: 38px
      height: 38px
    &__heading
      margin-left: 16px
      font-weight: 700
  &__body
    justify-content: center
    display: none
    input
      outline: none
      padding: 0 4px
      border: none
  &__action
    justify-content: end
    font-size: 1.8rem
    &__link
      color: #5865F2!important
      cursor: pointer
      padding: 8px 12px
  &__mobile
    font-size: 2rem
    flex: 1 1
    margin-right: 32px
    padding: 8px 0

.search
  &__wrapper
    display: flex
    justify-content: center
    align-items: center
    flex: 1 1
    height: 40px
    width: 420px
    padding-left: 8px
    padding-right: 16px
    border: 2px solid #e8e8e8
    border-radius: 20px
    transition: all .2s ease-in-out
    &:focus-within
      border-color: #444
  &__input
    flex: 1
    height: 100%
  &__icon
    font-size: 1.8rem
    padding: 0 3px
  &__mobile
    color: #707070
    padding: 8px 12px

@media (min-width: 739px)
  .navbar
    &__wrapper
      padding: 0 28px
    &__body
      display: flex
  .search
    &__mobile
      display: none

@media (min-width: 1023px)
  .navbar
    &__mobile
      display: none
    &__logo
      display: flex
</style>
