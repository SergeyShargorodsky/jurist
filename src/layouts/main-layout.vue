<template lang="pug">
  v-app-bar(app='' color='secondary' dark='')
    v-btn(text color='secondary')
      span(style="color: white") ИП Сергей Шаргородский
    v-spacer
    .d-flex.align-center
      v-btn(color='secondary' v-on:click='goto("home")') Главная
      v-btn(color='secondary' v-on:click='goto("about")') Обо мне
      v-btn(color='secondary' v-on:click='goto("price")') Стоимость услуг
      v-btn(color='secondary' v-on:click='goto("contacts")') Контакты
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
    methods:{
        onToPrice(){

        },
        goto(refName) {
            document.getElementById(refName).scrollIntoView({
                behavior: "smooth",
                block: 'center'
            });
            //const element = this.$refs[refName];
            //const top = element.offsetTop;
            //window.scrollTo(0, top);
        }

    }
}
</script>

<style scoped>

</style>
