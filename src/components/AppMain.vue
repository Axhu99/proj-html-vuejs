<script>
import CoursesSection from './CoursesSection.vue';
import TutoringSection from './TutoringSection.vue';
import CarouselSection from './CarouselSection.vue';
import BlogsSection from './blogsSection/BlogsSection.vue';

export default {
    name: 'AppMain',
    components: { CoursesSection, TutoringSection, CarouselSection, BlogsSection }
}

</script>

<template>
    <CoursesSection />
    <TutoringSection />
    <CarouselSection />
    <BlogsSection />
</template>