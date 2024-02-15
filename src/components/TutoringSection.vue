<script>
import { store } from '../data/store';
export default {
  name: "TutoringSection",
  data: () => ({ store })
}
</script>


<template>
  <section id="tutoring-section">
    <div class="container text-center">
      <p class="clr-gry">MAXCOACH AVAILABLE</p>
      <h2 class="clr-vlt">Access <span class="clr-grn">Smart Tutoring</span> Program For Benefits.</h2>
      <div class="row d-flex justify-content-center p-5">
        <div v-for="tutoring in store.tutorings" :key="tutoring.id" class="col-3 text-start">
          <img :src="`/img/${tutoring.imgpath}`" alt="" />
          <h3 class="clr-vlt mt-3">{{ tutoring.title }}</h3>
          <p class="mt-3">{{ tutoring.text }}</p>
          <a :href="tutoring.link" class="link-hover text-decoration-none clr-gry">{{ tutoring.link }}
            <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
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

/* ------------------------------------ */
.col-3:hover .link-hover {
  color: #1FAC95;
  position: relative;
}

.link-hover::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: grey;
  transition: width 0.5s ease-in-out;
}

.col-3:hover .link-hover::before {
  width: 100%;
}

/* ------------------------------------ */
</style>