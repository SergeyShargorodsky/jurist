<template lang="pug">
  v-footer(color='secondary lighten-1' padless='')
    v-row(justify='center' no-gutters='')
      v-btn.my-2(v-for='link in links' :key='link' color='white' text='' rounded='')
        | {{ link }}
      v-col.secondary.lighten-2.py-4.text-center.white--text(cols='12')
        | {{ new Date().getFullYear() }} &mdash;
        strong Vuetify
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    links: [
      'Главная',
      'Стоимость услуг',
      'Контакты',
    ],
  }),
}
</script>

<style scoped>

</style>
