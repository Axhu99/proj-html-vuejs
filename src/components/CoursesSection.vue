<script>
import ButtonStyle from './ButtonStyle.vue';
export default {
  name: "CoursesSection",
  components: { ButtonStyle },
  data: () => ({
    courses: [
      {
        id: 1,
        price: "Free",
        name: "Personal Finance: Financial Security Thinking & Principles",
        lesson: 2,
        imgpath: "course-02-480x298.jpg",
        students: 300,
      },
      {
        id: 2,
        price: "$40.00",
        name: "Learning to Write as a Professional Author",
        lesson: 20,
        imgpath: "course-02-480x298.jpg",
        students: 77,
      },
      {
        id: 3,
        price: "Free",
        name: "Customer-centric Info-Tech Strategies",
        lesson: 24,
        imgpath: "stock-full-hd-03-480x298.jpg",
        students: 957,
      },
      {
        id: 4,
        price: "$19.00",
        name: "Open Programming Courses for Everyone: Python",
        lesson: 17,
        imgpath: "stock-full-hd-04-480x298.jpg",
        students: 66,
      },
      {
        id: 5,
        price: "$26.00",
        name: "Academic Listening and Note-taking",
        lesson: 14,
        imgpath: "stock-full-hd-05-480x298.jpg",
        students: 68,
      },
      {
        id: 6,
        price: "$39.00",
        name: "Master jQuery in a Short Period of Time",
        lesson: 6,
        imgpath: "stock-full-hd-06-480x298.jpg",
        students: 51,
      },
    ]
  }),
}
</script>

<template>
  <section id="courses-section">
    <div class="container text-center">
      <h5 class="">STIMULATEED TO LEARN?</h5>
      <h2 class="clr-vlt mb-5">Featured Online Courses</h2>
      <div class="row g-4">
        <div class="col-6" v-for="course in courses" :key="course.id">
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
        <ButtonStyle buttonText='View all courses' :icon="['fas', 'arrow-right']" iconRight="true" />
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

span {
  color: grey;
}
</style>
