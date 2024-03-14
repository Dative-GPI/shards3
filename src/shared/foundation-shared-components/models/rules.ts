import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { useTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import { getTimeBestString } from "../utils";

const { epochToLongDateFormat } = useTimeZone()!;
const { $tr } = useTranslationsProvider();

export const TextRules = {
    required: (message: string) => (value: string) => !!value || (message ?? $tr("ui.rules.required", "Required")),
    copy: (original: string, message: string) => (value: string) => value === original || (message ?? $tr("ui.rules.copy", "Different from original")),
    min: (min: number, message: string) => (value: string) => value.length >= min || (message ?? $tr("ui.rules.text-min", "Must be at least {0} characters", min.toString())),
    max: (max: number, message: string) => (value: string) => value.length <= max || (message ?? $tr("ui.rules.text-max", "Must be at most {0} characters", max.toString())),
    email: (message: string) => (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || (message ?? $tr("ui.rules.text-email", "Must be a valid email")),
    digit: (message: string) => (value: string) => /(?=.*\d)/.test(value) || (message ?? $tr("ui.rules.text-digit", "Must contain a digit")),
    uppercase: (message: string) => (value: string) => /(?=.*[A-Z])/.test(value) || (message ?? $tr("ui.rules.text-uppercase", "Must contain an uppercase letter")),
    lowercase: (message: string) => (value: string) => /(?=.*[a-z])/.test(value) || (message ?? $tr("ui.rules.text-lowercase", "Must contain a lowercase letter")),
    special: (message: string) => (value: string) => /(?=.*[!@#$%^&*])/.test(value) || (message ?? $tr("ui.rules.text-special-character", "Must contain a special character"))
};

export const TagRules = {
    required: (message: string) => (value: string[]) => value.length > 0 || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string) => (value: string[]) => value.length >= min || (message ?? $tr("ui.rules.tag-min", "Must be at least {0} elements", min.toString())),
    max: (max: number, message: string) => (value: string[]) => value.length <= max || (message ?? $tr("ui.rules.tag-max", "Must be at most {0} elements", max.toString()))
};

export const NumberRules = {
    required: (message: string) => (value: string) => (!!value && !isNaN(parseFloat(value))) || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string) => (value: string) => (!!value && !isNaN(parseFloat(value)) && parseFloat(value) >= min) || (message ?? $tr("ui.rules.number-min", "Must be at least {0}", min.toString())),
    max: (max: number, message: string) => (value: string) => (!!value && !isNaN(parseFloat(value)) && parseFloat(value) <= max) || (message ?? $tr("ui.rules.number-max", "Must be at most {0}", max.toString())),
    integer: (message: string) => (value: string) => (!!value && !isNaN(parseFloat(value)) && Number.isInteger(parseFloat(value))) || (message ?? $tr("ui.rules.number-integer", "Must be an integer"))
};

export const IconRules = {
    required: (message: string) => (value: string) => !!value || (message ?? $tr("ui.rules.required", "Required")),
};

export const DateRules = {
    required: (message: string) => (value: string) => !!value || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string) => (value: number) => (!value || value >= min) || (message ?? $tr("ui.rules.date-min", "Must be after {0}", epochToLongDateFormat(min))),
    max: (max: number, message: string) => (value: number) => (!value || value <= max) || (message ?? $tr("ui.rules.date-max", "Must be before {0}", epochToLongDateFormat(max)))
};

export const SelectRules = {
    required: (message: string) => (value: string) => !!value || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string) => (value: string[]) => (Array.isArray(value) && value.length >= min) || (message ?? $tr("ui.rules.select-min", "Must select at least {0} elements", min.toString())),
    max: (max: number, message: string) => (value: string[]) => (Array.isArray(value) && value.length <= max) || (message ?? $tr("ui.rules.select-max", "Must select at most {0} elements", max.toString()))
};

export const AutocompleteRules = {
    required: (message: string) => (value: string) => !!value || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string) => (value: string[]) => (Array.isArray(value) && value.length >= min) || (message ?? $tr("ui.rules.autocomplete-min", "Must select at least {0} elements", min.toString())),
    max: (max: number, message: string) => (value: string[]) => (Array.isArray(value) && value.length <= max) || (message ?? $tr("ui.rules.autocomplete-max", "Must select at most {0} elements", max.toString()))
};

export const TimeRules = {
    required: (message: string) => (value: number) => !!value || (message ?? $tr("ui.rules.required", "Required")),
    min: (min: number, message: string) => (value: number) => value >= min || (message ?? $tr("ui.rules.time-min", "Must be more than {0}", getTimeBestString(min))),
    max: (max: number, message: string) => (value: number) => value <= max || (message ?? $tr("ui.rules.time-max", "Must be less than {0}", getTimeBestString(max)))
};