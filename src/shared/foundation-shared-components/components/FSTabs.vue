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
            <component :is="component" />
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
        },
        textColor: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Dark
        }
    },
    emits: ["update:tab"],
    setup(props, { emit }) {
        const { tab, color, textColor } = toRefs(props);

        const textColors = useColors().getVariants(textColor?.value ?? color.value);
        const colors = useColors().getVariants(color.value);

        const style: Ref<{ [code: string]: string } & Partial<CSSStyleDeclaration>> = ref({
            "--fs-group-light-color"  : colors.light,
            "--fs-group-base-color"   : colors.base,
            "--fs-group-light-text"   : textColors.base,
            "--fs-group-dark-text"    : textColors.dark
        });

        return {
            tab,
            colors,
            style,
            emit
        };
    }
});
</script>