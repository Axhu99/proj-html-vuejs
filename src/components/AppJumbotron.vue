<script>
import ButtonStyle from './ButtonStyle.vue'
export default {
    name: 'AppJumbotron',
    components: { ButtonStyle },
    data: () => ({
        partners: ["client-logo-01.png", "client-logo-02.png", "client-logo-03.png", "client-logo-04.png", "client-logo-05.png", "client-logo-06.png",]
    })
}
</script>

<!-- TODO promp per immagine DX o SX | inserire le immagini |  -->

<template>
    <div class="container">
        <div class="row py-5">
            <div class="col-5 d-flex align-itens-center">
                <div class="jumbotronText">
                    <h1 class="titleJT">Distant learning for further expansion</h1>
                    <p class="mt-2  mb-5">Learning is a life-long journey that in fact we never find the terminate stop.
                        Stop
                        searching, enjoy
                        the process.</p>
                    <ButtonStyle :icon="['fas', 'download']" buttonText="Download free guide" />
                    <p class="mt-3">Have questions? <span class="link clr-grn fw-bold">Get Free Sample <font-awesome-icon
                                :icon="['fas', 'arrow-right']" /></span></p>
                </div>
            </div>
            <div class="col-6 offset-1 position-relative">
                <img src="/img/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt="jumbotron"
                    class="rounded-circle">
                <div class="effects-div">
                    <img src="/img/maxcoach-shape-08.png" alt="effect">
                    <img src="/img/maxcoach-shape-08.png" alt="effect">
                </div>
                <img src="/img/maxcoach-shape-07-150x150.png" alt="effect" class="effect-shape">
                <img src="/img/maxcoach-shape-02.png" alt="effect" class="effect-circle">
            </div>
            <div class="col-10 offset-1 mt-5">
                <ul class="d-flex justify-content-between align-items-center list-unstyled">
                    <li v-for="(partner, i) in  partners " :key="i">
                        <img :src="`/img/${partner}`" :alt="`${partner}`">
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<style>
.clr-grn {
    color: #20AD96;
}

.jumbotronText {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.titleJT {
    color: #3F3A64;
    font-weight: bold;
}

li {
    filter: opacity(0.5);
    cursor: pointer;
}

.link {
    cursor: pointer;
}

.link:hover {
    text-decoration: underline;
}

li:hover {
    filter: none;
}

.effects-div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 20%;
    left: -5%;
    z-index: -1;
}

.effect-shape {
    position: absolute;
    bottom: 5%;
    right: 0;
    z-index: -1;
}

.effect-circle {
    position: absolute;
    top: 15%;
    right: -10%;
}
</style>