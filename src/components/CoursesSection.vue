<script>
import ButtonStyle from './ButtonStyle.vue';
import { store } from '../data/store';
export default {
  name: "CoursesSection",
  components: { ButtonStyle, },
  data: () => ({ store })
}
</script>

<template>
  <section id="courses-section">
    <div class="container text-center">
      <h6 class="clr-gry">STIMULATEED TO LEARN?</h6>
      <h2 class="clr-vlt mb-5">Featured Online Courses</h2>
      <div class="row g-4">
        <div class="col-6" v-for="course in store.courses" :key="course.id">
          <div class="p-3 d-flex">
            <div class="img-card img-fluid">
              <img :src="`../../public/img/${course.imgpath}`" alt="" class="rounded-circle" />
            </div>
            <div class="text-card text-start d-flex justify-content-center flex-column gap-3 ms-3">
              <h3 class="clr-grn m-0">{{ course.price }}</h3>
              <h4 class="m-0">{{ course.name }}</h4>
              <div class="d-flex">
                <p class="me-3"><font-awesome-icon :icon="['far', 'file-lines']" /> {{ course.lesson }} Lessons</p>
                <p><font-awesome-icon :icon="['far', 'user']" /> {{ course.students }} Students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- !Riguardare la posizione dell'icona  -->
      <div class="d-flex justify-content-center mt-5">
        <ButtonStyle buttonText='View all courses' :icon="['fas', 'arrow-right']" iconRight />
      </div>
    </div>
  </section>
</template>



<style scoped>
#courses-section {
  background-color: #f5f7fa;
  padding: 100px 0;
}

.col-6:hover {
  background-color: white;
  transition: background-color 0.5s ease;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
}

h4:hover {
  color: #20ad96;
}

.img-card {
  flex-basis: 30%;
}

.text-card {
  flex-basis: 60%;
}

img {
  height: 190px;
  width: 190px;
  object-fit: cover;
}

.clr-grn {
  color: #20ad96;
}

.clr-vlt {
  color: #3F3A64;
}

.clr-gry {
  color: #8C89A2;
}



p {
  font-size: 14px;
  color: #8C89A2;
}

span {
  color: grey;
}
</style>
