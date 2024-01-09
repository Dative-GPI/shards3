<template>
    <FSTextField
        :label="$props.label"
        :description="$props.description"
        :type="type"
        :color="$props.color"
        :required="$props.required"
        :editable="$props.editable"
        :modelValue="$props.modelValue"
        @update:modelValue="(value) => $emit('update:modelValue', value)"
        v-bind="$attrs"
    >
        <template #append-inner>
            <slot name="append-inner">
                <FSIcon
                    class="fs-password-field-icon"
                    size="m"
                    :style="style"
                    @click="onToggle"
                >
                    {{ icon }}
                </FSIcon>
            </slot>
        </template>
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
            <slot :name="name" v-bind="slotData" />
        </template>
    </FSTextField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSTextField from "./FSTextField.vue";
import FSIcon from "./FSIcon.vue";

export default defineComponent({
    name: "FSPasswordField",
    components: {
        FSTextField,
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
        modelValue: {
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
    emits: ["update:modelValue"],
    setup(props) {
        const { editable } = toRefs(props);

        const stars = ref(true);

        const lights = useColors().getColors(ColorBase.Light);
        const darks = useColors().getColors(ColorBase.Dark);

        const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
            if (!editable.value) {
                return {
                    "--fs-password-field-cursor"   : "default",
                    "--fs-password-field-base-text": lights.dark,
                    "--fs-password-field-dark-text": lights.dark
                };
            }
            return {
                "--fs-password-field-cursor"   : "pointer",
                "--fs-password-field-base-text": darks.base,
                "--fs-password-field-dark-text": darks.dark
            };
        });

        const type = computed((): string => stars.value ? "password" : "text");

        const icon = computed((): string => stars.value ? "mdi-eye-off-outline" : "mdi-eye-outline");

        const onToggle = (): void => {
            if (!editable.value) {
                return;
            }
            stars.value = !stars.value;
        };

        return {
            type,
            icon,
            style,
            onToggle
        };
    }
});
</script>