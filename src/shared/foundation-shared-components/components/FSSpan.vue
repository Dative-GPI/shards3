<template>
    <span
        :class="classes"
        v-bind="$attrs"
    >
        <slot />
    </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
    name: "FSSpan",
    props: {
        font: {
            type: String as PropType<"text-h1" | "text-h2" | "text-h3" | "text-body" | "text-button" | "text-overline" | "text-underline">,
            required: false,
            default: "text-body"
        }
    },
    setup(props) {
        const { font } = toRefs(props);

        const classes = computed((): string[] => ["fs-span", font.value]);

        return {
            classes
        };
    }
});
</script>