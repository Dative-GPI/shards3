import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";
import { validateExpression } from "@dative-gpi/foundation-shared-domain/tools";

import type { TimeUnit } from "@dative-gpi/foundation-shared-domain/enums";

import { getTimeBestString, validateOperation } from "../utils";

const { epochToLongDateFormat } = useDateFormat()!;
const { $tr } = useTranslationsProvider();

export const TextRules = {
    required: (message: string | undefined = undefined) => (value: string) => !!value || (message ?? $tr("ui.rules.required", "Required")),
    copy: (original: string, message: string | undefined = undefined) => (value: string) => value === original || (message ?? $tr("ui.rules.copy", "Different from original")),
    min: (min: number, message: string | undefined = undefined) => (value: string) => value.length >= min || (message ?? $tr("ui.rules.text-min", "Must be at least {0} characters", min.toString())),
    max: (max: number, message: string | undefined = undefined) => (value: string) => value.length <= max || (message ?? $tr("ui.rules.text-max", "Must be at most {0} characters", max.toString())),
    email: (message: string | undefined = undefined) => (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || (message ?? $tr("ui.rules.text-email", "Must be a valid email")),
    phone: (message: string | undefined = undefined) => (value: string) => /^[+]?([0-9]+[ -]?){7,}$/.test(value) || (message ?? $tr("ui.rules.text-phone", "Must be a valid phone number")),
    digit: (message: string | undefined = undefined) => (value: string) => /(?=.*\d)/.test(value) || (message ?? $tr("ui.rules.text-digit", "Must contain a digit")),
    uppercase: (message: string | undefined = undefined) => (value: string) => /(?=.*[A-Z])/.test(value) || (message ?? $tr("ui.rules.text-uppercase", "Must contain an uppercase letter")),
    lowercase: (message: string | undefined = undefined) => (value: string) => /(?=.*[a-z])/.test(value) || (message ?? $tr("ui.rules.text-lowercase", "Must contain a lowercase letter")),
    special: (message: string | undefined = undefined) => (value: string) => /(?=.*[!@#$%^&*])/.test(value) || (message ?? $tr("ui.rules.text-special-character", "Must contain a special character")),
    different: (original: string, message: string | undefined = undefined) => (value: string) => value != original || (message ?? $tr("ui.rules.text-different", "Must be different from original")),
    outside: (values: string[], message: string | undefined = undefined) => (value: string) => !values.includes(value) || (message ?? $tr("ui.rules.text-outside", "Must be different from others")),
    inside: (values: string[], message: string | undefined = undefined) => (value: string) => values.includes(value) || (message ?? $tr("ui.rules.text-inside", "Must be one of the options")),
    operation: (operands: string[], variables: string[], message: string | undefined = undefined) => (value: string) => validateOperation(value, operands, variables) || (message ?? $tr("ui.rules.text-operation", "Invalid operation")),
    singleWord: (message: string | undefined = undefined) => (value: string) => !value.includes(" ") || (message ?? $tr("ui.rules.text-single-word", "Must be a single word")),
};

export const TagRules = {
    required: (message: string | undefined = undefined) => (value: string[]) => value.length > 0 || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string | undefined = undefined) => (value: string[]) => value.length >= min || (message ?? $tr("ui.rules.tag-min", "Must be at least {0} elements", min.toString())),
    max: (max: number, message: string | undefined = undefined) => (value: string[]) => value.length <= max || (message ?? $tr("ui.rules.tag-max", "Must be at most {0} elements", max.toString()))
};

export const NumberRules = {
    required: (message: string | undefined = undefined) => (value: string) => (value != null && !isNaN(parseFloat(value))) || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string | undefined = undefined) => (value: string) => (!!value && !isNaN(parseFloat(value)) && parseFloat(value) >= min) || (message ?? $tr("ui.rules.number-min", "Must be at least {0}", min.toString())),
    max: (max: number, message: string | undefined = undefined) => (value: string) => (!!value && !isNaN(parseFloat(value)) && parseFloat(value) <= max) || (message ?? $tr("ui.rules.number-max", "Must be at most {0}", max.toString())),
    integer: (message: string | undefined = undefined) => (value: string) => (!!value && !isNaN(parseFloat(value)) && Number.isInteger(parseFloat(value))) || (message ?? $tr("ui.rules.number-integer", "Must be an integer"))
};

export const IconRules = {
    required: (message: string | undefined = undefined) => (value: string) => !!value || (message ?? $tr("ui.rules.required", "Required")),
};

export const DateRules = {
    required: (message: string | undefined = undefined) => (value: string) => !!value || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string | undefined = undefined) => (value: number) => (!value || value >= min) || (message ?? $tr("ui.rules.date-min", "Must be after {0}", epochToLongDateFormat(min))),
    max: (max: number, message: string | undefined = undefined) => (value: number) => (!value || value <= max) || (message ?? $tr("ui.rules.date-max", "Must be before {0}", epochToLongDateFormat(max))),
    validateExpression: (variant: "default" | "before-after" | undefined = "default") => (value: string) => validateExpression(value, variant)
};

export const SelectRules = {
    required: (message: string | undefined = undefined) => (value: string) => !!value || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string | undefined = undefined) => (value: string[]) => (Array.isArray(value) && value.length >= min) || (message ?? $tr("ui.rules.select-min", "Must select at least {0} elements", min.toString())),
    max: (max: number, message: string | undefined = undefined) => (value: string[]) => (Array.isArray(value) && value.length <= max) || (message ?? $tr("ui.rules.select-max", "Must select at most {0} elements", max.toString()))
};

export const AutocompleteRules = {
    required: (message: string | undefined = undefined) => (value: string) => !!value || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string | undefined = undefined) => (value: string[]) => (Array.isArray(value) && value.length >= min) || (message ?? $tr("ui.rules.autocomplete-min", "Must select at least {0} elements", min.toString())),
    max: (max: number, message: string | undefined = undefined) => (value: string[]) => (Array.isArray(value) && value.length <= max) || (message ?? $tr("ui.rules.autocomplete-max", "Must select at most {0} elements", max.toString()))
};

export const TimeRules = {
    required: (message: string | undefined = undefined) => (value: number) => !!value || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string | undefined = undefined) => (value: number) => value >= min || (message ?? $tr("ui.rules.time-min", "Must be more than {0}", getTimeBestString(min))),
    max: (max: number, message: string | undefined = undefined) => (value: number) => value <= max || (message ?? $tr("ui.rules.time-max", "Must be less than {0}", getTimeBestString(max)))
};

export const TimeStepRules = {
    required: (message: string | undefined = undefined) => (value: { value: number, unit: TimeUnit } | null) => (!!value && value.value !== 0) || (message ?? $tr("ui.rules.required", "Required")),
}

export const ToggleRules = {
    required: (message: string | undefined = undefined) => (value: boolean) => value || (message ?? $tr("ui.rules.required", "Required"))
};

export const TreeViewRules = {
    required: (message: string | undefined = undefined) => (value: string) => !!value || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string | undefined = undefined) => (value: string[]) => (Array.isArray(value) && value.length >= min) || (message ?? $tr("ui.rules.tree-view-min", "Must select at least {0} elements", min.toString())),
    max: (max: number, message: string | undefined = undefined) => (value: string[]) => (Array.isArray(value) && value.length <= max) || (message ?? $tr("ui.rules.tree-view-max", "Must select at most {0} elements", max.toString()))
};