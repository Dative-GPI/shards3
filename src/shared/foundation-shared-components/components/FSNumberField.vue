<template>
    <FSTextField
        type="number"
        :label="$props.label"
        :description="$props.description"
        :color="$props.color"
        :required="$props.required"
        :editable="$props.editable"
        :value="$props.value?.toString()"
        @update:value="(value) => $emit('update:value', isNaN(parseFloat(value)) ? 0 : parseFloat(value))"
        v-bind="$attrs"
    >
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData" />
        </template>
    </FSTextField>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSTextField from "./FSTextField.vue";

export default defineComponent({
    name: "FSNumberField",
    components: {
        FSTextField
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
            type: Number,
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
    emits: ["update:value"]
});
</script>