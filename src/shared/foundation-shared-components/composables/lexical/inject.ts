import type { LexicalEditor } from "lexical";
import type { InjectionKey } from "vue";

export const editorKey: InjectionKey<LexicalEditor> = Symbol("lexicalEditor");