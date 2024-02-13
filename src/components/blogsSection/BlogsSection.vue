<script>
import NumbersSection from './NumbersSection.vue';
import BlogsMain from './BlogsMain.vue';
export default {
    name: 'BlogsSection',
    components: { NumbersSection, BlogsMain }
}

</script>

<template>
    <section id="blogs-section">
        <NumbersSection />
        <BlogsMain />
    </section>
</template>

