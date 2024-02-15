<script>
import ButtonStyle from './ButtonStyle.vue';
export default {
  name: "Certification",
  components: { ButtonStyle }
}
</script>


<template>
  <section id="certification-section">
    <div class="container text-center d-flex flex-column align-items-center position-relative">
      <p class="clr-vlt m-0 fw-bold">Start today for getting <span class="clr-grn">Online Certification</span></p>
      <h2 class="clr-vlt">You can be your own guiding star with our help!</h2>
      <ButtonStyle buttontext="Get started now" class="mt-4" />
      <img src="/img/maxcoach-shape-01.png" alt="effect" class="effect">
      <img src="/img/maxcoach-shape-02.png" alt="effect" class="effect-round">
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

.effect {
  position: absolute;
  left: 5%;
  top: 30%;
}

.effect-round {
  position: absolute;
  right: 10%;
  top: 30%;
}

.container:hover [class*="effect"] {
  transform: scale(1.2);
}

[class*="effect"] {
  transition: transform 0.3s ease-in-out;
}
</style>