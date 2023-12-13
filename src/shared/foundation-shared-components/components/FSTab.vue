<template>
    <v-tab
        class="fs-tab"
        :ripple="false"
        :slider-color="sliderColor"
        v-bind="$attrs"
    >
        <slot>
            <FSRow>
                <FSSpan v-if="label" class="fs-tab-label" font="text-button">
                    {{ label }}
                </FSSpan>
                <v-spacer />
                <FSSpan v-if="tag" class="fs-tab-tag">
                    {{ tag }}
                </FSSpan>
            </FSRow>
        </slot>
    </v-tab>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSTab",
    components: {
        FSSpan,
        FSRow
    },
    props: {
        label: {
            type: String,
            required: false,
            default: null
        },
        tag: {
            type: String,
            required: false,
            default: null
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Primary
        }
    },
    setup(props) {
        const { label, color } = toRefs(props);

        const colors = useColors().getVariants(color.value);

        return {
            label,
            sliderColor: colors.base
        };
    }
});
</script>