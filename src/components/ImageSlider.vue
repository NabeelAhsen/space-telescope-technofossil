<template>
  <div id="image-slider-wrapper">
    <transition-group name='fade' tag='div'>
      <div
        class="img-wrapper"
        v-for="number in [currentNumber]"
        :key='number'>
       <v-img
          class="image-slider-img"
          :src="currentImage"
          v-on:mouseover="stopRotation"
          v-on:mouseout="startRotation"/>
        <div class="image-slider-description-box pa-2">
          <span
            class="amber--text font-weight-bold text--darken-3
            text-uppercase">
            {{ currentTitle }}
          </span>
          <p class="white--text">{{ currentDescription }}</p>
        </div>
     </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  props: ['images'],
  data: function () {
    return {
      currentNumber: 0,
      timer: null,
    }
  },
  mounted: function () {
    this.startRotation();
  },
  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 3500);
    },
    stopRotation: function () {
      clearTimeout(this.timer);
      this.timer = null;
    },
    next: function () {
      this.currentNumber += 1;
    },
    prev: function () {
      this.currentNumber -= 1;
    },
  },
  computed: {
    currentImage: function () {
      return this.images[Math.abs(this.currentNumber) % this.images.length].src;
    },
    currentTitle: function () {
      return this.images[Math.abs(this.currentNumber)
        % this.images.length].title;
    },
    currentDescription: function () {
      return this.images[Math.abs(this.currentNumber)
        % this.images.length].description;
    },
  },
}
</script>

<style scoped>
#image-slider-wrapper {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
}
.image-slider-img {
  width: 100%;
  max-height: 90vh;
  z-index: 1;
}
.img-wrapper {
  width: 100%;
  height: inherit;;
}
.stroke {
  border: 5px solid red;
}
.image-slider-description-box {
  max-height: 10vh;
  height: 10vh;
  background: black;
  font-size: 0.6rem;
}
</style>
