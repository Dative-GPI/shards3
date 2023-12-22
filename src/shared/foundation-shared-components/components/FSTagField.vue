<template>
    <FSCol>
        <FSTextField
            :label="$props.label"
            :description="$props.description"
            :type="type"
            :color="$props.color"
            :required="$props.required"
            :editable="$props.editable"
            :value="innerValue"
            @update:value="(value) => innerValue = value"
            @keydown.enter="onAdd"
            v-bind="$attrs"
        >
            <template #append-inner>
                <FSIcon
                    class="fs-tag-field-icon"
                    size="m"
                    :style="style"
                    @click="onAdd"
                >
                    mdi-tag-outline
                </FSIcon>
            </template>
            <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
                <slot :name="name" v-bind="slotData" />
            </template>
        </FSTextField>
        <FSTagGroup
            :tags="$props.value"
            :variant="$props.variant"
            :color="$props.tagColor"
            :editable="$props.editable"
            @remove="onRemove"
        />
    </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase } from "@dative-gpi/foundation-shared-components/themes";

import FSTextField from "./FSTextField.vue";
import FSTagGroup from "./FSTagGroup.vue";
import FSCol from "./FSCol.vue"

export default defineComponent({
    name: "FSTagField",
    components: {
        FSTextField,
        FSTagGroup,
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
            type: Array as PropType<string[]>,
            required: false,
            default: () => []
        },
        variant: {
            type: String as PropType<"standard" | "full">,
            required: false,
            default: "full"
        },
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Primary
        },
        tagColor: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Primary
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
        const { value, editable } = toRefs(props);

        const innerValue = ref("");

        const darks = useColors().getColors(ColorBase.Dark);

        const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
            if (!editable.value) {
                return {
                    "--fs-tag-field-cursor"   : "default",
                    "--fs-tag-field-base-text": darks.light,
                    "--fs-tag-field-dark-text": darks.light
                };
            }
            return {
                "--fs-tag-field-cursor"   : "pointer",
                "--fs-tag-field-base-text": darks.base,
                "--fs-tag-field-dark-text": darks.dark
            };
        });

        const onAdd = (): void => {
            if (!editable.value) {
                return;
            }
            const tags = value.value ?? [];

            console.log(tags);

            if (!innerValue.value.length || tags.includes(innerValue.value)) {
                return;
            }
            emit("update:value", tags.concat(innerValue.value));
            innerValue.value = "";
        }

        const onRemove = (label: string): void => {
            if (!editable.value) {
                return;
            }
            const tags = value.value ?? [];
            if (!tags.length || !tags.includes(label)) {
                return;
            }
            emit("update:value", tags.filter(t => t !== label));
        }

        return {
            innerValue,
            style,
            onAdd,
            onRemove
        };
    }
});
</script>