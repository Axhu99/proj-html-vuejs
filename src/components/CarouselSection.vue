<script>
import CertificationSection from './CertificationSection.vue';

export default {
    name: 'CarouselSection',
    components: { CertificationSection },
    data: () => ({
        learners: [
            {
                id: 1,
                name: "Florence Themes",
                job: "Multimedia Admin",
                title: "It's a choice of quality for people with special needs",
                paragraph: "I'm a very strict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.",
                img: "testimonial-avata-03.jpg",
            },
            {
                id: 2,
                name: "Mina Hollace",
                job: "Freelancer",
                title: "High level of efficiency and scientific teaching methods",
                paragraph: "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
                img: "testimonial-avata-02.jpg",
            },
            {
                id: 3,
                name: "Madley Pondor",
                job: "IT Specialist",
                title: "Professional team of specialists and passionate mentors at reach",
                paragraph: "I need to get a certification for English proficiency and MaxCoach is my best choice.Their tutors are smart and professional when dealing with students.",
                img: "testimonial-avata-04.jpg",
            },
            {
                id: 4,
                name: "Luvic Dubble",
                job: "Private Tutor",
                title: "The MaxCoach team works really hard to ensure high quality",
                paragraph: "I am happy with their arrangement of lessons and subjects. They reflect a scientific  investigation into effective methods to be adopted for learners of all levels.",
                img: "testimonial-avata-01.jpg",
            },
        ],
        dotActiveIndex: 0,
        activeIndex: 1,
        prevIndex: null,
        nextIndex: 1,

    }),
    methods: {
        goToSlide(i) {
            if (i === this.learners.length - 1) {
                this.activeIndex = 0
                this.dotActiveIndex = i;
            }
            else {
                this.dotActiveIndex = i;
                this.activeIndex = i + 1;
            }
        },
    }

};
</script>

<template>
    <section id="carousel-section">
        <div class="text-center mb-5">
            <p class="clr-gry fw-bold">GREAT WORDS ABOUT MAXCOACH</p>
            <h3 class="clr-vlt">Our <span>top Learners'</span>verbatim</h3>
            <div class="mt-5 card-container">
                <div class="carousel d-flex">
                    <div class="card" v-for="(learner, i) in learners" :key="learner.id" :class="{
                        'card': true,
                        'active': i === activeIndex,
                    }">
                        <h4> {{ learner.title }}
                        </h4>
                        <p class="mt-4">{{ learner.paragraph }}</p>
                        <div class="d-flex">
                            <img :src="`../../public/img/${learner.img}`" alt="" class="rounded-circle mt-4">
                            <div class="mt-4">
                                <p>{{ learner.name }}</p>
                                <span>/ {{ learner.job }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dots">
                <span v-for="(learner, index) in learners" :key="learner.id" @click="goToSlide(index), goToNext"
                    :class="{ 'dot': true, 'active': index === dotActiveIndex }"></span>
            </div>
        </div>
        <CertificationSection />
    </section>
</template>

<style scoped>
#carousel-section {
    background-color: #F8F8F8;
    padding: 100px 0;
}

.card {
    padding: 41px 50px 36px;
    opacity: 0.5;
    flex: 0 0 33.33%;
}

.active {
    opacity: 1;
}

.clr-gry {
    color: #8C89A2;
}

.clr-vlt {
    color: #3f3a64;
}

span {
    color: #20AD96;
}

img {
    width: 80px;
    margin-right: 15px;
}

.carousel {
    overflow: hidden;
    gap: 15px;
}

.dots {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.dot {
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
}

.dot.active {
    background-color: #333;
}
</style>