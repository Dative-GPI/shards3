<template>
    <div class="fs-rich-text-field">
        <FSLexicalComposer :initial-config="config" @error="onError">
            <FSLexicalPlainTextPlugin>
                <template #contentEditable>
                    <FSLexicalContentEditable />
                </template>
                <template #placeholder>
                    <div> Enter some text... </div>
                </template>
            </FSLexicalPlainTextPlugin>
            <FSLexicalOnChangePlugin @change="onChange" />
        </FSLexicalComposer>
    </div>
</template>

<script lang="ts">
import { $getRoot, $getSelection } from "lexical";
import { defineComponent } from "vue";

import FSLexicalDecoratedTeleports from "./lexical/FSLexicalDecoratedTeleports.vue";
import FSLexicalContentEditable from "./lexical/FSLexicalContentEditable.vue";
import FSLexicalPlainTextPlugin from "./lexical/FSLexicalPlainTextPlugin.vue";
import FSLexicalOnChangePlugin from "./lexical/FSLexicalOnChangePlugin.vue";
// import FSLexicalHistoryPlugin from "./lexical/FSLexicalHistoryPlugin.vue";
import FSLexicalComposer from "./lexical/FSLexicalComposer.vue";

export default defineComponent({
    name: "FSRichTextField",
    components: {
        FSLexicalDecoratedTeleports,
        FSLexicalContentEditable,
        FSLexicalPlainTextPlugin,
        FSLexicalOnChangePlugin,
        FSLexicalComposer,
    },
    props: {
    },
    setup() {
        const config = {
            editable: true
        }

        const onError = (error): void => {
            console.error(error);
        }

        const onChange = (editorState): void =>  {
            editorState.read(() => {
                const root = $getRoot()
                const selection = $getSelection()
            });
        }

        return {
            config,
            onError,
            onChange
        }
    }
});
</script>