<template>
  <page-begin
    beginTitle="I’ve spoken at events all around the world and been interviewed for many
        podcasts."
    beginDesc="One of my favorite ways to share my ideas is live on stage, where there’s
        so much more communication bandwidth than there is in writing, and I love
        podcast interviews because they give me the opportunity to answer
        questions instead of just present my opinions."
  />
  <div class="mt-16 space-y-16">
    <conferences/>
    <podcasts/>
  </div>
</template>

  <script lang="ts" setup>
import Conferences from "./Conferences.vue";
import Podcasts from "./Podcasts.vue";
</script>