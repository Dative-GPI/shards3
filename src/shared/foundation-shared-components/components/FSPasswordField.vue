<template>
    <FSTextField
        :label="$props.label"
        :description="$props.description"
        :type="type"
        :color="$props.color"
        :required="$props.required"
        :editable="$props.editable"
        :value="$props.value"
        @update:value="(value) => $emit('update:value', value)"
        v-bind="$attrs"
    >
        <template #append>
            <FSIcon
                class="fs-password-field-icon"
                size="m"
                :style="style"
                @click="onToggle"
            >
                {{ icon }}
            </FSIcon>
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
        const { editable } = toRefs(props);

        const stars = ref(true);

        const type = computed(() => stars.value ? "password" : "text");

        const icon = computed(() => stars.value ? "mdi-eye-off-outline" : "mdi-eye-outline");

        const dark = useColors().getVariants(ColorBase.Dark);

        const style = computed(() => ({
            "--fs-password-field-cursor"   : editable.value ? "pointer" : "default",
            "--fs-password-field-base-text": editable.value ? dark.base : dark.light
        }));

        const onToggle = () => {
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