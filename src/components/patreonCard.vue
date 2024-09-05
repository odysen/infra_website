<script setup>
import Button from 'primevue/button'

</script>

<template>
    <a href="/" class="patreonCard">
            <div class="patreonCard__logo-container">
                <img width="150" src="../assets/patreonLogo.svg" alt="Patreon Logo">
            </div>
            <h2 class="patreonCard__title">Support us on Patreon</h2>
        <div class="patreonCard__button-container">
            <Button outlined as="a" label="Patreon" href="https://patreon.com/" target="_blank" rel="noopener" />
        </div>
    </a>
</template>

<style>
.patreonCard {
    text-align: left;
    background-color: white;
    border-radius: 1rem; /* equivalent to rounded-xl */
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
    transition: box-shadow 0.3s ease-in-out;
    justify-content: space-between;
}

/* Hover on .patreonCard */
.patreonCard:hover {
    box-shadow: 0 0 0 3px var(--odysen-mint);
}

.patreonCard__logo-container {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 1rem;
}

.patreonCard__title {
    font-size: 2.25rem; /* equivalent to text-4xl */
    font-weight: bold;
    padding-top: 0;
    color: black;
}

.patreonCard__button-container {
    margin: -2rem;
    background-color: #F0F0F0;
    padding: 1.25rem; /* equivalent to p-5 */
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
}


</style>