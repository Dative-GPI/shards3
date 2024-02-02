import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services";

const { $tr } = useTranslationsProvider();

export const TextRules = {
    required: (message: string) => (value: string) => !!value || (message ?? $tr("ui.rules.required", "Required")),
    min: (length: number, message: string) => (value: string) => value.length >= length || (message ?? `Must be at least ${length} characters`),
    max: (length: number, message: string) => (value: string) => value.length <= length || (message ?? `Must be at most ${length} characters`),
    email: (message: string) => (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || (message ?? "Must be a valid email"),
    digit: (message: string) => (value: string) => /(?=.*\d)/.test(value) || (message ?? "Must contain a digit"),
    uppercase: (message: string) => (value: string) => /(?=.*[A-Z])/.test(value) || (message ?? "Must contain an uppercase letter"),
    lowercase: (message: string) => (value: string) => /(?=.*[a-z])/.test(value) || (message ?? "Must contain a lowercase letter"),
    special: (message: string) => (value: string) => /(?=.*[!@#$%^&*])/.test(value) || (message ?? "Must contain a special character")
};

export const TagRules = {
    required: (message: string) => (value: string[]) => value.length > 0 || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string) => (value: string[]) => value.length >= min || (message ?? `Must contain at least ${min} elements`),
    max: (max: number, message: string) => (value: string[]) => value.length <= max || (message ?? `Must contain at most ${max} elements`)
};

export const NumberRules = {
    required: (message: string) => (value: string) => (!!value && !isNaN(parseFloat(value))) || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string) => (value: string) => (!!value && !isNaN(parseFloat(value)) && parseFloat(value) >= min) || (message ?? `Must be at least ${min}`),
    max: (max: number, message: string) => (value: string) => (!!value && !isNaN(parseFloat(value)) && parseFloat(value) <= max) || (message ?? `Must be at most ${max}`),
    integer: (message: string) => (value: string) => (!!value && !isNaN(parseFloat(value)) && Number.isInteger(parseFloat(value))) || (message ?? "Must be an integer")
};

export const IconRules = {
    required: (message: string) => (value: string) => !!value || (message ?? $tr("ui.rules.required", "Required")),
};