<template>
    <slot />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useDecorators, useEditor } from "@dative-gpi/foundation-shared-components/composables/lexical";

export default defineComponent({
    name: "FSLexicalDecoratedTeleports",
    setup() {
        const editor = useEditor();
        const decorators = useDecorators(editor);

        return {
            decorators
        };
    }
});
</script>