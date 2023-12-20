<template>
    <FSCol width="hug">
        <FSRow width="hug" align="center-left">
            <FSIcon
                class="fs-radio"
                size="checkbox"
                :style="style"
                @click="onToggle"
            >
                {{ icon }}
            </FSIcon>
            <slot name="default">
                <FSSpan
                    v-if="$props.label"
                    class="fs-radio-label"
                    :style="style"
                    :font="font"
                    @click="onToggle"
                >
                    {{ $props.label }}
                </FSSpan>
            </slot>
        </FSRow>
        <slot name="description">
            <FSSpan
                v-if="$props.description"
                class="fs-radio-description"
                font="text-underline"
                :style="style"
            >
                {{ $props.description }}
            </FSSpan>
        </slot>
    </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
    name: "FSRadio",
    components: {
        FSIcon,
        FSSpan,
        FSRow,
        FSCol
    },
    props: {
        label: {
            type: String,
            required: false,
            default: null
        },
        description: {
            type: String,
            required: false,
            default: null
        },
        value: {
            type: [String, Boolean, Number],
            required: true
        },
        selected: {
            type: Boolean,
            required: false,
            default: false
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
        },
        editable: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    emits: ["update:value"],
    setup(props, { emit }) {
        const { value, selected, color, textColor, editable } = toRefs(props);

        const textColors = useColors().getVariants(textColor?.value ?? color.value);
        const colors = useColors().getVariants(color.value);

        const lights = useColors().getVariants(ColorBase.Light);
        const darks = useColors().getVariants(ColorBase.Dark);

        const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
            if (!editable.value) {
                return {
                    "--fs-radio-cursor"    : "default",
                    "--fs-radio-base-color": lights.base,
                    "--fs-radio-base-text" : darks.light
                };
            }
            return {
                "--fs-radio-cursor": selected.value ? "default" : "pointer",
                "--fs-radio-base-color": selected.value ? colors.base : textColors.base,
                "--fs-radio-base-text" : textColors.base
            };
        });

        const icon = computed((): string => selected.value ? "mdi-radiobox-marked" : "mdi-radiobox-blank");

        const font = computed((): string => selected.value ? "text-button" : "text-body");

        const onToggle = (): void => {
            if (!editable.value) {
                return;
            }
            if (!selected.value) {
                emit("update:value", value.value);
            }
        };

        return {
            style,
            icon,
            font,
            onToggle
        };
    }
});
</script>