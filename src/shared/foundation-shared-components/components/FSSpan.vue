<template>
    <span
        :class="classes"
        v-bind="$attrs"
    >
        <slot />
    </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs, useSlots } from "vue";

export default defineComponent({
    name: "FSSpan",
    props: {
        font: {
            type: String as PropType<"text-h1" | "text-h2" | "text-h3" | "text-body" | "text-button" | "text-overline" | "text-underline">,
            required: false,
            default: "text-body"
        },
        ellipsis: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    setup(props) {
        const { font } = toRefs(props);
        
        const slots = useSlots();

        const classes = computed((): string[] => {
            const classes = ["fs-span", font.value];
            if (props.ellipsis) {
                classes.push("fs-span-ellipsis");
            }
            if (!slots.default) {
                classes.push("fs-span-pre-wrap");
            }
            return classes;
        });

        return {
            classes
        };
    }
});
</script>