<template>
  <div id="social-context">
    SocialContext
  </div>
</template>

<script>
export default {
  name: 'SocialContext',
  props: {
  },
  mounted: function() {
    window.addEventListener('resize', this.handleResize);
    this.$nextTick(() => {
      let payload = {
        offsetLeft:  this.$el.offsetLeft,
        offsetWidth: this.$el.offsetWidth,
        pos: 2
      };
      this.$store.dispatch('setWidthAndPosition', payload);
    })
  },
  methods: {
    handleResize: function () {
      this.$nextTick(() => {
        let payload = {
          offsetLeft:  this.$el.offsetLeft,
          offsetWidth: this.$el.offsetWidth,
          pos: 2
        };
        this.$store.dispatch('setWidthAndPosition', payload);
      }) 
    },
  },
}
</script>

<style scoped>
#social-context {
  border: 5px solid red;
  min-width: 100vw;
}
</style>
