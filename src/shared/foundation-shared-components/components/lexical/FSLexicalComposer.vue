<template>
  <slot />
</template>

<script lang="ts">
import { $createParagraphNode, $getRoot, $getSelection, createEditor } from "lexical";
import { defineComponent, onMounted, provide, PropType, ref } from "vue";
import { CreateEditorArgs, LexicalEditor } from "lexical";

import { editorKey, InitialEditorStateType } from "@dative-gpi/foundation-shared-components/composables/lexical";

export default defineComponent({
    name: "FSLexicalComposer",
    props: {
        initialConfig: {
            type: Object as PropType<CreateEditorArgs>,
            required: true
        }
    },
    emits: ["error"],
    setup(props, { emit }) {
        const initialConfig = ref(props.initialConfig as CreateEditorArgs);

        const HISTORY_MERGE_OPTIONS = {
            tag: "history-merge"
        };

        const initializeEditor = ( editor: LexicalEditor, initialEditorState?: InitialEditorStateType): void => {
            if (initialEditorState === null) {
                return;
            }
            if (initialEditorState === undefined) {
                editor.update(() => {
                    const root = $getRoot()
                    if (root.isEmpty()) {
                        const paragraph = $createParagraphNode();
                        root.append(paragraph);
                        const activeElement = document.activeElement;
                        if ($getSelection() !== null || (activeElement !== null && activeElement === editor.getRootElement())) {
                            paragraph.select();
                        }
                    }
                }, HISTORY_MERGE_OPTIONS);
            }
            else if (initialEditorState !== null) {
                switch (typeof initialEditorState) {
                    case 'string': {
                        const parsedEditorState = editor.parseEditorState(initialEditorState);
                        editor.setEditorState(parsedEditorState, HISTORY_MERGE_OPTIONS);
                        break;
                    }
                    case 'object': {
                        editor.setEditorState(initialEditorState, HISTORY_MERGE_OPTIONS);
                        break;
                    }
                    case 'function': {
                        editor.update(() => {
                            const root = $getRoot();
                            if (root.isEmpty()) {
                                initialEditorState(editor);
                            }
                        }, HISTORY_MERGE_OPTIONS)
                        break
                    }
                }
            }
        }

        const editor = createEditor({
            editable: false,
            namespace: initialConfig.value.namespace,
            nodes: initialConfig.value.nodes,
            theme: initialConfig.value.theme,
            onError(error) {
                emit('error', error)
            }
        });

        initializeEditor(editor, initialConfig.value.editorState);

        provide(editorKey, editor);

        onMounted(() => {
            editor.setEditable(initialConfig.value.editable || false);
        })
    }
});
</script>