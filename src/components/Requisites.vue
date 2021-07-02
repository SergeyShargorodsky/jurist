<template lang="pug">
    v-row.text-center#about
        v-col(cols='6')
                .text-container
                    h1 ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ
                    h1 ШАРГОРОДСКИЙ СЕРГЕЙ ПАВЛОВИЧ
                    h2 УНП 193541355
                    h3 лицензия на право осуществления деятельности по оказанию
                    h3 юридических услуг №02240/2933

                    h3 Р/с BY04 BELB 3013 0006 SU00 1022 6000
                    h3 в ОАО «Банк БелВЭБ», г.Минск, пр- Победителей, 29
                    h3 BIC BELB BY2X

                    h3 телефон + 375 29 309 85 83
                    h3 E-mail: shilov.serg-2020@yandex.ru

        v-col(cols='6')
            v-row
                v-img(:src="require('../assets/img/foto-2.jpg')" contain='')
</template>

<script>
    export default {
        name: 'Requisites',
    }
</script>

<style scoped>

</style>
