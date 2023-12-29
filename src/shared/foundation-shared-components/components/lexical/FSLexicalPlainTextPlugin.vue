

<template>
  <slot v-if="showPlaceholder" name="placeholder" />
  <slot name="contentEditable" />
  <FSLexicalDecoratedTeleports />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useCanShowPlaceholder, useEditor, usePlainTextSetup } from "@dative-gpi/foundation-shared-components/composables/lexical";

import FSLexicalDecoratedTeleports from "./FSLexicalDecoratedTeleports.vue";

export default defineComponent({
    name: "FSLexicalPlainTextPlugin",
    components: {
        FSLexicalDecoratedTeleports
    },
    setup() {
        const editor = useEditor();

        useCanShowPlaceholder(editor);
        usePlainTextSetup(editor);
    }
});
</script>