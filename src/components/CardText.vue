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

      <v-col cols=5 sm=4></v-col>
      <v-col cols=5 sm=7>
        <hr>
      </v-col>
      <v-col cols=2 sm=1></v-col>
    </v-row>

    <!-- Body -->
    <v-row no-gutters class="pt-5 stroke">
      <v-spacer/>
      <v-col cols=4 sm=5>
        <p>
          {{ body }}
        </p>
      </v-col>
      <v-col cols=2 sm=1></v-col>
    </v-row>

    <!-- Footers -->
    <v-row class="stroke"></v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CardText',
  props: {
    heading: String,
    subheading: String,
    body: String,
  },
}
</script>

<style scoped>
.card-body-text {
  overflow: auto;
  max-height: 50vh;
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
}
.stroke {
  border: 3px solid red;
}
</style>
