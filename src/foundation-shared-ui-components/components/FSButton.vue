<template>
    <v-btn
        v-bind="$attrs"
        :elevation="0"
        :ripple="false"
        :style="wrapperStyle"
        @mouseenter="onHover(true)"
        @mouseleave="onHover(false)"
        @mousedown="onActive(true)"
        @mouseup="onActive(false)"
    >
        <FSRow :style="contentStyle" gap="8" width="hug" height="hug">
            <v-icon v-if="icon" :size="iconSize">
                {{ icon }}
            </v-icon>
            <FSSpan v-if="label" :textFont="textFont">
                {{ label }}
            </FSSpan>
        </FSRow>
    </v-btn>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

import { useColors, useMobile } from "@dative-gpi/foundation-shared-ui-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-ui-domain";

import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSButton",
    components: {
        FSSpan,
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
        backgroundColor: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.PrimaryLight
        },
        borderColor: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.PrimaryDark
        },
        textColor: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.PrimaryDark
        }
    },
    setup(props) {
        const colors = useColors().getButtonVariants(props.backgroundColor, props.borderColor, props.textColor);

        const iconSize = ref(24);

        const wrapperStyle = ref({
            minWidth: "48px",
            height: "48px",
            padding: "0 16px",
            borderRadius: "4px",
            border: `1px solid ${colors.border}`,
            backgroundColor: colors.backgroundBase
        });

        const contentStyle = ref({
            textTransform: "none",
            color: colors.textBase
        });

        const textFont = ref("text-button");

        useMobile().startWatch([{
            value: iconSize,
            web: 24,
            mobile: 18
        }, {
            value: wrapperStyle,
            property: "minWidth",
            web: "48px",
            mobile: "36px"
        }, {
            value: wrapperStyle,
            property: "height",
            web: "48px",
            mobile: "36px"
        }, {
            value: wrapperStyle,
            property: "padding",
            web: props.label ? "0 16px" : "0",
            mobile: props.label ? "0 16px" : "0"
        }]);

        const onHover = (hover: boolean): void => {
            wrapperStyle.value["backgroundColor"] = hover ? colors.backgroundHover : colors.backgroundBase;
            contentStyle.value["color"] = hover ? colors.textHover : colors.textBase;
        }

        const onActive = (active: boolean): void => {
            wrapperStyle.value["backgroundColor"] = active ? colors.backgroundActive : colors.backgroundHover;
            contentStyle.value["color"] = active ? colors.textActive : colors.textHover;
        }

        return {
            icon: props.icon,
            label: props.label,
            textColor: props.textColor,
            iconSize,
            wrapperStyle,
            contentStyle,
            textFont,
            onHover,
            onActive
        };
    }
});
</script>