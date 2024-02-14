<script>
import CoursesSection from './CoursesSection.vue';
import TutoringSection from './TutoringSection.vue';
import HeroSection from './HeroSection.vue';

import CarouselSection from './CarouselSection.vue';
import BlogsSection from './blogsSection/BlogsSection.vue';

export default {
    name: 'AppMain',
    components: { CoursesSection, TutoringSection, CarouselSection, BlogsSection, HeroSection }
}

</script>

<template>
    <CoursesSection />
    <TutoringSection />
    <HeroSection />
    <CarouselSection />
    <BlogsSection />
</template>