<template>
    <div
        class="fs-fade-out"
        :style="style"
        fluid
        @scroll="onScroll"
    >
        <div class="fs-fade-out-top" />
        <div class="fs-fade-out-inner">
            <slot />
        </div>
        <div class="fs-fade-out-bottom" />
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

export default defineComponent({
    name: "FSFadeOut",
    props: {
        maskHeight: {
            type: Number,
            required: false,
            default: 64
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Background
        }
    },
    setup(props) {
        const { maskHeight, color } = toRefs(props);

        const colors = useColors().getVariants(color.value);

        const style = ref({
            "--fs-fade-out-mask-color": colors.base,
            "--fs-fade-out-top-mask-height": "0px",
            "--fs-fade-out-bottom-mask-height": `${maskHeight.value}px`
        });

        const onScroll = ({ target }) => {
            if (target.scrollHeight - target.scrollTop - target.clientHeight < 1) {
                style.value["--fs-fade-out-bottom-mask-height"] = "0px";
            } else {
                style.value["--fs-fade-out-bottom-mask-height"] = `${maskHeight.value}px`;
            }
            if (target.scrollTop === 0) {
                style.value["--fs-fade-out-top-mask-height"] = "0px";
            }
            else {
                style.value["--fs-fade-out-top-mask-height"] = `${maskHeight.value}px`;
            }
        }

        return {
            style,
            onScroll
        };
    }
});
</script>