<script setup>
import floatieBar from './floatieBar.vue'
import Button from 'primevue/button'
import discordCard from './discordCard.vue'
import patreonCard from './patreonCard.vue'
import blogCard from './blogCard.vue'
import wikiCard from './wikiCard.vue'
import Card from 'primevue/card'
</script>

<template>
  <floatieBar></floatieBar>
  <div class="homepageSection">
    <h1 style="font-size: 4rem">Breaking <span class="homepageHighlight">the rules</span> of normality.</h1>
    <div style="display: flex; gap: 1rem; justify-content: center;" id="cover">
      <Button as="a" label="Discover Odysen" href="#discover" severity="secondary" />
      <Button label="Watch the trailer" />
    </div>
  </div>
  <div>
    <p id="discover"><br><br><br></p>
    <! -- this br stuff is CRAZY but eh, we'll figure it out -->
      <h1> What is all this about? </h1>
      <div style="display: flex; gap: 5rem; justify-content: center;">
        <img src="../assets/mockups/TextLockscreen.png" width="20%">
        <div>
          <h2> Odysen is an experience. </h2>
          <p>
            To put it simply, we're yet to write this part :shrug: <br>
            sorry, i need to work on layouts first
          </p>
        </div>
      </div>
  </div>

  <section class="cards-section">
    <discordCard />

    <div class="cards-wrapper">
      <patreonCard />
      <blogCard />
      <wikiCard />
    </div>

  </section>

</template>