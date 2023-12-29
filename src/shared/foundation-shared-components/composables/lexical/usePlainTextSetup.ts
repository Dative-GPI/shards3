import { registerPlainText } from "@lexical/plain-text";
import { mergeRegister } from "@lexical/utils";
import { LexicalEditor } from "lexical";

import { useMounted } from "./useMounted";

export const usePlainTextSetup = (editor: LexicalEditor) => {
  useMounted(() => {
    return mergeRegister(registerPlainText(editor));
  });
}