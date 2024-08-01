<script setup>
  import stillDev from './components/stillDev.vue'
  import Button from 'primevue/button'
</script>

<template>
  <div>
    <h1 style="font-size: 4rem">Tagline <span style="color: var(--odysen-accent)">under construction :3</span></h1>
    <div style="display: flex; gap: 1rem; justify-content: center;" id="cover">
      <Button label="Discover Odysen" severity="secondary"/>
      <Button label="Watch the trailer"/>
    </div>
  </div>
  <!-- <Button>hi i got primevue to work</Button> -->
</template>