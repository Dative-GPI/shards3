<template>
    <slot />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useEditor, useMounted } from "@dative-gpi/foundation-shared-components/composables/lexical";

export default defineComponent({
    name: "FSLexicalOnChangePlugin",
    props: {
        ignoreInitialChange: {
            type: Boolean,
            default: true
        },
        ignoreSelectionChange: {
            type: Boolean,
            default: false
        }
    },
    emits: ["change"],
    setup(props, { emit }) {
        const editor = useEditor();

        useMounted(() => {
            return editor.registerUpdateListener(({ editorState, dirtyElements, dirtyLeaves, prevEditorState }) => {
                if (props.ignoreSelectionChange && dirtyElements.size === 0 && dirtyLeaves.size === 0) {
                    return;
                
                }
                if (props.ignoreInitialChange && prevEditorState.isEmpty()) {
                    return;
                }
                emit("change", editorState, editor);
            })
        });
    }
});
</script>