<template>
  <div id="imagined-future">
    Imagined Future
  </div>
</template>

<script>
export default {
  name: 'ImaginedFuture',
  props: {
  },
  data () {
    return {
    }
  },
  mounted: function() {
    window.addEventListener('resize', this.handleResize);
    this.$nextTick(() => {
      let payload = {
        offsetLeft:  this.$el.offsetLeft,
        offsetWidth: this.$el.offsetWidth,
        pos: 4
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
          pos: 4
        };
        this.$store.dispatch('setWidthAndPosition', payload);
      }) 
    },
  },
}
</script>

<style scoped>
#imagined-future {
  border-style: solid;
  height: 100%;
  width: 120vw;
  flex: 0 0 auto;
}
</style>
