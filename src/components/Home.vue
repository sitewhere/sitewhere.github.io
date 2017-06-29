<template>
  <v-app id="sitewhere">
    <v-toolbar class="white black--text" light>
      <v-btn @click.native="document.window.open('http://www.sitewhere.org', '_blank')" outline>
        <v-icon class="pr-1">language</v-icon>
        Community Website
      </v-btn>
      <v-btn outline>
        <i class="fa fa-github pr-1" aria-hidden="true"></i>
        GitHub Repository
      </v-btn>
    </v-toolbar>
    <main>
      <v-card class="fingerpoint">
        <v-layout column align-center justify-center>
          <img class="pt-5" src="../assets/sitewhere.png">
        </v-layout>
      </v-card>
      <v-layout row wrap>
        <v-flex xs12>
          <v-container>
            <v-card flat>
              <v-card-text>
              </v-card-text>
            </v-card>
          </v-container>
        </v-flex>
      </v-layout>
    </main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>

<style scoped>
.fingerpoint {
  background-image: url('/static/images/fingerpoint.jpg');
  background-position: 50% 50%;
  width: 100%;
}
</style>
