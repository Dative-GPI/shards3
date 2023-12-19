<template>
    <v-slide-group
        class="fs-wrap-group"
        :style="style"
        v-bind="$attrs"
    >
        <FSRow>
            <v-slide-group-item v-for="(component, index) in $slots.default()" :key="index">
                <component :is="component" v-bind="{ color }" />
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
    name: "FSWrapGroup",
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

        const colors = useColors().getVariants(color.value);
        const dark = useColors().getVariants(ColorBase.Dark);

        const style: Ref<{ [code: string]: string } & Partial<CSSStyleDeclaration>> = ref({
            "--fs-group-light-color"  : colors.light,
            "--fs-group-base-color"   : colors.base,
            "--fs-group-dark-color"   : colors.dark,
            "--fs-group-light-text"   : dark.base,
            "--fs-group-base-text"    : dark.base,
            "--fs-group-dark-text"    : dark.dark
        });

        return {
            color,
            style
        };
    }
});
</script>