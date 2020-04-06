<template>
  <div id="lifecycle">
    Lifecycle
  </div>
</template>

<script>
export default {
  name: 'Lifecycle',
  props: {
  },
  mounted: function() {
    window.addEventListener('resize', this.handleResize)
    this.$nextTick(() => {
      let payload = {
        offsetLeft:  this.$el.offsetLeft,
        offsetWidth: this.$el.offsetWidth,
        pos: 3
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
          pos: 3
        };
        this.$store.dispatch('setWidthAndPosition', payload);
      }) 
    },
  },
}
</script>

<style scoped>
#lifecycle {
  border: 5px solid red;
  min-width: 100vw;
}
</style>
