import type { EditorState, LexicalEditor } from "lexical";
import type { Ref } from "vue";

export type Class<T> = new (...args: any[]) => T;
export type MaybeRef<T> = Ref<T> | T;
export type InitialEditorStateType = null | string | EditorState | ((editor: LexicalEditor) => void);