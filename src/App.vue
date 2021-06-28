<template>
  <v-app>
    <main-layout/>
    <home/>
    <Footer/>
  </v-app>
</template>

<script>
import MainLayout from '@/layouts/main-layout'
import Home from '@/pages/Home'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
    Home,
    MainLayout,
    Footer,
  },

  data: () => ({
    //
  }),
}
</script>
