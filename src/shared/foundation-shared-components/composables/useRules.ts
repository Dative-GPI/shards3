import { computed, inject, ref } from "vue";

export const useRules = () => {
  const innerValidateOn = inject<"submit" | "blur" | "input">("validateOn", 'input');
  const submitted = inject<boolean>("submitted", false);

  const blurred = ref(false);

  const validateOn = computed((): string => {
    switch (innerValidateOn) {
      case "submit": return submitted ? "input" : "submit";
      case "blur":   return blurred.value ? "input" : "blur";
      case "input":  return "input";
    }
  });

  const getMessages = (modelValue: any, rules: any[], checkArray: boolean = false): string[] => {
    if (!rules || !rules.length) {
      return [];
    }
    switch (validateOn.value) {
      case "submit":
        if (!submitted) {
          return [];
        }
        break;
      case "blur":
        if (!blurred.value) {
          return [];
        }
        break;
      case "input":
        break;
    }
    const messages: string[] = [];
    if (checkArray) {
      if (modelValue && Array.isArray(modelValue)) {
        for (const value of modelValue) {
          for (const rule of rules) {
            const message = rule(value);
            if (typeof(message) === "string") {
              messages.push(message);
            }
          }
        }
      }
      else {
        for (const rule of rules) {
          const message = rule(modelValue ?? "");
          if (typeof(message) === "string") {
            messages.push(message);
          }
        }
      }
    }
    else {
      for (const rule of rules) {
        const message = rule(modelValue ?? "");
        if (typeof(message) === "string") {
          messages.push(message);
        }
      }
    }
    return [...new Set(messages)];
  }

  return {
    validateOn,
    blurred,
    getMessages
  };
}
