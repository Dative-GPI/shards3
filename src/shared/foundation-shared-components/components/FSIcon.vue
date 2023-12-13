<template>
    <v-icon
        :class="size"
        v-bind="$attrs"
    >
        <slot />
    </v-icon>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
    name: "FSIcon",
    props: {
        size: {
            type: String as PropType<"s" | "m" | "checkbox">,
            required: false,
            default: "m"
        }
    },
    setup(props) {
        const { size } = toRefs(props);

        return {
            size: `fs-icon-${size.value}`
        };
    }
});
</script>