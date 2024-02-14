<script>
import NumbersCard from './NumbersCard.vue';
export default {
    name: 'NumbersSection',
    components: { NumbersCard },
    data: () => ({
        blogs: [
            {
                id: 1,
                title: "Successfully trained",
                value: 1790,
                subtitle: 'ENROLLED LEARNERS',
            },
            {
                id: 2,
                title: "Proudly Received",
                value: 19,
                subtitle: 'COUNTRYWIDE AWARDS',
            },
            {
                id: 3,
                title: "Firmly Established",
                value: 24,
                subtitle: 'LOCAL BRANCHES',
            },
            {
                id: 4,
                title: "Getting Featured on",
                value: 1090,
                subtitle: 'BLOG POSTS',
            },
        ]
    }),
}

</script>

<template>
    <div class="container cards-container">
        <numbersCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
</template>

<style lang="scss" scoped>
.cards-container {
    display: flex;
    border-right: 1px solid rgba(211, 211, 211, 0.438);
}
</style>