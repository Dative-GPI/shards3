<template>
    <v-window
        class="fs-window"
        :modelValue="tab"
        v-bind="$attrs"
    >
        <slot />
    </v-window>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
    name: "FSWindow",
    props: {
        tab: {
            type: Number,
            required: false,
            default: 0
        }
    },
    setup(props) {
        const { tab } = toRefs(props);

        return {
            tab
        };
    }
});
</script>