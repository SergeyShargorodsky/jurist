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
    import About      from '@/components/About'
    import Requisites from '@/components/Requisites'
    import Price      from '@/components/Price'
    import Contacts   from '@/components/Contacts'

    export default {
        name: 'Home',
        components: {
            Contacts,
            Price,
            Requisites,
            About,
            HelloWorld,
        },
    }
</script>

<style scoped lang='scss'>
    .container {
        width: 100%;
        padding: 0;
        margin-top: 12px;
        margin-right: inherit;
        margin-left: inherit;
    }

    @media (min-width: 1904px) {
        .container {
            max-width: inherit;
        }
    }

    @media (min-width: 1264px) {
        .container {
            max-width: inherit;
        }
    }

    @media (min-width: 960px) {
        .container {
            max-width: inherit;
        }
    }
</style>
