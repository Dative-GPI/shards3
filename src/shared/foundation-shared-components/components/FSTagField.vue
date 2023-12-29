<template>
    <FSCol>
        <FSTextField
            :label="$props.label"
            :description="$props.description"
            :type="type"
            :color="$props.color"
            :required="$props.required"
            :editable="$props.editable"
            :error="messages.length > 0"
            :value="innerValue"
            @update:value="(value) => innerValue = value"
            @keydown.enter="onAdd"
            v-bind="$attrs"
        >
            <template #label>
                <slot name="label">
                    <FSRow :wrap="false">
                        <FSSpan
                            v-if="$props.label"
                            class="fs-tag-field-label"
                            font="text-overline"
                            :style="style"
                        >
                            {{ $props.label }}
                        </FSSpan>
                        <FSSpan
                            v-if="$props.label && $props.required"
                            class="fs-tag-field-label"
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
                            class="fs-tag-field-messages"
                            font="text-overline"
                            :style="style"
                        >
                            {{ messages.join(", ") }}
                        </FSSpan>
                    </FSRow>
                </slot>
            </template>
            <template #append-inner>
                <slot name="append-inner">
                    <FSIcon
                        class="fs-tag-field-icon"
                        size="m"
                        :style="style"
                        @click="onAdd"
                    >
                        mdi-tag-outline
                    </FSIcon>
                </slot>
            </template>
            <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
                <slot :name="name" v-bind="slotData" />
            </template>
        </FSTextField>
        <FSTagGroup
            :tags="$props.value"
            :variant="$props.tagVariant"
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
import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
    name: "FSTagField",
    components: {
        FSTextField,
        FSTagGroup,
        FSSpan,
        FSCol,
        FSRow
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
        color: {
            type: String as PropType<ColorBase>,
            required: false,
            default: ColorBase.Dark
        },
        tagVariant: {
            type: String as PropType<"standard" | "full">,
            required: false,
            default: "full"
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
    setup(props, { emit }) {
        const { value, rules, editable } = toRefs(props);

        const innerValue = ref("");

        const errors = useColors().getColors(ColorBase.Error);
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
                "--fs-tag-field-cursor"     : "pointer",
                "--fs-tag-field-base-text"  : darks.base,
                "--fs-tag-field-dark-text"  : darks.dark,
                "--fs-tag-field-error-color": errors.base
            };
        });

        const messages = computed((): string[] => {
            const messages = [];
            for (const rule of rules.value) {
                const message = rule(props.value);
                if (typeof(message) === "string") {
                    messages.push(message);
                }
            }
            return messages;
        });

        const onAdd = (): void => {
            if (!editable.value) {
                return;
            }
            const tags = value.value ?? [];
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
            messages,
            style,
            onAdd,
            onRemove
        };
    }
});
</script>