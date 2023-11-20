<template>
    <FSRow
        gap="8"
        width="hug"
        height="hug"
        :style="wrapperStyle"
    >
        <FSSpan :textFont="textFont">
            {{ label }}
        </FSSpan>
        <v-btn
            v-if="editable"
            :elevation="0"
            :ripple="false"
            :style="contentStyle"
            @mouseenter="onHover(true)"
            @mouseleave="onHover(false)"
            @mousedown="onActive(true)"
            @mouseup="onActive(false)"
        >
            <v-icon v-if="editable" size="12">
                mdi-close
            </v-icon>
        </v-btn>
    </FSRow>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

import { useColors, useMobile } from "@dative-gpi/foundation-shared-ui-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-ui-domain";

import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSTag",
    components: {
        FSSpan, FSRow
    },
    props: {
        label: {
            type: String,
            required: true
        },
        backgroundColor: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.PrimaryLight
        },
        borderColor: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.PrimaryLight
        },
        textColor: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.PrimaryDark
        },
        editable: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    setup(props) {
        const colors = useColors().getButtonVariants(props.backgroundColor, props.borderColor, props.textColor);

        const wrapperStyle = ref({
            height: "28px",
            padding: "0 8px",
            borderRadius: "2px",
            border: `1px solid ${colors.border}`,
            backgroundColor: colors.backgroundBase,
            color: colors.textBase
        });

        const contentStyle = ref({
            minWidth: "20px",
            height: "20px",
            padding: "0",
            borderRadius: "2px",
            backgroundColor: colors.backgroundBase,
            color: colors.textBase
        });

        const textFont = ref("text-body");

        useMobile().startWatch([{
            value: wrapperStyle,
            property: "height",
            web: "28px",
            mobile: "24px"
        }, {
            value: contentStyle,
            property: "height",
            web: "20px",
            mobile: "16px"
        }]);

        const onHover = (hover: boolean): void => {
            contentStyle.value["backgroundColor"] = hover ? colors.backgroundHover : colors.backgroundBase;
            contentStyle.value["color"] = hover ? colors.textHover : colors.textBase;
        }

        const onActive = (active: boolean): void => {
            contentStyle.value["backgroundColor"] = active ? colors.backgroundActive : colors.backgroundHover;
            contentStyle.value["color"] = active ? colors.textActive : colors.textHover;
        }

        return {
            label: props.label,
            textColor: props.textColor,
            editable: props.editable,
            wrapperStyle,
            contentStyle,
            textFont,
            onHover,
            onActive
        };
    }
});
</script>