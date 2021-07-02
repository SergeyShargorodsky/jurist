<template lang="pug">
    .YandexMapComponent
        yandex-map(:coords='coords', :zoom='17')
            ymap-marker(:coords='coords', marker-id='123', marker-type='placemark')

</template>

<script>
    export default {
        name: 'YandexMapComponent',
        props: { coords: Array },
        data: () => ({
            //coords: [
            //  54.82896654088406,
            //  39.831893822753904
            //],
            clusterOptions: {
                1: {
                    clusterDisableClickZoom: true,
                    clusterOpenBalloonOnClick: true,
                    clusterBalloonLayout: [
                        '<ul class=list>',
                        '{% for geoObject in properties.geoObjects %}',
                        '<li><a href=# class="list_item">{{ geoObject.properties.balloonContentHeader|raw }}</a></li>',
                        '{% endfor %}',
                        '</ul>',
                    ].join(''),
                },
            },
        }),
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
    .YandexMapComponent {
        width: 100%;
        /*height: 100%;*/
        height: 70vh;
        /*margin-left: auto;*/
        /*margin-right: auto;*/
        margin-right: 12px;
        .ymap-container {
            height: 100%;
        }
    }
</style>
