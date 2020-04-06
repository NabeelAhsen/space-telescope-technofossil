<template>
  <v-container fluid id="card-text">
    <!-- Heading -->
    <v-row no-gutters>
      <v-col cols=10 sm=11>
        <h1 class="text-right">
          {{ heading }}
        </h1>
        <h3 
          class="mt-3 text-right text-uppercase amber--text text--darken-2">
          {{ subheading }}
        </h3>
      </v-col>
      <v-col cols=2 sm=1></v-col>

      <v-col cols=5></v-col>
      <v-col cols=5 sm=6>
        <hr>
      </v-col>
      <v-col cols=2 sm=1></v-col>
    </v-row>

    <!-- Body -->
    <v-row no-gutters class="pt-5">
      <v-spacer/>
      <v-col cols=4 sm=5 class="card-body-text">
        <p>
          {{ body }}
        </p>
      </v-col>
      <v-col cols=2 sm=1></v-col>
    </v-row>

    <!-- Footers -->
    <v-row no-gutters class="pt-2 captions">
      <v-spacer/>
      <v-col cols=4 sm=5>
        <hr style="border: 0.7px dotted">
        <div class="card-caption pt-2" v-for="item in captions" v-bind:key="item.heading">
          <span 
            class="amber--text font-weight-bold text--darken-3 text-uppercase">
            {{ item.heading }}
          </span><br>
          <span class="card-caption-text">{{ item.body }}</span><br>
          <span class="font-italic font-weight-bold">{{ item.cite }}</span>
        </div>
      </v-col>
      <v-col cols=2 sm=1></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CardText',
  props: ['heading', 'subheading', 'body', 'captions'],
  data: function () {
    return {
    }
  },
}
</script>

<style scoped>
.card-body-text {
  overflow: auto;
  max-height: 40vh;
}
.card-caption {
  font-size: 0.6rem;
}
.captions {
  max-height: 20vh;
  overflow: auto;
}
hr {
  border: 1px solid;
}
h1 {
  line-height: 0.76;
  font-family: 'DM Serif Display', cursive;
  font-size: 5rem;
}
h3 {
  line-height: 3;
  font-weight: 300;
}
p {
  font-size: 0.8rem;
}
.stroke {
  border: 3px solid red;
}
</style>
