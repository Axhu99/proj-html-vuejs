<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {

    name: 'BlogsCard',
    components: {
        FontAwesomeIcon
    },
    props: {
        card: Object
    }

}

</script>

<template>
    <div class="col-4 px-4">
        <div class="card">
            <img :src="`../../public/img/${card.imgpath}`" class="card-img-top" alt='...'>
            <div class="card-body">
                <div class="d-flex justify-content-center flex-column">
                    <h6>{{ card.subtitle }}</h6>
                    <h4>{{ card.title }}</h4>

                </div>
                <div class="footer-card">
                    <span class=" me-5">
                        <font-awesome-icon :icon="['far', 'file-lines']" class="me-2" />
                        {{ card.date }}
                    </span>
                    <span>
                        <font-awesome-icon :icon="['far', 'user']" class="me-2" />
                        {{ card.views }}views
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 0;

}


h4 {
    font-size: 19px;
    line-height: 30px;
    color: #3F3A64;
    font-weight: 700;
    margin-bottom: 20px;
    transition: color 0.3s;
    cursor: pointer;
}

h4:hover,
h6:hover {
    color: #20AD96;
}


.card-body {
    padding: 26px 30px;
}

h6,
.footer-card {
    color: #8C89A2;
    font-size: 15px;
    transition: color 0.5s;
    cursor: pointer;


    span {
        font-size: 14px;
    }
}

img {
    max-width: 100%;
    display: block;
    cursor: pointer;
}
</style>
