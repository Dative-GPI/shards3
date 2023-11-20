<template>
    <div :style="style">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

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
        const style = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: `${props.gap}px`
        };

        switch (props.width) {
            case "hug":
                break;
            case "fill":
                style["alignSelf"] = "stretch";
                break;
            default:
                style["width"] = props.width;
                break;
        }

        switch (props.height) {
            case "hug":
                break;
            case "fill":
                style["flex"] = "1 0 0";
                break;
            default:
                style["height"] = props.height;
                style["flexShrink"] = "0";
                break;
        }

        return {
            style
        };
    }
});
</script>