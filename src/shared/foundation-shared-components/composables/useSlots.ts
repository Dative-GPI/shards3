import { type Slot, useSlots as useVueSlots } from "vue"

export const useSlots = () => {
  const getChildren = (name: string | undefined = undefined): any => {
    const innerSlots = { ...useVueSlots() };
    const innerName = name ?? "default";
    if (innerSlots[innerName] != null) {
      return recursiveGetChildren(innerSlots[innerName]!());
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
            // On a v-for, we want to get the children of the v-for
            case Symbol.for("v-fgt"):
              returnElements.push(...recursiveGetChildren(element.children));
              break;
              // On a negative v-if, we want to get nothing
            case Symbol.for("v-cmt"):
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