<script setup>
  import floatieBar from './floatieBar.vue'
  import Button from 'primevue/button'
</script>

<template>
  <floatieBar></floatieBar>
  <div>
    <h1 style="font-size: 4rem">Breaking <span style="color: var(--odysen-mint)">the rules</span> of Android.</h1>
    <div style="display: flex; gap: 1rem; justify-content: center;" id="cover">
      <Button label="Discover Odysen" severity="secondary"/>
      <Button label="Watch the trailer"/>
    </div>
  </div>
</template>