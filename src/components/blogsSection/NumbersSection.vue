<script>
import { store } from '../../data/store';
import NumbersCard from './NumbersCard.vue';
export default {
    name: 'NumbersSection',
    components: { NumbersCard },
    data: () => ({ store })
}

</script>

<template>
    <div class="container cards-container">
        <numbersCard v-for="blog in store.blogs" :key="blog.id" :blog="blog" />
    </div>
</template>

<style lang="scss" scoped>
.cards-container {
    display: flex;
    border-right: 1px solid rgba(211, 211, 211, 0.438);
}
</style>