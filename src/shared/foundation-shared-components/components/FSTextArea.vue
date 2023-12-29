<template>
    <FSCol>
        <slot name="label">
            <FSRow :wrap="false">
                <FSSpan
                    v-if="$props.label"
                    class="fs-text-area-label"
                    font="text-overline"
                    :style="style"
                >
                    {{ $props.label }}
                </FSSpan>
                <FSSpan
                    v-if="$props.label && $props.required"
                    class="fs-text-area-label"
                    style="margin-left: -8px;"
                    font="text-overline"
                    :ellipsis="false"
                    :style="style"
                >
                    *
                </FSSpan>
                <v-spacer style="min-width: 40px;" />
                <FSSpan
                    v-if="messages.length > 0"
                    class="fs-text-area-messages"
                    font="text-overline"
                    :style="style"
                >
                    {{ messages.join(", ") }}
                </FSSpan>
            </FSRow>
        </slot>
        <v-textarea
            :class="classes"
            variant="outlined"
            hide-details
            :style="style"
            :rows="$props.rows"
            :rules="$props.rules"
            :noResize="!$props.resize"
            :autoGrow="$props.autoGrow"
            :readonly="!$props.editable"
            :modelValue="$props.value"
            @update:modelValue="(value) => $emit('update:value', value)"
            v-bind="$attrs"
        >
            <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
                <slot :name="name" v-bind="slotData" />
            </template>
        </v-textarea>
        <slot name="description">
            <FSSpan
                v-if="$props.description"
                class="fs-text-area-description"
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

import { useColors, useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSTextArea",
    components: {
        FSSpan,
        FSCol,
        FSRow
    },
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            required: true,
            default: null
        },
        description: {
            type: String,
            required: false,
            default: null
        },
        value: {
            type: String,
            required: false,
            default: null
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Dark
        },
        required: {
            type: Boolean,
            required: false,
            default: false
        },
        rows: {
            type: Number,
            required: false,
            default: 1
        },
        resize: {
            type: Boolean,
            required: false,
            default: true
        },
        autoGrow: {
            type: Boolean,
            required: false,
            default: false
        },
        rules: {
            type: Array as PropType<Function[]>,
            required: false,
            default: () => []
        },
        editable: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    emits: ["update:value"],
    setup(props) {
        const { color, rows, autoGrow, editable } = toRefs(props);

        const colors = useColors().getColors(color.value);

        const errors = useColors().getColors(ColorBase.Error);
        const lights = useColors().getColors(ColorBase.Light);
        const darks = useColors().getColors(ColorBase.Dark);

        const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
            let height: string | undefined = undefined;
            let minHeight: string | undefined = undefined;
            if (!autoGrow.value) {
                const base = useBreakpoints().isMobileSized() ? 30 : 42;
                const row = useBreakpoints().isMobileSized() ? 16 : 20;
                minHeight = `${base}px`;
                if (rows.value > 1) {
                    height = `${base + (rows.value - 1) * row}px`;
                }
                else {
                    height = `${base}px`;
                }
            }
            if (!editable.value) {
                return {
                    "--fs-text-area-cursor"             : "default",
                    "--fs-text-area-border-color"       : lights.base,
                    "--fs-text-area-color"              : lights.dark,
                    "--fs-text-area-active-border-color": lights.base,
                    "--fs-text-area-min-height"         : minHeight,
                    "--fs-text-area-height"             : height
                };
            }
            return {
                "--fs-text-area-cursor"             : "text",
                "--fs-text-area-border-color"       : colors.base,
                "--fs-text-area-color"              : darks.base,
                "--fs-text-area-active-border-color": colors.dark,
                "--fs-text-area-error-color"        : errors.base,
                "--fs-text-area-error-border-color" : errors.base,
                "--fs-text-area-min-height"         : minHeight,
                "--fs-text-area-height"             : height
            };
        });

        const messages = computed(() => {
            const messages = [];
            for (const rule of props.rules) {
                const message = rule(props.value);
                if (typeof(message) === "string") {
                    messages.push(message);
                }
            }
            return messages;
        });

        const classes = computed((): string[] => {
            const classes = ["fs-text-area"];
            if (autoGrow.value) {
                classes.push("fs-text-area-auto-grow");
            }
            return classes;
        });

        return {
            messages,
            style,
            classes
        };
    }
});
</script>