import { ElementNode, LexicalNode, RangeSelection, TextNode } from "lexical";
import { $isAtNodeEnd } from "@lexical/selection";

export const getSelectedNode = (selection: RangeSelection): ElementNode | TextNode => {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  }
  else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}

export const getAncestor = <NodeType extends LexicalNode = LexicalNode>(node: LexicalNode, predicate: (ancestor: LexicalNode) => ancestor is NodeType) => {
  let parent = node;
  while (parent !== null && parent.getParent() !== null && !predicate(parent)) {
    parent = parent.getParentOrThrow();
  }
  return predicate(parent) ? parent : null;
}