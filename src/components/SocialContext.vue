<template>
  <div id="social-context">
    <v-container fill-height fluid class="grey lighten-2 ma-0 pa-0">
      <v-row no-gutters style="height: 100%">
        <!-- Part 1 -->
        <v-col cols=3>
          <v-card tile class="social-context-tile">
            <CardText
              :heading="heading1"
              :subheading="subheading1"
              :body="socialContextBody1"
              :captions="socialContextCaptions1">
            </CardText>
          </v-card>
        </v-col>
        <!-- Image part 1 -->
        <v-col cols=3 style="max-height: 100vh;" class="">
          <v-img height="100%"
                 :src="image1"></v-img>
        </v-col>
       
        <!-- Part 2 -->
        <v-col cols=3>
          <v-card tile class="social-context-tile">
            <CardText
              :heading="heading2"
              :subheading="subheading2"
              :body="socialContextBody2"
              :captions="socialContextCaptions2">
            </CardText>
          </v-card>
        </v-col>
        <!-- Image part 2 -->
        <v-col cols=3 class="social-context-slider">
          <image-slider 
            :images="slides">
          </image-slider>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardText from "./CardText";
import ImageSlider from "./ImageSlider";

import { SocialContextText } from "./Texts.js";

export default {
  name: 'SocialContext',
  components: {
    CardText,
    ImageSlider,
  },
  props: {
  },
  data: function () {
    return {
      heading1: "twentieth century",
      subheading1: "the switch to reflective mirrors",
      socialContextBody1: SocialContextText.first.body,
      socialContextCaptions1: SocialContextText.first.captions,
      image1: require("@/assets/social-context/scientists.jpg"),
      heading2: "aluminum production",
      subheading2: "the search for bauxite",
      socialContextBody2: SocialContextText.second.body,
      socialContextCaptions2: SocialContextText.second.captions,
      slides: SocialContextText.second.images,
    }
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
  min-width: 200vw;
}
.stroke {
  border: 5px solid red;
}
.social-context-tile {
  max-height: 100%;
  height: 100%;
}
.social-context-slider {
  max-height: 100vh;
  height: 100vh;
}
</style>
