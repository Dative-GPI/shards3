<template>
    <v-btn
         v-if="!['icon'].includes($props.variant)"
        :ripple="false"
        :style="style"
        :class="classes"
        @click="onClick"
        v-bind="$attrs"
    >
        <FSRow :wrap="false">
            <slot name="prepend" :color="color" :colors="colors">
                <FSIcon v-if="$props.prependIcon" size="m">
                    {{ $props.prependIcon }}
                </FSIcon>
            </slot>
            <slot name="default" :color="color" :colors="colors">
                <FSSpan v-if="$props.label" font="text-body">
                    {{ $props.label }}
                </FSSpan>
            </slot>
            <slot name="append" :color="color" :colors="colors">
                <FSIcon v-if="$props.appendIcon" size="m">
                    {{ $props.appendIcon }}
                </FSIcon>
            </slot>
        </FSRow>
    </v-btn>
    <FSRow
        v-else-if="$props.icon"
        width="hug"
        :style="style"
        :class="classes"
        @click="onClick"
        v-bind="$attrs"
    >
        <FSIcon size="checkbox">
            {{ $props.icon }}
        </FSIcon>
    </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs, useSlots } from "vue";

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
        prependIcon: {
            type: String,
            required: false,
            default: null
        },
        label: {
            type: String,
            required: false,
            default: null
        },
        appendIcon: {
            type: String,
            required: false,
            default: null
        },
        icon: {
            type: String,
            required: false,
            default: null
        },
        variant: {
            type: String as PropType<"standard" | "full" | "icon">,
            required: false,
            default: "standard"
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Primary
        },
        textColor: {
            type: String as PropType<ColorBase>,
            required: false,
            default: null
        },
        editable: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    emts: ["click"],
    setup(props, { emit }) {
        const { label, variant, color, textColor, editable } = toRefs(props);

        const textColors = useColors().getTexts(color.value, (textColor?.value ?? color.value));
        const colors = useColors().getVariants(color.value);
        const slots = useSlots();

        const lights = useColors().getVariants(ColorBase.Light);
        const darks = useColors().getVariants(ColorBase.Dark);

        const isEmpty = computed(() => {
            return !slots.default && !label.value;
        });

        const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
            if (!editable.value) {
                return {
                    "--fs-button-padding"    : !isEmpty.value ? "0 16px" : "0",
                    "--fs-button-light-color": lights.base,
                    "--fs-button-base-color" : lights.base,
                    "--fs-button-light-text" : darks.light,
                    "--fs-button-base-text"  : darks.light
                };
            }
            switch (variant.value) {
                case "standard": return {
                    "--fs-button-padding"    : !isEmpty.value ? "0 16px" : "0",
                    "--fs-button-light-color": colors.light,
                    "--fs-button-base-color" : colors.base,
                    "--fs-button-dark-color" : colors.dark,
                    "--fs-button-light-text" : textColors.light,
                    "--fs-button-base-text"  : textColors.base,
                    "--fs-button-dark-text"  : textColors.dark
                };
                case "full": return {
                    "--fs-button-padding"    : !isEmpty.value ? "0 16px" : "0",
                    "--fs-button-light-color": colors.base,
                    "--fs-button-base-color" : colors.base,
                    "--fs-button-dark-color" : colors.dark,
                    "--fs-button-light-text" : textColors.base,
                    "--fs-button-base-text"  : textColors.base,
                    "--fs-button-dark-text"  : textColors.dark

                };
                case "icon": return {
                    "--fs-button-light-text": colors.base,
                    "--fs-button-base-text" : colors.dark
                };
            }
        });

        const classes = computed((): string[] => {
            const classes = [];
            if (!editable.value) {
                classes.push("fs-button--disabled");
            }
            switch (variant.value) {
                case "icon":
                    classes.push("fs-button-icon");
                    break;
                default:
                    classes.push("fs-button");
                    break;
            }
            return classes;
        });

        const onClick = () => {
            if (!editable.value) {
                return;
            }
            emit("click");
        }

        return {
            colors,
            color,
            style,
            classes,
            onClick
        };
    }
});
</script>