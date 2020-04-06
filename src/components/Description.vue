<template>
  <div id="description">
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
  },
  mounted: function() {
    window.addEventListener('resize', this.handleResize);
    this.$nextTick(() => {
      let payload = {
        offsetLeft:  this.$el.offsetLeft,
        offsetWidth: this.$el.offsetWidth,
        pos: 1
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
          pos: 1
        };
        this.$store.dispatch('setWidthAndPosition', payload);
      }) 
    },
  },

}
</script>

<style scoped>
#description {
  border: 5px solid green;
  min-width: 100vw;
}
</style>
