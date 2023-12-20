<template>
    <FSTextField
        :label="$props.label"
        :description="$props.description"
        :type="type"
        :color="$props.color"
        :textColor="$props.textColor"
        :required="$props.required"
        :editable="$props.editable"
        :value="innerValue"
        @update:value="(value) => innerValue = value"
        v-bind="$attrs"
    >
        <template #append>
            <FSButton
                variant="standard"
                :prependIcon="$props.buttonPrependIcon"
                :label="$props.buttonLabel"
                :appendIcon="$props.buttonAppendIcon"
                :color="$props.buttonColor"
                :textColor="$props.buttonTextColor"
                :editable="$props.editable"
                @click="onUpdate"
            />
        </template>
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData" />
        </template>
    </FSTextField>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref, ref, toRefs } from "vue";

import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSTextField from "./FSTextField.vue";
import FSButton from "./FSButton.vue";
import FSIcon from "./FSIcon.vue";

export default defineComponent({
    name: "FSSearchField",
    components: {
        FSTextField,
        FSButton,
        FSIcon
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
        buttonPrependIcon: {
            type: String,
            required: false,
            default: "mdi-magnify"
        },
        buttonLabel: {
            type: String,
            required: false,
            default: null
        },
        buttonAppendIcon: {
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
        textColor: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Dark
        },
        buttonColor: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Primary
        },
        buttonTextColor: {
            type: String as PropType<ColorBase>,
            required: false,
            default: null
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
    setup(props, { emit }) {
        const { editable } = toRefs(props);

        const innerValue: Ref<String> = ref(props.value);

        const onUpdate = (): void => {
            if (!editable.value) {
                return;
            }
            emit("update:value", innerValue.value);
        };

        return {
            innerValue,
            onUpdate
        };
    }
});
</script>