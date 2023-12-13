<template>
    <v-btn
        class="fs-button"
        :ripple="false"
        :style="style"
        v-bind="$attrs"
    >
        <slot>
            <FSRow width="hug">
                <FSIcon v-if="icon" size="m">
                    {{ icon }}
                </FSIcon>
                <FSSpan v-if="label" font="text-button">
                    {{ label }}
                </FSSpan>
            </FSRow>
        </slot>
    </v-btn>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSSpan from "./FSSpan.vue";
import FSIcon from "./FSIcon.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSButton",
    components: {
        FSSpan,
        FSIcon,
        FSRow
    },
    props: {
        icon: {
            type: String,
            required: false,
            default: null
        },
        label: {
            type: String,
            required: false,
            default: null
        },
        full: {
            type: Boolean,
            required: false,
            default: false
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Primary
        }
    },
    setup(props) {
        const { label, full, color } = toRefs(props);

        const colors = useColors().getVariants(color.value);

        const style = computed(() => ({
            "--fs-button-padding"    : label.value ? "0 16px" : "0",
            "--fs-button-light-color": full.value ? colors.base : colors.light,
            "--fs-button-base-color" : colors.base,
            "--fs-button-dark-color" : colors.dark,
            "--fs-button-light-text" : full.value ? colors.light : colors.base,
            "--fs-button-base-text"  : colors.light,
            "--fs-button-dark-text"  : colors.light
        }));

        return {
            icon: props.icon,
            label,
            style
        };
    }
});
</script>