<template>
    <FSCol width="hug">
        <FSRow width="hug" align="center-left">
            <FSIcon
                class="fs-checkbox"
                size="checkbox"
                :style="style"
                @click="onToggle"
            >
                {{ icon }}
            </FSIcon>
            <slot name="default">
                <FSSpan
                    v-if="$props.label"
                    class="fs-checkbox-label"
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
                class="fs-checkbox-description"
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
    name: "FSCheckbox",
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
            type: Boolean,
            required: false,
            default: false
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Primary
        },
        editable: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    emits: ["update:value"],
    setup(props, { emit }) {
        const { value, color, editable } = toRefs(props);

        const colors = useColors().getVariants(color.value);
        const dark = useColors().getVariants(ColorBase.Dark);

        const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => ({
            "--fs-checkbox-cursor"    : editable.value ? "pointer" : "default",
            "--fs-checkbox-base-color": editable.value ? value.value ? colors.base : dark.base : dark.light,
            "--fs-checkbox-base-text" : editable.value ? dark.base : dark.light
        }));

        const icon = computed((): string => value.value ? "mdi-checkbox-marked" : "mdi-checkbox-blank-outline");

        const font = computed((): string => value.value ? "text-button" : "text-body");

        const onToggle = (): void => {
            if (!editable.value) {
                return;
            }
            emit("update:value", !value.value);
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