<template>
  <div id="home">
    <h1>HPS316: Technofossil project</h1>
    <p>This site is currently under construction.</p>
    <p>Until the buttons are wired up, you can interact with this by scrolling to the right.</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  },
  mounted: function() {
    window.addEventListener('resize', this.handleResize)
    this.$nextTick(() => {
      let payload = {
        offsetLeft:  this.$el.offsetLeft,
        offsetWidth: this.$el.offsetWidth,
        pos: 0
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
          pos: 0
        };
        this.$store.dispatch('setWidthAndPosition', payload);
      }) 
    },
  },
}
</script>

<style scoped>
#home {
  border-style: solid;
  height: 100%;
  width: 100vw;
  flex: 0 0 auto;
}
</style>
