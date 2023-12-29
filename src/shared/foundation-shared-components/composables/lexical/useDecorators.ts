import { DefineComponent, Teleport, computed, h, ref, unref } from "vue";
import { LexicalEditor } from "lexical";

import { useMounted } from "./useMounted";

export const useDecorators = (editor: LexicalEditor) => {
    const decorators = ref<Record<string, DefineComponent>>(editor.getDecorators());

    useMounted(() => {
        return editor.registerDecoratorListener((nextDecorators) => {
            decorators.value = nextDecorators as Record<string, DefineComponent>
        });
    });

    return computed(() => {
        const decoratedTeleports: any[] = [];
        const decoratorKeys = Object.keys(unref(decorators));
        for (let i = 0; i < decoratorKeys.length; i++) {
            const nodeKey = decoratorKeys[i]
            const vueDecorator = decorators.value[nodeKey]
            const element = editor.getElementByKey(nodeKey)
            if (element !== null) {
                decoratedTeleports.push(h(Teleport as unknown as DefineComponent, { to: element }, vueDecorator));
            }
        }
        return decoratedTeleports;
    });
}