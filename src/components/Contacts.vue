<template lang="pug">
  v-row.text-center
    v-col(cols='6')
      h1 +375 29 309 85 83
      h3 г. Минскк, ул. Мельникайте, 4-2, офис 107
      h2 рядом со станцией метро Фрунзенская
    v-col(cols='6')
      map
</template>

<script>
import Map from '@/components/Map'

export default {
  name: 'Contacts',
  components: [
    Map,
  ],
}
</script>

<style scoped>

</style>
