import { Errors } from "../models/errors";

export const getError = (code: string): { code: string, default: string, status: number } => {
    return Errors.find(e => e.code === code) || { code: "errors.unexpectederror", default: "Unexpected error", status: 500 };
};