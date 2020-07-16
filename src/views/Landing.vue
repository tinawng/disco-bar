<template>
  <v-row
    class="fit-parent"
    align="center"
    justify="center"
    no-gutters
  >
    <v-col cols="4" lg="4" xl="2">
      <img class="mb-3" height="180" :src="'./assets/images/cocktail.svg'" style="margin-right: 26px"/>
      <p class="mb-8 display-2 font-italic font-weight-thin">DISCO BAR</p>
      <v-btn class="my-7" block rounded dark large elevation="2"> use external ressource folder</v-btn>
      <v-btn class="my-7" block rounded dark large elevation="2"> use internal ressources</v-btn>
      <!-- <v-text-field prepend-inner-icon="mdi-account" rounded single-line solo></v-text-field>
      <v-text-field prepend-inner-icon="mdi-lock" type="password" rounded single-line solo></v-text-field> -->
      <div class="text-right">
        <v-btn class="mx-2" fab dark elevation="2" to="/discobar">
          <v-icon dark large>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
</style>
