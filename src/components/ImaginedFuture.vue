<template>
  <div id="imagined-future">
    <v-container fill-height fluid class="ma-0 pa-0">
      <v-row no-gutters style="height: 100%;">
        <!-- Part 1 space debris and the voyager -->
        <v-col cols=8>
          <v-container fill-height fluid class="grey lighten-2 ma-0 pa-0">
            <v-row no-gutters style="height: 100%">
              <!-- Part 1:A Space debris -->
              <v-col cols=3>
                <v-card tile class="imagined-future-tile">
                  <card-text
                    :heading="heading1"
                    :subheading="subheading1"
                    :body="imaginedFutureBody1"
                    :captions="imaginedFutureCaptions1"/>
                </v-card>
              </v-col>
              <!-- Part 1:A Space debris images -->
              <v-col cols=3>
                <div class="space">
                  <kinesis-container duration="8000" class="origin">
                    <v-img width="20%" class="earth" src="@/assets/imagined-future/earth.png"/> 
                    <kinesis-element 
                      :strength="-120" 
                      type="rotate"
                      >
                      <img 
                      class="debris debris1" 
                      src="@/assets/imagined-future/debris-1.png"/>
                    </kinesis-element>
                    <kinesis-element 
                      :strength="200" 
                      type="rotate"
                      >
                      <img 
                      class="debris debris2" 
                      src="@/assets/imagined-future/debris-2.png"/>
                    </kinesis-element>
                     <kinesis-element 
                      :strength="150" 
                      type="rotate"
                      >
                      <img 
                      class="debris debris3" 
                      src="@/assets/imagined-future/debris-3.png"/>
                    </kinesis-element>
                     <kinesis-element 
                      :strength="300" 
                      type="rotate"
                      >
                      <img 
                      class="debris debris4" 
                      src="@/assets/imagined-future/debris-4.png"/>
                    </kinesis-element>
 
                  </kinesis-container>
                 <!--  <div class="space-padded">
                    <v-img src="@/assets/imagined-future/earth.png"/> 
                 </div> -->
                  <div class="space-debris-star star1"></div>
                  <div class="space-debris-star star2"></div>
                  <div class="space-debris-star star3"></div>
                  <div class="space-debris-star star4"></div>
                  <div class="space-debris-star star5"></div>
                  <div class="space-debris-star star6"></div>
                  <div class="space-debris-star star7"></div>
                  <div class="space-debris-star star8"></div>
                </div>
              </v-col>

              <!-- Part 1:B Voyager -->
              <v-col cols=3>
                <v-card tile class="imagined-future-tile">
                  <card-text
                    :heading="heading2"
                    :subheading="subheading2"
                    :body="imaginedFutureBody2"
                    :captions="imaginedFutureCaptions2"/>
                </v-card>
              </v-col>
              <!-- Part 1:B Voyager images -->
              <v-col cols=3></v-col>
            </v-row>
          </v-container>
        </v-col>

        <!-- Part 2: Music -->
        <v-col cols=4 class="stroke"></v-col>
        <card-text v-show="false"/>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardText from "./CardText";
import { ImaginedFuture } from "./Texts.js";

export default {
  name: 'ImaginedFuture',
  components: {
    CardText,
  },
  props: {
  },
  data () {
    return {
      heading1: "imagined futures",
      subheading1: "exploring our space junk",
      imaginedFutureBody1: ImaginedFuture.first.body,
      imaginedFutureCaptions1: ImaginedFuture.first.captions,
      heading2: "Voyager 2",
      subheading2: "our culture flung to the stars",
      imaginedFutureBody2: ImaginedFuture.second.body,
      imaginedFutureCaptions2: ImaginedFuture.second.captions,
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
  min-width: 300vw;
}
#space-debris {
  max-height: 100vh;
  position: fixed;
}
.origin {
  position: relative;
  top: 30vh;
  height: 40vh;
}
.debris {
  position: absolute;
}
.debris1 {
  width: 3%;
  left: 10%;
}
.debris2 {
  width: 8%;
  left: 65%;
}
.debris3 {
  width: 5%;
  left: 20%;
}
.debris4 {
  width: 5%;
  left: 25%;
}
.space {
  height: 100vh;
  max-height: 100vh;
  background: #263238;
  position: relative;
}
.space-padded {
  max-height: 100vh;
  padding: 35%;
}

.earth {
  left: 35%;
  top: 5vh;
}
.stroke {
  border: 5px solid red;
}
.imagined-future-tile {
  max-height: 100%;
  height: 100%;
}

/* stars */
.space-debris-star {
  position: absolute;
  border-radius: 100%;
  z-index: 0;
}

.star1 {
  background: #dcedc8;
  width: 5px;
  height: 5px;
  left: 10%;
  top: 15%;
  opacity: 0.7;
}
.star2 {
  background: #dcedc8;
  width: 4px;
  height: 4px;
  left: 80%;
  top: 75%;
}
.star3 {
  background: #dcedc8;
  width: 2px;
  height: 2px;
  left: 30%;
  top: 55%;
}
.star4 {
  background: #dcedc8;
  width: 8px;
  height: 8px;
  left: 60%;
  top: 65%;
}
.star5 {
  background: #dcedc8;
  width: 6px;
  height: 6px;
  left: 80%;
  top: 5%;
}
.star6 {
  background: #dcedc8;
  width: 4px;
  height: 4px;
  left: 35%;
  top: 85%;
}
.star7 {
  background: #dcedc8;
  width: 9px;
  height:9px;
  left: 65%;
  top: 25%;
}
.star8 {
  background: #dcedc8;
  width: 6px;
  height: 6px;
  left: 15%;
  opacity: 0.6;
  top: 70%;
}
</style>
