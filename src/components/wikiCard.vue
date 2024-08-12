<script setup>
import Button from 'primevue/button'

</script>

<template>
    <a href="/" class="wikiCard">
        <div>
            <img src="../assets/CDLogo.svg" alt="">
            <h2 class="wikiCard__title">Wiki</h2>
            <p class="wikiCard__text">Everything you need to know about Odysen, including documentation and the inner workings of the code base!</p>
        </div>
        <div class="wikiCard__button-container">
            <Button outlined as="a" label="Wiki" href="https://patreon.com/" target="_blank" rel="noopener" />
        </div>
    </a>
</template>

<style>
.wikiCard {
    text-align: left;
    background-color: var(--odysen-mint);
    border-radius: 1rem;
    /* equivalent to rounded-xl */
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
    justify-content: space-between;
    transition: box-shadow 0.3s ease-in-out;
}

/* Hover on .patreonCard */
.wikiCard:hover {
    box-shadow: 0 0 0 3px white;
}

.wikiCard__title {
    font-size: 2.25rem;
    /* equivalent to text-4xl */
    font-weight: bold;
    padding-top: 0;
    color: black;
}

.wikiCard__text {
    color: black;
    margin-top: 16px;
    margin-bottom: 16px;
}

.wikiCard__button-container {
    margin: -2rem;
    background-color: var(--odysen-space);
    border: 2px solid var(--odysen-mint);
    padding: 1.25rem;
    /* equivalent to p-5 */
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
}
</style>