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
        }
    }
};
</script>

<template>
    <div>
        <button type="button" class="btn"> <font-awesome-icon :icon="icon" /> {{ buttonText }}</button>
    </div>
</template>

<style scoped>
.btn {
    background-color: #20AD96;
    width: 250px;
    padding: 13px 12px;
    color: white;
    font-weight: bold;
}
</style>


<!-- <font-awesome-icon :icon="['fas', 'download']" /> -->
<!--<font-awesome-icon :icon="['fas', 'arrow-right']" /> -->