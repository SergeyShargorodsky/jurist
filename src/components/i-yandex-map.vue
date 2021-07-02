<template lang="pug">
    .i-yandex-map
        v-parallax(dark='', src='https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg' height='300')
            v-row(align='center', justify='center')
                v-col.text-center(cols='12')
                    h1.display-2.text-uppercase.mb-4 i-yandex-map
                    h4.subheading Build your application today!
</template>

<script>
    export default {
        name: 'i-yandex-map',
        // el: '',
        // render: {},
        props: [],
        data: () => ({  }),
        watch: {},
        computed: {},
        methods: {},
        beforeCreate: function () {},
        created: function () {},
        beforeMount: function () {},
        mounted: function () {},
        beforeUpdate: function () {},
        updated: function () {},
        beforeDestroy: function () {},
        destroyed: function () {},
    }
</script>

<style scoped lang="scss">
    .i-yandex-map {
        h1, h4 {
            text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
        }
        // Vars

        // Support

        // Module
        & {
            //
        }

        // Facets

        // States
    }
</style>
