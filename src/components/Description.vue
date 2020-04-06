<template>
  <div id="description">
    <v-container fill-height fluid class="grey lighten-5 ma-0 pa-0">
      <v-row no-gutters style="height: 100%">
        <v-col cols=4>
          <v-card tile class="description-tile">
           <CardText
              :heading="heading"
              :subheading="subheading"
              :body="descriptionBody"
              :captions="captionList"
            />
          </v-card>
        </v-col>
        <v-col cols=8 class="description-img">
          <v-img max-height="100%" src="http://placekitten.com/150/200"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardText from "./CardText";
const { DescriptionText } = require( "./Texts.js");

export default {
  name: 'Description',
  components: {
    CardText,
  },
  props: {
  },
  data: function () {
    return {
      heading: "space telescopes",
      subheading: "what they do and how they work",
      descriptionBody: DescriptionText.body,
      captionList: DescriptionText.captions,
    }
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
  min-width: 110vw;
  background: grey;
}
.description-tile {
  max-height: 100%;
  height: 100%;
}
.description-img {
  max-height: 100vh;
}
.description-text {
  overflow: auto;
  max-height: 50vh;
}
hr {
  width: 50%;
  border: 1px solid;
}
h1 {
  line-height: 0.8;
  font-family: 'DM Serif Display', cursive;
  font-size: 5rem;
}
h3 {
  line-height: 3;
  font-weight: 300;
}
p {
}
.stroke {
  border: 3px solid red;
}
</style>
