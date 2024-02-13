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
}

.iconP {
    order: 1;
}
</style>


<!-- <font-awesome-icon :icon="['fas', 'download']" /> -->
<!--<font-awesome-icon :icon="['fas', 'arrow-right']" /> -->