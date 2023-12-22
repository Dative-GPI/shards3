<template>
    <FSCol>
        <slot name="label">
            <FSRow :wrap="false">
                <FSSpan
                    v-if="$props.label"
                    class="fs-text-field-label"
                    font="text-overline"
                    :style="style"
                >
                    {{ $props.label }}
                </FSSpan>
                <FSSpan
                    v-if="$props.label && $props.required"
                    class="fs-text-field-label"
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
                    class="fs-text-field-messages"
                    font="text-overline"
                    :style="style"
                >
                    {{ messages.join(", ") }}
                </FSSpan>
            </FSRow>
        </slot>
        <v-text-field
            class="fs-text-field"
            variant="outlined"
            hide-details
            :style="style"
            :type="$props.type"
            :rules="$props.rules"
            :readonly="!$props.editable"
            :modelValue="$props.value"
            @update:modelValue="(value) => $emit('update:value', value)"
            v-bind="$attrs"
        >
            <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
                <slot :name="name" v-bind="slotData" />
            </template>
        </v-text-field>
        <slot name="description">
            <FSSpan
                v-if="$props.description"
                class="fs-text-field-description"
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
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSTextField",
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
        type: {
            type: String as PropType<"text" | "password" | "number">,
            required: false,
            default: "text"
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
        const { color, editable } = toRefs(props);

        const colors = useColors().getColors(color.value);

        const errors = useColors().getColors(ColorBase.Error);
        const lights = useColors().getColors(ColorBase.Light);
        const darks = useColors().getColors(ColorBase.Dark);

        const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
            if (!editable.value) {
                return {
                    "--fs-text-field-cursor"             : "default",
                    "--fs-text-field-border-color"       : lights.base,
                    "--fs-text-field-color"              : lights.dark,
                    "--fs-text-field-active-border-color": lights.base
                };
            }
            return {
                "--fs-text-field-cursor"             : "text",
                "--fs-text-field-border-color"       : colors.base,
                "--fs-text-field-color"              : darks.base,
                "--fs-text-field-active-border-color": colors.dark,
                "--fs-text-field-error-color"        : errors.base,
                "--fs-text-field-error-border-color" : errors.base
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

        return {
            messages,
            style
        };
    }
});
</script>