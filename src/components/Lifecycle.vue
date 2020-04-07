<template>
  <div id="lifecycle">
    <v-container fill-height fluid class="grey lighten-2 ma-0 pa-0">
      <v-row no-gutters style="heigh: 100%">
        <v-col cols=4>
          <v-card tile class="lifecycle-tile">
            <CardText
              :heading="heading"
              :subheading="subheading"
              :body="lifecycleBody"
              :captions="lifecycleCaptions">
            </CardText>
          </v-card>
        </v-col>
        <v-col cols=8 class="lifecycle-img">
          <v-img max-height="100%"
                 src="http://placekitten.com/150/200"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardText from "./CardText";
import { Lifecycle } from "./Texts.js";

export default {
  name: 'Lifecycle',
  props: {
  },
  components: {
    CardText,
  },
  data: function () {
    return {
      heading: "leaving earth",
      subheading: "telescopes and their uses",
      lifecycleBody: Lifecycle.body,
      lifecycleCaptions: Lifecycle.captions,
    }
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
  min-width: 100vw;
}
.stroke {
  border: 5px solid red;
}
.lifecycle-tile {
  max-height: 100%;
  height: 100%;
}
</style>
