<template>
    <div
        class="fs-row"
        :style="style"
        v-bind="$attrs"
    >
        <div
            class="fs-row-inner"
            :style="innerStyle"
        >
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

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
        gap: {
            type: Number,
            required: false,
            default: 8
        }
    },
    setup(props) {
        const { width, height, gap } = toRefs(props);
        
        const style = {
            "--g": `${gap.value}px`
        };

        const innerStyle = {
        };

        switch (width.value) {
            case "hug":
                break;
            case "fill":
                style["flex"] = "1 0 0";
                innerStyle["flex"] = "1 0 0";
                break;
            default:
                style["width"] = width.value;
                innerStyle["width"] = width.value;
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

        return {
            style,
            innerStyle
        };
    }
});
</script>

<style lang="scss" scoped>
.fs-row {
    display: flex;
    align-items: flex-start;
}

.fs-row-inner {
    display: flex;
    height: 100%;
    align-items: center;
    gap: var(--g);
}
</style>