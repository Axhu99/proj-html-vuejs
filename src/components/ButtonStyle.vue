<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: 'ButtonStyle',
    components: {
        FontAwesomeIcon
    },
    props: {
        buttonText: {
            type: String,
            default: 'Get started now',
        },
        icon: {
            type: Array,
            required: true,
        },
        iconRight: {
            type: Boolean,
            default: false,
        }
    }

};
</script>

<template>
    <div>
        <button type="button" class="btn d-flex justify-content-center"> <span
                :class="{ 'iconP': iconRight }"><font-awesome-icon :icon="icon" /></span>
            {{ buttonText }}</button>
    </div>
</template>

<style scoped>
.btn {
    background-color: #20AD96;
    width: 250px;
    padding: 13px 12px;
    color: white;
    font-weight: bold;
    gap: 10px;
    transition: all 0.3s;
}

.iconP {
    order: 1;
}

.btn:hover {
    background-color: #3F3A64;
    color: white;
}
</style>