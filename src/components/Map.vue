<template lang='pug'>
  div
    span Проверка MAP!
    //yandex-map-component(:coords='item.coords.split(", ")')
</template>

<script>
import YandexMapComponent from './YandexMapComponent'
export default {
  name: 'Map',
    components: { YandexMapComponent },
    data() {
    return {
      coords: [
        54.82896654088406,
        39.831893822753904,
      ],
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: 'https://image.flaticon.com/icons/png/512/33/33447.png',
        imageSize: [43, 43],
        imageOffset: [0, 0],
        content: 'content',
        contentOffset: [35, 15],
        contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>',
      },
    }
  },
  methods: {},
}
</script>

<style lang="scss">
/*#map {*/
  // width: 100%;
  /*height: 100vh;*/
/*}*/

/*.ymap-container {*/
/*<!--  height: 100%;-->*/
/*}*/
</style>
