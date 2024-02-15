<script>
export default {
  name: "HeroSection",
}
</script>


<template>
  <section id="hero-section">
    <div class="container p-5 mb-5">
      <div class="row">
        <div class="col-7 offset-1 p-0 position-relative">
          <img src="/img/home-2-popup-video-poster.jpg" alt="video" class="img-fluid" />
          <img src="/img/icon-youtube-play.png" alt="youtube-icon" class="youtube-icon" />
          <img src="/img/maxcoach-shape-05.png" alt="effect" class="effect-shape-round">
          <img src="/img/maxcoach-shape-07.png" alt="effect" class="effect-shape">
          <img src="/img/maxcoach-shape-02.png" alt="effect" class="effect-round">
        </div>
        <div class="col-3 d-flex flex-column justify-content-center gap-4">
          <h6 class="clr-gry">
            GET STARTED <span class="clr-vlt">EFFORTLESSLY</span>
          </h6>
          <h2 class="clr-vlt fs-1">
            Enjoy Our <br> <span class="clr-grn">Companionship</span>
          </h2>
          <p class="clr-gry">
            Sneek peek into what has in store for you on our online teaching
            and mentoring portal. Seek for some hidden hints of early-bird
            rewards as well.
          </p>
          <a href="#" class="text-decoration-none clr-grn fw-bold">Download free guidebook <font-awesome-icon
              :icon="['fas', 'arrow-right']" /></a>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../assets/style/variables' as *;

.clr-vlt {
  color: $violet;
}

.clr-gry {
  color: $grey;
}

.clr-grn {
  color: $green;
}

.youtube-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.effect-shape {
  position: absolute;
  bottom: -15%;
  right: -12%;
  z-index: -1;
}

.effect-shape-round {
  position: absolute;
  top: 15%;
  left: -15%;
  z-index: -1;
}

.effect-round {
  position: absolute;
  bottom: -10%;
  left: -10%;
}

.col-7:hover [class*="effect"] {
  transform: scale(1.2);
}
</style>