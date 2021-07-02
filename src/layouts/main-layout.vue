<template lang="pug">
  v-app-bar(app='' color='secondary' dark='')
    v-btn(text color='secondary')
      span(style="color: white") ИП Сергей Шаргородский
    v-spacer
    .d-flex.align-center
      v-btn(color='secondary')
        //v-icon mdi-open-in-new
        span.mr-2 Главная
      v-btn(color='secondary') Стоимость услуг
      v-btn(color='secondary') Контакты
    v-spacer
    v-btn(text color='secondary')
      //v-icon mdi-open-in-new
      span.mr-2(style="color: white") +375-29-309-85-83


</template>

<script>
export default {
  name: 'main-layout',
  data: () => ({
    navigationButtons: 'recent',
  }),
}
</script>

<style scoped>

</style>
