<template lang="pug">
  v-main
    v-container
      about
      requisites
      price
      contacts

</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Requisites from '@/components/Requisites'
import Price from '@/components/Price'
import Contacts from '@/components/Contacts'

export default {
  name: 'Home',
  components: {
    Contacts,
    Price,
    Requisites,
    About,
    HelloWorld
  }
}
</script>

<style scoped>

</style>
