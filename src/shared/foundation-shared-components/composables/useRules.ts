import { Ref, computed, inject, ref } from "vue";

export const useRules = () => {
  const innerValidateOn = inject<Ref<"submit" | "input">>("validateOn", ref('input'));
  const submitted = inject<Ref<boolean>>("submitted", ref(false));

  const validateOn = computed((): "input" | "submit" => {
    switch (innerValidateOn.value) {
      case "submit": return submitted.value ? "input" : "submit";
      case "input":  return "input";
    }
  });

  const getMessages = (modelValue: any, rules: any[], checkArray: boolean = false): string[] => {
    if (!rules || !rules.length) {
      return [];
    }
    switch (validateOn.value) {
      case "submit":
        if (!submitted.value) {
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
    for (let i = 1; i < messages.length; i++) {
      messages[i] = messages[i].toLowerCase();
    }
    return [...new Set(messages)];
  }

  return {
    validateOn,
    getMessages
  };
}
