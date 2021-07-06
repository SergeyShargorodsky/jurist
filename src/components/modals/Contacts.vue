<template lang="pug">
    v-row.text-center#contacts
        v-col(cols='6')
            .text-container
                h1 +375 29 309 85 83
                h2 г. Минскк, ул. Мельникайте, 4-2, офис 107
                h3 рядом со станцией метро Фрунзенская
        v-col(cols='6')
            v-row
                YandexMapComponent(:coords='coords')
</template>

<script>
    //import Map from '@/components/Map'
    import YandexMapComponent from '../YandexMapComponent'
    import IYandexMap         from '../i-yandex-map'

    export default {
        name: 'Contacts',
        data: () => ({
            coords: [
                53.906649, 27.542787
            ],
        }),
        components: {
            YandexMapComponent,
            IYandexMap,
        },
    }
</script>

<style scoped>

</style>
