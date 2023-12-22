<template>
    <v-tabs
        class="fs-tabs"
        selected-class="fs-tab-active"
        show-arrows
        grow
        :style="style"
        :modelValue="tab"
        :slider-color="colors.base"
        @update:modelValue="(v) => emit('update:tab', v)"
        v-bind="$attrs"
    >
        <template v-for="(component, index) in $slots.default()" :key="index">
            <component :is="component" v-bind="{ color, colors, style }" />
        </template>
    </v-tabs>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref, toRefs } from "vue";

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

        const textColors = useColors().getContrasts(color.value);
        const colors = useColors().getColors(color.value);

        const darks = useColors().getColors(ColorBase.Dark);

        const style: Ref<{ [code: string]: string } & Partial<CSSStyleDeclaration>> = ref({
            "--fs-group-color": darks.base,
            "--fs-group-hover-background-color": colors.light,
            "--fs-group-hover-color": darks.dark,
            "--fs-group-disabled-color": darks.light,
            "--fs-group-light": colors.light,
            "--fs-group-base": colors.base,
            "--fs-group-dark": colors.dark,
            "--fs-tab-tag-background-color": colors.base,
            "--fs-tab-tag-color": textColors.light
        });

        return {
            tab,
            color,
            colors,
            style,
            emit
        };
    }
});
</script>