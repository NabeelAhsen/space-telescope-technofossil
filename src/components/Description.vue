<template>
  <div id="description">
    <v-container fill-height fluid class="grey lighten-5 ma-0 pa-0">
      <v-row no-gutters style="height: 100%">
        <v-col
          sm="4">
          <v-card tile class="description-tile">
            <!-- Card text 
            <v-container>
              <v-row>
              <v-col sm="12">
                <h1 class="text-right">SPACE TELESCOPES</h1>
                <h3 class="text-right amber--text text-uppercase text--darken-2">
                  What they do and how they work  
                </h3>
                <hr>
              </v-col>
              </v-row>
              <v-row class="mt-5">
                <v-spacer></v-spacer>
                <v-col sm="5" class="description-text">
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla feugiat arcu a tincidunt rutrum. In varius odio massa,
                  in ullamcorper velit iaculis vitae. Pellentesque egestas nisi
                  ante, nec lacinia sem pretium a. Fusce metus leo, tempus in
                  luctus vitae, euismod nec lectus. Etiam vitae vestibulum
                  lectus. Pellentesque vitae hendrerit lacus, ac euismod sem.
                  Cras pharetra odio est, ac euismod nibh posuere nec. Nulla
                  pulvinar massa nec tincidunt pulvinar. Nullam cursus ex
                  a elit molestie, ut rutrum lectus venenatis.

                  Sed aliquet ipsum lorem, nec ullamcorper tellus convallis
                  non. Aliquam id ultrices ex. Donec commodo euismod nulla at
                  feugiat. Morbi ut fringilla felis. Mauris non suscipit magna.
                  Sed eu arcu convallis massa rutrum molestie vel eu dolor.
                  Morbi ultricies elit ornare blandit mollis. Integer sit amet
                  leo finibus, maximus enim id, bibendum ligula. Aenean neque
                  elit, volutpat at orci eget, rutrum tincidunt metus. Maecenas
                  auctor varius quam vitae condimentum.

                  Nullam pellentesque convallis nisl nec pharetra. Nunc id
                  libero sit amet urna porttitor scelerisque vehicula elementum
                  massa. Integer ornare velit risus, ut commodo dui imperdiet
                  porttitor. Etiam id leo eu nulla volutpat malesuada. Mauris
                  pharetra eu urna a porta. Nullam vel tortor sit amet urna
                  volutpat faucibus. Proin ultricies mauris dui, ac pretium
                  nisi faucibus vel. Nullam non urna leo.
                  </p>
                </v-col>
              </v-row>

            </v-container> -->
            <CardText
              :heading="heading"
              :subheading="subheading"
            />
          </v-card>
        </v-col>
        <v-col sm="8" class="description-img stroke">
          <v-img max-height="100%" src="http://placekitten.com/500/500"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardText from "./CardText";

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
  min-width: 150vw;
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
