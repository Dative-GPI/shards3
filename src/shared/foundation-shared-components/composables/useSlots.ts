import { type Slot, useSlots as useVueSlots } from "vue"

export const useSlots = () => {
  const getChildren = (name: string | undefined = undefined): any => {
    const innerSlots = { ...useVueSlots() };
    const innerName = name ?? "default";
    if (innerSlots[innerName] != null) {
      const slot = innerSlots[innerName]!;
      switch (typeof(slot()[0].type)) {
        // Directive wrapper (v-for, v-if)
        case "symbol":
          switch (slot()[0].type) {
            case Symbol.for("v-fgt"): return recursiveGetChildren(slot()[0].children);
            case Symbol.for("v-cmt"): return slot();
            default:                  return slot();
          }
        // Custom component
        case "object": return slot();
        // Pre-existing component
        case "string": return slot();
      }
      return slot();
    }
    return null;
  };

  const recursiveGetChildren = (elements: any): any => {
    if (elements == null) {
      return null;
    }
    const returnElements: any[] = [];
    for (const element of elements) {
      switch (typeof(element.type)) {
        // Directive wrapper (v-for, v-if)
        case "symbol":
          switch (element.type) {
            case Symbol.for("v-fgt"):
              returnElements.push(...recursiveGetChildren(element.children));
              break;
            case Symbol.for("v-cmt"):
              returnElements.push(element);
              break;
            default:
              returnElements.push(element);
              break;
          }
          break;
        // Custom component
        case "object":
          returnElements.push(element);
          break;
        // Pre-existing component
        case "string":
          returnElements.push(element);
          break;
        // Default
        default:
          returnElements.push(element);
          break;
      }
    }
    return returnElements;
  };

  return {
    slots: { ...useVueSlots() } as { [label: string]: Slot<any> },
    getChildren
  };
}