<template>
  <FSCol>
    <FSRow v-if="!readonly">
      <slot name="label">
        <FSRow :wrap="false">
          <FSSpan
            v-if="$props.label"
            class="fs-rich-text-field-label"
            font="text-overline"
            :style="style"
          >
            {{ $props.label }}
          </FSSpan>
          <FSSpan
            v-if="$props.label && $props.required"
            class="fs-rich-text-field-label"
            style="margin-left: -8px;"
            font="text-overline"
            :ellipsis="false"
            :style="style"
          >
            *
          </FSSpan>
        </FSRow>
      </slot>
      <v-spacer />
      <template v-if="$props.editable">
        <FSIcon
          class="fs-rich-text-field-icon"
          :color="toolbarColors.undo"
          :style="style"
          @click="editor.dispatchCommand(UNDO_COMMAND)"
        >
          mdi-undo-variant
        </FSIcon>
        <v-divider vertical />
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="formatText('h1')"
        >
          mdi-format-header-1
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="formatText('h2')"
        >
          mdi-format-header-2
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="formatText('h3')"
        >
          mdi-format-header-3
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="formatParagraph()"
        >
          mdi-format-paragraph
        </FSIcon>
        <v-divider vertical />
        <FSIcon
          class="fs-rich-text-field-icon"
          :color="toolbarColors.bold"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')"
        >
          mdi-format-bold
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :color="toolbarColors.italic"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')"
        >
          mdi-format-italic
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :color="toolbarColors.underline"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')"
        >
          mdi-format-underline
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :color="toolbarColors.strikethrough"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')"
        >
          mdi-format-strikethrough
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :color="toolbarColors.link"
          :style="style"
          @click="openLink"
        >
          mdi-link
        </FSIcon>
        <v-divider vertical />
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left')"
        >
          mdi-format-align-left
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center')"
        >
          mdi-format-align-center
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right')"
        >
          mdi-format-align-right
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify')"
        >
          mdi-format-align-justify
        </FSIcon>
      </template>
    </FSRow>
    <div
      class="fs-rich-text-field"
      :id="id"
      :style="style"
      :contenteditable="!readonly && $props.editable"
    />
    <FSTextField
      v-if="isLink && !readonly && $props.editable"
      :hideHeader="true"
      @keypress.enter.stop="toggleLink"
      v-model="linkUrl"
    />
    <slot name="description">
      <FSSpan
        v-if="!readonly && $props.description"
        class="fs-rich-text-field-description"
        font="text-underline"
        :style="style"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
</template>

