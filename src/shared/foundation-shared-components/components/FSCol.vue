<template>
    <div
        class="fs-col"
        :style="style"
        v-bind="$attrs"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

export default defineComponent({
    name: "FSCol",
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
        gap: {
            type: Number,
            required: false,
            default: 8
        }
    },
    setup(props) {
        const { width, height, gap } = toRefs(props);

        const style = computed(() => {
            const style : {[code: string]: string} & Partial<CSSStyleDeclaration> = {
                "--fs-col-gap": `${gap.value}px`
            };
            switch (width.value) {
                case "hug":
                    break;
                case "fill":
                    style.alignSelf = "stretch";
                    break;
                default:
                    style.width = width.value;
                    break;
            }
            switch (height.value) {
                case "hug":
                    break;
                case "fill":
                    style.flex = "1 0 0";
                    break;
                default:
                    style.heigth = height.value;
                    style.flexShrink = "0";
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