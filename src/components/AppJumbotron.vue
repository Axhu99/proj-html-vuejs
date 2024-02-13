<script>
export default {
    name: 'AppJumbotron'
}
</script>

<!-- TODO promp per immagine DX o SX | inserire le immagini |  -->

<template>
    <div class="container">
        <div class="row py-5">
            <div class="col-6 d-flex align-itens-center">
                <div class="jumbotronText">
                    <h1 class="titleJT">Distant learning for further expansion</h1>
                    <p>Learning is a life-long jourbey that in fact we never find</p>
                    <p> ---- buttone ----</p>
                    <p>Have questions? <span class="link">Get Free Sample</span></p>
                </div>
            </div>
            <div class="col-6">
                <img src="/img/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg" alt=""
                    class="rounded-circle">
            </div>
        </div>
    </div>
</template>

<style>
.jumbotronText {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.titleJT {
    color: #3F3A64;
    font-weight: bold;
}
</style>