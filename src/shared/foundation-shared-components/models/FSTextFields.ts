export const TextRules = {
    required: (message: string) => (value: string) => !!value || (message ?? "Required"),
    minLength: (length: number, message: string) => (value: string) => value.length >= length || (message ?? `Must be at least ${length} characters`),
    maxLength: (length: number, message: string) => (value: string) => value.length <= length || (message ?? `Must be at most ${length} characters`),
    email: (message: string) => (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || (message ?? "Must be a valid email"),
    digit: (message: string) => (value: string) => /(?=.*\d)/.test(value) || (message ?? "Must contain a digit"),
    uppercase: (message: string) => (value: string) => /(?=.*[A-Z])/.test(value) || (message ?? "Must contain an uppercase letter"),
    lowercase: (message: string) => (value: string) => /(?=.*[a-z])/.test(value) || (message ?? "Must contain a lowercase letter"),
    special: (message: string) => (value: string) => /(?=.*[!@#$%^&*])/.test(value) || (message ?? "Must contain a special character")
};

export const NumberRules = {
    required: (message: string) => (value: number) => !!value || (message ?? "Required"),
    min: (min: number, message: string) => (value: number) => value >= min || (message ?? `Must be at least ${min}`),
    max: (max: number, message: string) => (value: number) => value <= max || (message ?? `Must be at most ${max}`),
    integer: (message: string) => (value: number) => Number.isInteger(value) || (message ?? "Must be an integer")
};