<script lang="ts">
import { $createParagraphNode, $getSelection, $isElementNode, $isRangeSelection, $setSelection, CAN_UNDO_COMMAND, createEditor, ElementNode, FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND, ParagraphNode, UNDO_COMMAND } from "lexical";
import { $createHeadingNode, HeadingNode, HeadingTagType, registerRichText } from "@lexical/rich-text";
import { createEmptyHistoryState, registerHistory } from "@lexical/history";
import { computed, defineComponent, onMounted, PropType, ref } from "vue";
import { $createLinkNode, $isLinkNode, LinkNode } from "@lexical/link";
import { $wrapNodes } from "@lexical/selection";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { getAncestor, getSelectedNode } from "@dative-gpi/foundation-shared-components/utils";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSTextField from "./FSTextField.vue";
import FSIcon from "../FSIcon.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSRichTextField",
  components: {
    FSTextField,
    FSIcon,
    FSCol,
    FSRow
  },
  props: {
    label: {
      type: String,
      required: false,
      default: null
    },
    description: {
      type: String,
      required: false,
      default: null
    },
    modelValue: {
      type: String,
      required: false,
      default: null
    },
    linkColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    rows: {
        type: Number,
        required: false,
        default: 5
    },
    variant: {
      type: String as PropType<"standard" | "readonly">,
      required: false,
      default: "standard"
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { isMobileSized } = useBreakpoints();
    const { getColors } = useColors();

    const linkColors = computed(()=> getColors(props.linkColor));
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const canUndo = ref(false);
    const isLink = ref(false);
    const isBold = ref(false);
    const isItalic = ref(false);
    const isUnderline = ref(false);
    const isStrikethrough = ref(false);

    const id = `${Math.random()}-editor`;

    const linkUrl = ref("https://");

    const config = {
      namespace: "MyEditor",
      theme: {
        paragraph: 'text-body',
        heading: {
          h1: 'text-h1',
          h2: 'text-h2',
          h3: 'text-h3'
        },
        link: 'editor-link',
        text: {
          bold: 'editor-text-bold',
          italic: 'editor-text-italic',
          underline: 'editor-text-underline',
          strikethrough: 'editor-text-strikethrough',
          underlineStrikethrough: 'editor-text-underline-strikethrough'
        }
      },
      nodes: [
        HeadingNode,
        LinkNode,
        ParagraphNode
      ],
      onError: console.error
    }

    const editor = createEditor(config);

    onMounted((): void => {
      const contentEditableElement = document.getElementById(id);
      editor.setRootElement(contentEditableElement);
      registerRichText(editor);
      registerHistory(editor, createEmptyHistoryState(), 250);

      if (props.modelValue != null) {
        editor.update((): void => {
          editor.setEditorState(editor.parseEditorState(props.modelValue));
        });
      }
    });

    const readonly = computed((): boolean => {
      return ["readonly"].includes(props.variant);
    });

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      let minHeight: string | undefined = undefined;
      const base = isMobileSized.value ? 30 : 42;
      const row = isMobileSized.value ? 16 : 20;
      if (props.rows > 1) {
        minHeight = `${base + (props.rows - 1) * row}px`;
      }
      else {
        minHeight = `${base}px`;
      }

      switch (props.variant) {
        case "standard": {
          if (!props.editable) {
            return {
              "--fs-rich-text-field-undo-cursor"        : "default",
              "--fs-rich-text-field-icon-cursor"        : "default",
              "--fs-rich-text-field-border-color"       : lights.base,
              "--fs-rich-text-field-color"              : lights.dark,
              "--fs-rich-text-field-active-border-color": lights.base,
              "--fs-rich-text-field-link-color"         : linkColors.value.light,
              "--fs-rich-text-field-min-height"         : minHeight
            };
          }
          else {
            return {
              "--fs-rich-text-field-undo-cursor"        : canUndo ? "pointer" : "default",
              "--fs-rich-text-field-icon-cursor"        : "pointer",
              "--fs-rich-text-field-border-color"       : lights.dark,
              "--fs-rich-text-field-color"              : darks.base,
              "--fs-rich-text-field-active-border-color": darks.dark,
              "--fs-rich-text-field-link-color"         : linkColors.value.dark,
              "--fs-rich-text-field-min-height"         : minHeight
            };
          }
        };
        case "readonly": return {
            "--fs-rich-text-field-border-color"       : "transparent",
            "--fs-rich-text-field-color"              : darks.base,
            "--fs-rich-text-field-active-border-color": "transparent",
            "--fs-rich-text-field-link-color"         : linkColors.value.dark,
            "--fs-rich-text-field-min-height"         : minHeight
        }
      }
    });

    const toolbarColors = computed((): {[code: string]: string} => {
      if (props.editable) {
        return {
          undo: canUndo.value ? darks.base : lights.base,
          bold: isBold.value ? darks.base : lights.base,
          italic: isItalic.value ? darks.base : lights.base,
          underline: isUnderline.value ? darks.base : lights.base,
          strikethrough: isStrikethrough.value ? darks.base : lights.base,
          link: isLink.value ? darks.base : lights.base
        };
      }
      else {
        return {
          undo: lights.base,
          bold: lights.base,
          italic: lights.base,
          underline: lights.base,
          strikethrough: lights.base,
          link: lights.base
        };
      }
    });

    const updateToolbar = (): void => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        isBold.value = selection.hasFormat("bold");
        isItalic.value = selection.hasFormat("italic");
        isUnderline.value = selection.hasFormat("underline");
        isStrikethrough.value = selection.hasFormat("strikethrough");
        isLink.value = $isLinkNode(getSelectedNode(selection)) || $isLinkNode(getSelectedNode(selection).getParent());
      }
    };

    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateToolbar();
        emit("update:modelValue", JSON.stringify(editorState.toJSON()));
      });
    });

    editor.registerCommand(CAN_UNDO_COMMAND, (payload) => {
      canUndo.value = payload;
      return false;
    }, 1);

    const formatText = (type: HeadingTagType) => {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createHeadingNode(type));
        }
      });
    };

    const formatParagraph = (): void => {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createParagraphNode());
        }
      });
    };

    const openLink = (): void => {
      if (!isLink.value) {
        isLink.value = true;
      }
      else {
        editor.update(() => {
          const selection = $getSelection();

          if ($isRangeSelection(selection)) {
            toggleLink();
          }
        }); 
      }
    };

    const toggleLink = (): void => {
      editor.update(() => {
        const target = "_blank";
        const title = "";
        const rel = "noreferrer";
        const selection = $getSelection();
        $setSelection(null);

        const nodes = selection.extract();

        if (linkUrl.value === null) {
          // Remove LinkNodes
          nodes.forEach((node) => {
            const parent = node.getParent();

            if ($isLinkNode(parent)) {
              const children = parent.getChildren();

              for (let i = 0; i < children.length; i++) {
                parent.insertBefore(children[i]);
              }

              parent.remove();
            }
          });
        }
        else {
          if (nodes.length === 1) {
            const firstNode = nodes[0];
            const linkNode = getAncestor(firstNode, $isLinkNode);

            if (linkNode !== null) {
              linkNode.setURL(linkUrl.value);
              if (target !== undefined) {
                linkNode.setTarget(target);
              }
              if (rel !== null) {
                linkNode.setRel(rel);
              }
              if (title !== undefined) {
                linkNode.setTitle(title);
              }
              return;
            }
          }

          let prevParent: ElementNode | LinkNode | null = null;
          let linkNode: LinkNode | null = null;

          nodes.forEach((node) => {
            const parent = node.getParent();

            if ( parent === linkNode || parent === null || ($isElementNode(node) && !node.isInline())) {
              return;
            }

            if ($isLinkNode(parent)) {
              linkNode = parent;
              parent.setURL(linkUrl.value);
              if (target !== undefined) {
                parent.setTarget(target);
              }
              if (rel !== null) {
                linkNode.setRel(rel);
              }
              if (title !== undefined) {
                linkNode.setTitle(title);
              }
              return;
            }

            if (!parent.is(prevParent)) {
              prevParent = parent;
              linkNode = $createLinkNode(linkUrl.value, {rel, target, title});

              if ($isLinkNode(parent)) {
                if (node.getPreviousSibling() === null) {
                  parent.insertBefore(linkNode);
                }
                else {
                  parent.insertAfter(linkNode);
                }
              }
              else {
                node.insertBefore(linkNode);
              }
            }

            if ($isLinkNode(node)) {
              if (node.is(linkNode)) {
                return;
              }
              if (linkNode !== null) {
                const children = node.getChildren();

                for (let i = 0; i < children.length; i++) {
                  linkNode.append(children[i]);
                }
              }

              node.remove();
              return;
            }

            if (linkNode !== null) {
              linkNode.append(node);
            }
          });
        }
      });
      isLink.value = false;
    }

    return {
      readonly,
      style,
      id,
      editor,
      isLink,
      linkUrl,
      toolbarColors,
      openLink,
      toggleLink,
      formatText,
      formatParagraph,
      UNDO_COMMAND,
      FORMAT_TEXT_COMMAND,
      FORMAT_ELEMENT_COMMAND,
    }
  }
});
</script>