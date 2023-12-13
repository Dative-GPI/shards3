<template>
    <v-tabs
        class="fs-tabs"
        selected-class="fs-tab-active"
        show-arrows
        grow
        :style="style"
        :modelValue="tab"
        @update:modelValue="(v) => emit('update:tab', v)"
        v-bind="$attrs"
    >
        <slot v-bind="{ color }" />
    </v-tabs>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

export default defineComponent({
    name: "FSTabs",
    props: {
        tab: {
            type: Number,
            required: false,
            default: 0
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Primary
        }
    },
    emits: ["update:tab"],
    setup(props, { emit }) {
        const { tab, color } = toRefs(props);

        const colors = useColors().getVariants(color.value);
        const dark = useColors().getDark();

        const style = {
            "--fs-group-light-color"  : colors.light,
            "--fs-group-base-color"   : colors.base,
            "--fs-group-dark-color"   : colors.dark,
            "--fs-group-light-text"   : dark.base,
            "--fs-group-base-text"    : dark.base,
            "--fs-group-dark-text"    : dark.dark
        };

        return {
            tab,
            color,
            style,
            emit
        };
    }
});
</script>