<script>
import ButtonStyle from './ButtonStyle.vue';
export default {
  name: "Certification",
  components: { ButtonStyle }
}
</script>


<template>
  <section id="certification-section">
    <div class="container text-center d-flex flex-column align-items-center">
      <p class="clr-vlt m-0 fw-bold">Start today for getting <span class="clr-grn">Online Certification</span></p>
      <h2 class="clr-vlt">You can be your own guiding star with our help!</h2>
      <ButtonStyle buttontext="Get started now" class="mt-4" />
    </div>
  </section>
</template>

<style scoped>
#certification-section {
  background-color: #F8F8F8;
}

.clr-gry {
  color: #8C89A2;
}

.clr-vlt {
  color: #3f3a64;
}

.clr-grn {
  color: #20AD96;
}
</style>