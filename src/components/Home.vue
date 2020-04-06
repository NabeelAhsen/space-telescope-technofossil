<template>
  <div id="home">
    <!-- Earth background -->
    <kinesis-container 
      duration=15000
      class="pa-0 ma-0">
      <kinesis-element 
        axis="y"
        :strength="80">
        <div>
        <img class="bg-earth" src="@/assets/home/bg-earth.png">
        </div>
      </kinesis-element>
    </kinesis-container>

    <!-- Hubble telescope -->
    <kinesis-container class="hst">
      <!-- background -->
      <kinesis-element :strength="10" maxX=20 maxY=20>
        <img class="hst-item" src="@/assets/home/hst-3.png">
      </kinesis-element>

      <!-- midground -->
      <kinesis-element :strength="20" maxX=35 maxY=30>
        <img class="hst-item" src="@/assets/home/hst-2.png">
      </kinesis-element>

      <!-- foreground -->
      <kinesis-element :strength="30" maxX=50 maxY=50>
        <img class="hst-item" src="@/assets/home/hst-1.png">
      </kinesis-element>

    </kinesis-container>

    <!-- Body of text -->
    <v-container class="home-title ma-0">
      <h1>Resting our Eyes in the Skies</h1>
      <h2>HPS316: Technofossil Project</h2>
      <p>You can navigate using the directional buttons, by scrolling, or
      by using your left and right keys.</p>
    </v-container>
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
.stroke {
  border: 5px solid red;
}
#home {
  background: linear-gradient(180deg, rgba(0,0,0,1) 75%, rgba(30,40,50,1) 100%);
  min-width: 105vw;
  color: white;
}
.home-title {
  position: relative;
  top: 10vh;
  padding-left: 3vw;
  z-index: 2;
}
h1 {
  font-family: 'DM Serif Display', cursive;
  color: #ffc107;
  font-weight: 300;
  font-size: 1.6em;
}
h2 {
  font-weight: 300;
  font-size: 1.2em;
}
p {
  font-weight: 500;
  font-size: 1em;
}
.bg-earth {
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  width: 100%;
  z-index: -1;
  margin-top: -50vh;
}
.contained {
  max-width: 100%;
}
.hst {
  position: relative;
  top: -25%;
  left: 50%;
  max-height: 300px;
  max-width: 300px;
  width: 10px;
}
.hst-item {
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  max-width: 30vw;
  position: fixed;
  left: -10%;
  top: -9%;
}
.unclickable {
  pointer-events: none;
}

/* --- Ipads and stuff -- */
@media screen
and (min-width: 768px) 
and (max-width: 1200px) 
and (min-height: 500px) {
  .bg-earth {
    margin-top: -5vh;
  }
  .home-title {
    top: 40vh;
  }
}

/* --- Laptops --- */
@media screen
and (min-width: 1200px)
and (max-width: 1600px)
and (min-height: 800px) {
  .bg-earth {
    margin-top: -10vh;
  }
  .hst {
    top: -10%;
  }
  .home-title {
    top: 40vh;
  }
}

@media screen
and (min-width: 1600px) {
  .bg-earth {
    margin-top: -10vh;
  }
}
</style>
