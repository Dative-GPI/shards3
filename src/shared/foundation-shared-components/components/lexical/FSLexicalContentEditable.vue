<template>
  <div
    ref="root"
    :id="$props.id"
    :aria-activedescendant="!editable ? undefined : $props.ariaActivedescendant"
    :aria-autocomplete="!editable ? undefined : $props.ariaAutocomplete"
    :aria-controls="!editable ? undefined : $props.ariaControls"
    :aria-describedby="$props.ariaDescribedby"
    :aria-expanded="!editable ? undefined : $props.role === 'combobox' ? !!$props.ariaExpanded ? $props.ariaExpanded : undefined : undefined"
    :aria-label="$props.ariaLabel"
    :aria-labelledby="$props.ariaLabelledby"
    :aria-multiline="$props.ariaMultiline"
    :aria-owns="!editable ? undefined : $props.ariaOwns"
    :aria-required="$props.ariaRequired"
    :autocapitalize="`${$props.autoCapitalize}`"
    :autocomplete="$props.autoComplete"
    :autocorrect="`${$props.autoCorrect}`"
    :contenteditable="editable"
    :role="!editable ? undefined : $props.role"
    :spellcheck="$props.spellcheck"
    :tabindex="$props.tabindex"
  />
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

import { useEditor, useMounted } from "@dative-gpi/foundation-shared-components/composables/lexical";

export default defineComponent({
    name: "FSLexicalContentEditable",
    props: {
        ariaActivedescendant: {
            type: String,
            required: false,
            default: undefined
        },
        ariaAutocomplete: {
            type: String as PropType<"none" | "inline" | "list" | "both">,
            required: false,
            default: "none"
        },
        ariaControls: {
            type: String,
            required: false,
            default: undefined
        },
        ariaDescribedby: {
            type: String,
            required: false,
            default: undefined
        },
        ariaExpanded: {
            type: Boolean,
            required: false,
            default: undefined
        },
        ariaLabel: {
            type: String,
            required: false,
            default: undefined
        },
        ariaLabelledby: {
            type: String,
            required: false,
            default: undefined
        },
        ariaMultiline: {
            type: Boolean,
            required: false,
            default: undefined
        },
        ariaOwns: {
            type: String,
            required: false,
            default: undefined
        },
        ariaRequired: {
            type: Boolean,
            required: false,
            default: undefined
        },
        autoCapitalize: {
            type: Boolean,
            required: false,
            default: undefined
        },
        autoComplete: {
            type: Boolean,
            required: false,
            default: undefined
        },
        autoCorrect: {
            type: Boolean,
            required: false,
            default: undefined
        },
        id: {
            type: String,
            required: false,
            default: undefined
        },
        editable: {
            type: Boolean,
            required: false,
            default: true
        },
        role: {
            type: String,
            required: false,
            default: "textbox"
        },
        spellcheck: {
            type: Boolean,
            required: false,
            default: true
        },
        tabindex: {
            type: Number,
            required: false,
            default: undefined
        },
        enableGrammarly: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    setup() {
        const root = ref<HTMLElement | null>(null);
        const editable = ref(false);

        const editor = useEditor();

        useMounted(() => {
            if (root.value) {
                editor.setRootElement(root.value);
                editable.value = editor.isEditable();
            }

            return editor.registerEditableListener((currentIsEditable: boolean): void => {
                editable.value = currentIsEditable;
            })
        });

        return {
            root,
            editable
        };
    }
});
</script>