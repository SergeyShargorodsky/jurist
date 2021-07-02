<template lang="pug">
    v-row#price
        v-col(cols='6')
            v-row.bg-doc
                v-col(cols='6')
                    v-img.my-3(:src="require('../assets/img/foto-3.jpg')" contain='')
                v-col(cols='6')
                    v-img.my-3(:src="require('../assets/img/foto-4.jpg')" contain='')
        v-col(cols='6')
            .price-container
                v-simple-table(dense)
                    template(v-slot:default='')
                        //thead
                            tr
                                th.text-left
                                    | Name
                                th.text-left
                                    | Price
                        tbody
                            tr(v-for='item in dataPrice' :key='item.text')
                                td {{ item.text }}
                                td.text-nowrap от {{ item.price }}р

</template>

<script>
    import { dataPrice } from '../data/data-price'

    export default {
        name: 'Price',
        data: () => ({
            dataPrice: dataPrice,
        }),
    }
</script>

<style scoped>

</style>
