<template>
    <FSCol width="hug">
        <FSRow width="hug" align="center-left">
            <v-switch
                class="fs-switch"
                hide-details
                inset
                :style="style"
                :ripple="false"
                :modelValue="$props.value"
                @update:modelValue="onToggle"
                v-bind="$attrs"
            />
            <slot name="default">
                <FSSpan
                    v-if="$props.label"
                    class="fs-switch-label"
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
                class="fs-switch-description"
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

import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
    name: "FSSwitch",
    components: {
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

        const colors = useColors().getColors(color.value);

        const backgrounds = useColors().getColors(ColorBase.Background);
        const lights = useColors().getColors(ColorBase.Light);
        const darks = useColors().getColors(ColorBase.Dark);

        const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
            if (!editable.value) {
                return {
                    "--fs-switch-translate-x": value.value ? "8px" : "-8px",
                    "--fs-switch-cursor": "default",
                    "--fs-switch-track-color": lights.dark,
                    "--fs-switch-thumb-color": backgrounds.base,
                    "--fs-switch-color": lights.dark
                };
            }
            return {
                "--fs-switch-translate-x": value.value ? "8px" : "-8px",
                "--fs-switch-cursor": "pointer",
                "--fs-switch-track-color": value.value ? colors.base : darks.base,
                "--fs-switch-thumb-color": backgrounds.base,
                "--fs-switch-color": darks.base
            };
        });

        const font = computed((): string => value.value ? "text-button" : "text-body");

        const onToggle = (): void => {
            if (!editable.value) {
                return;
            }
            emit("update:value", !value.value);
        }

        return {
            editable,
            style,
            font,
            onToggle
        };
    }
});
</script>