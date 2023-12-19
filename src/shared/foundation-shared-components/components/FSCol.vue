<template>
    <div
        :style="style"
        :class="classes"
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
            default: "hug"
        },
        align: {
            type: String as PropType<"top-left" | "top-center" | "top-right" | "center-left" | "center-center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right">,
            required: false,
            default: "top-left"
        },
        gap: {
            type: Number,
            required: false,
            default: 8
        }
    },
    setup(props) {
        const { width, height, align, gap } = toRefs(props);

        const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => ({
            "--fs-col-gap": `${gap.value}px`,
            "--fs-col-width": width.value,
            "--fs-col-height": height.value
        }));

        const classes = computed((): string[] => {
            const classes = ["fs-col"];
            switch (width.value) {
                case "hug":
                    classes.push("fs-col-width-hug");
                    break;
                case "fill":
                    classes.push("fs-col-width-fill");
                    break;
                default: 
                    classes.push("fs-col-width-fixed");
                    break;
            }
            switch (height.value) {
                case "hug":
                    classes.push("fs-col-height-hug");
                    break;
                case "fill":
                    classes.push("fs-col-height-fill");
                    break;
                default: 
                    classes.push("fs-col-height-fixed");
                    break;
            }
            switch (align.value) {
                case "top-left":
                    classes.push("fs-col-top-left");
                    break;
                case "top-center":
                    classes.push("fs-col-top-center");
                    break;
                case "top-right":
                    classes.push("fs-col-top-right");
                    break;
                case "center-left":
                    classes.push("fs-col-center-left");
                    break;
                case "center-center":
                    classes.push("fs-col-center-center");
                    break;
                case "center-right":
                    classes.push("fs-col-center-right");
                    break;
                case "bottom-left":
                    classes.push("fs-col-bottom-left");
                    break;
                case "bottom-center":
                    classes.push("fs-col-bottom-center");
                    break;
                case "bottom-right":
                    classes.push("fs-col-bottom-right");
                    break;
            }
            return classes;
        });

        return {
            style,
            classes
        };
    }
});
</script>