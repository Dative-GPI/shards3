import { $canShowPlaceholderCurry } from "@lexical/text";
import { mergeRegister } from "@lexical/utils";
import { LexicalEditor } from "lexical";
import { readonly, ref } from "vue"

import { useMounted } from "./useMounted";

const canShowPlaceholderFromCurrentEditorState = (editor: LexicalEditor): boolean => {
  return editor.getEditorState().read($canShowPlaceholderCurry(editor.isComposing()));
}

export const useCanShowPlaceholder = (editor: LexicalEditor) => {
  const initialState = canShowPlaceholderFromCurrentEditorState(editor);
  const canShowPlaceholder = ref(initialState);

  function resetCanShowPlaceholder() {
    canShowPlaceholder.value = canShowPlaceholderFromCurrentEditorState(editor);
  }

  useMounted(() => {
    return mergeRegister(
      editor.registerUpdateListener(() => {
        resetCanShowPlaceholder();
      }),
      editor.registerEditableListener(() => {
        resetCanShowPlaceholder();
      }),
    );
  });

  return readonly(canShowPlaceholder);
}