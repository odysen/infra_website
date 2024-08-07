<script setup>
    import Menubar from 'primevue/menubar';
    import InputText from 'primevue/inputtext';
    import '@mdi/font/css/materialdesignicons.css';
    import { ref } from "vue";

    const items = ref([
        {
            label: 'Home',
            icon: 'mdi mdi-home'
        },
        {
            label: 'Features',
            icon: 'mdi mdi-star'
        },
        {
            label: 'Projects',
            icon: 'mdi mdi-cog-box',
            items: [
                {
                    label: 'Odysen Android',
                    icon: 'mdi mdi-cellphone-arrow-down-variant',
                },
                {
                    label: 'Odysen Desktop',
                    icon: 'mdi mdi-monitor-arrow-down-variant',
                },
                {
                    label: 'Extras',
                    icon: 'mdi mdi-star',
                },
            ]
        },
        {
            label: 'Contact',
            icon: 'mdi mdi-email',
        }
    ]);
</script>

<template>
    <div class="floatie">
        <Menubar :model="items">
            <template #start>
                <svg width="45" height="35" viewBox="0 0 220 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M217.068 76.1415L160.184 149.982L121.198 99.3747C115.544 92.0351 104.456 92.0351 98.8021 99.3747L59.8161 149.982L2.93202 76.1415C-2.32166 69.3217 -0.283542 59.4366 7.24123 55.2413L103.111 1.79016C107.392 -0.59672 112.608 -0.596718 116.889 1.79016L212.759 55.2413C220.283 59.4366 222.322 69.3217 217.068 76.1415Z" fill="white"/>
                    <path d="M59.8161 149.982L98.8021 200.589C104.456 207.929 115.544 207.929 121.198 200.589L160.184 149.982L217.07 223.826C222.323 230.644 220.287 240.527 212.764 244.724L116.892 298.208C112.609 300.597 107.391 300.597 103.108 298.208L7.23562 244.724C-0.286839 240.527 -2.32328 230.644 2.92953 223.826L59.8161 149.982Z" fill="white"/>
                </svg>
            </template>

            <template #item="{ item, props, hasSubmenu, root }">
                <a v-bind="props.action">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                    <i v-if="hasSubmenu" :class="['mdi mdi-menu-down', { 'mdi-menu-down': root, 'mdi-menu-right': !root }]"></i>
                </a>
            </template>
            <template #end>
                <div>
                    <InputText placeholder="Search" type="text" />
                </div>
            </template>
        </Menubar>
    </div>
</template>