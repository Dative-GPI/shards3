<template>
    <v-slide-group
        class="fs-slide-group"
        show-arrows
        :style="style"
        v-bind="$attrs"
    >
        <FSRow>
            <v-slide-group-item v-for="(component, index) in $slots.default()" :key="index">
                <component :is="component" v-bind="{ color, colors, style }" />
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
        }
    },
    setup(props) {
        const { color } = toRefs(props);

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
            "--fs-group-dark": colors.dark
        });

        return {
            color,
            colors,
            style
        };
    }
});
</script>