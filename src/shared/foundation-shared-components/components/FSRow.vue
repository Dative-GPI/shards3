<template>
    <div
        class="fs-row"
        :style="style"
        v-bind="$attrs"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
    name: "FSRow",
    props: {
        width: {
            type: String as PropType<"hug" | "fill" | string>,
            required: false,
            default: "fill"
        },
        height: {
            type: String as PropType<"hug" | "fill" | string>,
            required: false,
            default: "fill"
        },
        wrap: {
            type: Boolean,
            required: false,
            default: true
        },
        gap: {
            type: Number,
            required: false,
            default: 8
        }
    },
    setup(props) {
        const { width, height, wrap, gap } = toRefs(props);
        
        const style = computed(() => {
            const style = {
                "--fs-row-flex-wrap": wrap.value ? "wrap" : "nowrap",
                "--fs-row-gap": `${gap.value}px`
            };
            switch (width.value) {
                case "hug":
                    break;
                case "fill":
                    style["flex"] = "1 0 0";
                    break;
                default:
                    style["width"] = width.value;
                    break;
            }
            switch (height.value) {
                case "hug":
                    break;
                case "fill":
                    style["align-self"] = "stretch";
                    break;
                default:
                    style["height"] = height.value;
                    style["flex-shrink"] = "0";
                    break;
            }
            return style;
        });

        return {
            style
        };
    }
});
</script>