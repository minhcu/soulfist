<template>
  <!-- No slide yet -->
  <div class="slide">
    <div class="slide__wrapper" ref="slideWrapper">
      <div class="slide__btn slide--prev" @click="moveToSlide('next')">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="slide__list">
        <div class="slide__track" ref="slideTrack">
          <div data-index="0" class="wrap">
            <div class="slide__item eo">
              <div class="slide__item--left">
                <h2 class="slide__heading">Energy Overflow</h2>
                <p class="slide__desc">
                  Extremely fast-paced game play involves dynamic rotation and
                  proper Hype management
                </p>
                <div>
                  <router-link to="/blog/eo" class="slide__cta"
                    >See more</router-link
                  >
                </div>
              </div>
              <div class="slide__item--right">
                <img src="@/assets/img/engraving/energy-overflow.webp" alt="" />
              </div>
            </div>
          </div>
          <div data-index="1" class="wrap">
            <div class="slide__item rs">
              <div class="slide__item--left">
                <h2 class="slide__heading">Robust Spirit</h2>
                <p class="slide__desc">
                  Heavily focus on Specialization, Robust Spirit focus on slow
                  gameplay with static cycle DPS rotation
                </p>
                <div>
                  <router-link to="/blog/rs" class="slide__cta"
                    >See more</router-link
                  >
                </div>
              </div>
              <div class="slide__item--right">
                <img
                  src="@/assets/img/engraving/robust-spirit.webp"
                  alt="Robust Spirit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide__btn slide--next" @click="moveToSlide('')">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
function handleTimer(fn, ms) {
  let setTimer = setInterval(fn, ms);

  this.start = function () {
    if (!setTimer) {
      setTimer = setInterval(fn, ms);
    }
    return this;
  };

  this.stop = function () {
    if (setTimer) {
      clearInterval(setTimer);
      setTimer = null;
    }
    return this;
  };

  this.reset = function (newT = ms) {
    ms = newT;
    return this.stop().start();
  };
}

export default {
  name: "slideShow",
  data() {
    return {
      Timer: {},
      counter: 0,
      slideTrack: {},
      slideItemList: [],
      slideWidth: 0,
      slideTime: 6000,
    };
  },
  methods: {
    handleSlideWidth(slideTrack, slideItemList, slideWidth) {
      slideTrack.style.width = `${slideItemList.length * slideWidth}px`;
      Array.from(slideItemList).forEach(
        (item) => (item.style.width = `${slideWidth}px`)
      );
    },
    handleSlideAnimation(index, slideTrack, slideWidth) {
      const width = slideWidth * index;
      slideTrack.style.transform = `translate3d(-${width}px, 0px, 0px)`;
    },
    moveToSlide(action) {
      this.Timer.stop();
      if (action === "next") {
        this.counter++;
      } else {
        this.counter--;
      }
      this.handleSlideAnimation(this.index, this.slideTrack, this.slideWidth);
      this.Timer.start();
    },
    windowResize() {
      const num = this.$refs.slideWrapper.clientWidth;
      this.slideWidth = num;
      this.handleSlideWidth(
        this.slideTrack,
        this.slideItemList,
        this.slideWidth
      );
    },
  },
  computed: {
    index() {
      return Math.abs(this.counter % 2);
    },
  },
  created() {
    window.addEventListener("resize", this.windowResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.windowResize);
  },
  mounted() {
    this.slideTrack = this.$refs.slideTrack;
    this.slideItemList = this.$refs.slideTrack.children;
    this.slideWidth = this.$refs.slideWrapper.clientWidth;
    this.handleSlideWidth(this.slideTrack, this.slideItemList, this.slideWidth);
    const _this = this;
    this.Timer = new handleTimer(function () {
      _this.counter++;
      _this.handleSlideAnimation(
        _this.index,
        _this.slideTrack,
        _this.slideWidth
      );
    }, this.slideTime);
  },
};
</script>

<style lang="sass">
.slide
    margin-top: 18px
    &__wrapper
        min-height: 270px
        position: relative
    &__btn
        background-color: #fff
        border-radius: 50%
        box-shadow: 0 3px 6px rgb(0 0 0 / 16%)
        color: #4b4b4b
        cursor: pointer
        font-size: 1.2rem
        height: 32px
        line-height: 32px
        position: absolute
        text-align: center
        top: 50%
        width: 32px
        z-index: 1
    &--prev
        left: 0
        -webkit-transform: translate(-50%,-50%)
        transform: translate(-50%,-50%)
    &--next
        right: 0
        -webkit-transform: translate(50%,-50%)
        transform: translate(50%,-50%)
    &__list
        display: block
        overflow: hidden
        position: relative
        margin: 0
        padding: 0
    &__track
      display: block
      top: 0
      left: 0
      margin-left: auto
      margin-right: auto
      position: relative
      transition: transform .8s ease
      &::before, &::after
        content: ""
        display: table
      &::after
        clear: both
    &__item
        display: flex
        border-radius: 16px
        height: 270px
        overflow: hidden
        &--left
            color: #fff
            display: flex
            flex-direction: column
            flex-shrink: 0
            font-size: 1.6rem
            justify-content: center
            line-height: 1.6
            max-width: 100%
            padding: 0 36px 36px
            width: 640px
        &--right
          display: flex
          justify-content: center
          align-items: center
          width: 100%
          img
            height: 100px
            object-fit: cover
    &__heading
        margin-top: 20px
        margin-bottom: 8px
    &__cta
        border: 2px solid #fff
        border-radius: 16px
        color: #fff
        display: inline-block
        font-size: 1.4rem
        font-weight: 700
        min-width: 124px
        padding: 4px 10px
        text-align: center
        transition: .2s ease
        &:hover
            background-color: #fff

.wrap
  float: left
  height: 100%
  display: block

.eo
  background: linear-gradient(to right, rgb(0, 126, 254), rgb(6, 195, 254))
  .slide__cta
    &:hover
      color: #007efe
.rs
  background: linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2))
  .slide__cta
    &:hover
      color: #fe215e
</style>
