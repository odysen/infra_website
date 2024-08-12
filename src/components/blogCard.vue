<script setup>
import Button from 'primevue/button'

</script>

<template>
    <a href="/" class="blogCard">
        <div>
            <img src="../assets/PR.svg" alt="">
            <h2 class="blogCard__title">Visit our Blog</h2>
            <p class="blogCard__text">Get the latest updates from the Odysen Team, where we transform everyday tasks into a
                spectacular circus of creativity and chaos!</p>
        </div>
        <div class="patreonCard__button-container">
            <Button outlined as="a" label="Blog" href="https://patreon.com/" target="_blank" rel="noopener" />
        </div>
    </a>
</template>

<style>
.blogCard {
    text-align: left;
    background-color: white;
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
.blogCard:hover {
    box-shadow: 0 0 0 3px var(--odysen-mint);
}

.blogCard__title {
    font-size: 2.25rem;
    /* equivalent to text-4xl */
    font-weight: bold;
    padding-top: 0;
    color: black;
}

.blogCard__text {
    color: black;
    margin-top: 16px;
    margin-bottom: 16px;
}

.blogCard__button-container {
    margin: -2rem;
    background-color: #F0F0F0;
    padding: 1.25rem;
    /* equivalent to p-5 */
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
}
</style>