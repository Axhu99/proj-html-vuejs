<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain,
        AppFooter,
    }
}
</script>

<template>
    <AppHeader />
    <AppMain />
    <AppFooter />
</template>

<style lang="scss">
@use "./assets/style/variables" as *;

.clr-vlt {
    color: $violet;
}

.clr-grn {
    color: $green;
}

.clr-lgvlt {
    color: $lgtviolet;
}

.clr-grey {
    color: $grey;
}
</style>