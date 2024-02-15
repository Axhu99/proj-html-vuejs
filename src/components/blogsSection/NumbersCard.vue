<script>
export default {
    name: 'NumbersCard',
    props: {
        blog: Object
    }

}

</script>

<template>
    <div class="numbers-card">
        <h5>{{ blog.title }}</h5>
        <div class="number">{{ blog.value }}</div>
        <h6>{{ blog.subtitle }}</h6>
    </div>
</template>

<style lang="scss" scoped>
.numbers-card {
    height: 400px;
    flex-basis: 25%;
    text-align: center;
    padding: 25px;
    border-left: 1px solid rgba(211, 211, 211, 0.438);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    h5 {
        font-size: 24px;
        color: #3F3A64;
        font-weight: 700;
        padding: 0 20px;
    }

    h6 {
        color: #8C89A2;
        font-weight: 700;
    }

    .number {
        font-size: 64px;
        font-weight: 800;
        color: #20AD96;
    }
}
</style>