<template>
    <a href="https://odysen.space/discord" class="smallCard">
        <img width="60" src="../assets/logo.png" alt="Odysen Logo">

        <p class="text">
            Join the Odysen Discord server
        </p>
    </a>
</template>

<script lang="ts">
import { defineComponent, defineProps} from 'vue';

export default defineComponent({
    name: 'discordCard',
});

</script>

<style>
.smallCard {
    background-color: white;
    color: black;
    border-radius: 200px;
    display: flex;
    align-items: center;
    padding: 0 1rem 0 1rem;
    transition: box-shadow 0.3s ease-in-out;
}

.smallCard:hover {
    box-shadow: 0 0 0 3px var(--odysen-mint);
}
</style>