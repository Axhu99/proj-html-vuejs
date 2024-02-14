<script>
export default {
  name: "TutoringSection",
  data: () => ({
    tutorings: [
      {
        id: 1,
        title: "Customize Preferences",
        text: "Learners are given the right to arrange and customize their study schedule and timetable based on preferences.",
        imgpath: "home-2-image-box-01.png",
        link: "Start here",
      },
      {
        id: 2,
        title: "Cloud Storage",
        text: "You can store online lessons via online cloud or download to your device and revise lessons on the way.",
        imgpath: "about-us-02-image-box-02.png",
        link: "Get Free Quote",
      },
      {
        id: 3,
        title: "Multimedia Channels",
        text: "We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.",
        imgpath: "home-2-image-box-03.png",
        link: "Start now",
      },
    ]

  }),
}
</script>


<template>
  <section id="tutoring-section">
    <div class="container text-center">
      <p class="clr-gry">MAXCOACH AVAILABLE</p>
      <h2 class="clr-vlt">Access <span class="clr-grn">Smart Tutoring</span> Program For Benefits.</h2>
      <div class="row d-flex justify-content-center p-5">
        <div v-for="tutoring in tutorings" :key="tutoring.id" class="col-3 text-start">
          <img :src="`../../public/img/${tutoring.imgpath}`" alt="" />
          <h3 class="clr-vlt mt-3">{{ tutoring.title }}</h3>
          <p class="mt-3">{{ tutoring.text }}</p>
          <a :href="tutoring.link" class="link-hover text-decoration-none clr-gry">{{ tutoring.link }}</a>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
#tutoring-section {
  padding: 100px 0;
}

.col-3 {
  flex-basis: calc(100% / 3);
}

.col-3:hover .link-hover {
  color: #1FAC95;

}

.clr-vlt {
  color: #3F3A64;
}

.clr-gry {
  color: #696969;
}

.clr-grn {
  color: #20AD96;
}
</style>