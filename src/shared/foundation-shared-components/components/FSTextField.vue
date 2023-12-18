<template>
    <FSCol>
        <slot name="label">
            <FSSpan
                v-if="$props.label"
                class="fs-text-field-label"
                font="text-overline"
                :style="style"
            >
                {{ $props.label }}{{ $props.required ? "*" : "" }}
            </FSSpan>
        </slot>
        <v-text-field
            class="fs-text-field"
            variant="outlined"
            hide-details
            :style="style"
            :type="$props.type"
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

export default defineComponent({
    name: "FSTextField",
    components: {
        FSSpan,
        FSCol
    },
    inheritAttrs: false,
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
        editable: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    emits: ["update:value"],
    setup(props) {
        const { color, editable } = toRefs(props);

        const colors = useColors().getVariants(color.value);
        const dark = useColors().getVariants(ColorBase.Dark);

        const style = computed(() => ({
            "--fs-text-field-cursor"    : editable.value ? "text" : "default",
            "--fs-text-field-base-color": editable.value ? dark.base : dark.light,
            "--fs-text-field-dark-color": editable.value ? colors.dark: dark.light,
            "--fs-text-field-base-text" : editable.value ? dark.base : dark.light
        }));

        return {
            style
        };
    }
});
</script>