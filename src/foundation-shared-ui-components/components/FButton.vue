<template>
    
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "FButton",
    props: {
        mini: {
            type: Boolean,
            required: false,
            default: false
        },
        full: {
            type: Boolean,
            required: false,
            default: false
        },
        icon: {
            type: String,
            required: false,
            default: null
        },
        label: {
            type: String,
            required: false,
            default: null
        }
    },
    setup(props) {
        const style = {

        };
    }
});
</script>