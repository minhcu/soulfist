<template>
  <div class="card">
    <div class="card__header">
      <div>
        <h2 class="card__heading">
          <router-link :to="card.slug"> {{ card.title }} </router-link>
        </h2>
        <p class="card__desc">
          {{ card.desc }}
        </p>
        <p class="card__desc">TLDR: {{ card.tldr }}</p>
      </div>
      <div class="card__thumb-contain">
        <router-link class="card__thumb-wrap" :to="card.slug">
          <img
            class="card__thumb"
            :src="require(`@/assets/img/engraving/${card.thumb}`)"
            :alt="card.title"
          />
        </router-link>
      </div>
    </div>
    <div class="card__body"></div>
    <div>
      <router-link class="btn btn__primary" :to="card.slug">
        See more
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardItem",
  props: {
    card: Object,
  },
};
</script>

<style lang="sass">
.card
    border: 2px solid #e8e8e8
    border-radius: 16px
    display: flex
    flex-direction: column
    padding: 24px
    width: 500px
    margin-bottom: 20px
    &__header
        display: flex
        margin-bottom: 20px
    &__heading
        margin: 0
        a
            color: #242424
            display: block
            font-size: 2rem
            font-weight: 900
            padding-bottom: 14px
    &__desc
        margin: 0
        font-size: 1.4rem
    &__thumb-contain
        padding-left: 24px
    &__thumb-wrap
        width: 90px
        height: 90px
        display: flex
        align-items: center
        justify-content: center
        overflow: hidden
        border: 5px solid var(--primary-color)
        border-radius: 50%
    &__thumb
        width: 70px
        height: 70px
        border-radius: 50%
@media (min-width: 1023px)
  .card
    &:nth-child(2n)
        margin-left: 24px
</style>
