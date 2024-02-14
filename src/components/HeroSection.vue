<script>
export default {
  name: "HeroSection",
}
</script>


<template>
  <section id="hero-section">
    <div class="container p-5">
      <div class="row">
        <div class="col-7 offset-1 p-0 position-relative">
          <img src="/img/home-2-popup-video-poster.jpg" alt="" class="img-fluid" />
          <img src="/img/icon-youtube-play.png" alt="" class="youtube-icon" />
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


<style scoped>
.clr-vlt {
  color: #3f3a64;
}

.clr-gry {
  color: #696969;
}

.clr-grn {
  color: #20ad96;
}

.youtube-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>