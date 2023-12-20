<template>
    <v-slide-group
        class="fs-slide-group"
        show-arrows
        :style="style"
        v-bind="$attrs"
    >
        <FSRow>
            <v-slide-group-item v-for="(component, index) in $slots.default()" :key="index">
                <component :is="component" v-bind="{ color, colors, textColor, textColors }" />
            </v-slide-group-item>
        </FSRow>
    </v-slide-group>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSSlideGroup",
    components: {
        FSRow
    },
    props: {
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
    setup(props) {
        const { color, textColor } = toRefs(props);

        const textColors = useColors().getVariants(textColor?.value ?? color.value);
        const colors = useColors().getVariants(color.value);

        const style: Ref<{ [code: string]: string } & Partial<CSSStyleDeclaration>> = ref({
            "--fs-group-light-color"  : colors.light,
            "--fs-group-base-color"   : colors.base,
            "--fs-group-dark-color"   : colors.dark,
            "--fs-group-light-text"   : textColors.base,
            "--fs-group-base-text"    : textColors.base,
            "--fs-group-dark-text"    : textColors.dark
        });

        return {
            color,
            colors,
            textColor,
            textColors,
            style
        };
    }
});
</script>