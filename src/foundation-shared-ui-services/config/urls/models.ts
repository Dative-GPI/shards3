import { CORE_URL } from "./base";

export const MODELS_URL = `${CORE_URL}/models`;
export const MODEL_URL = (modelId: string) => `${MODELS_URL}/${encodeURIComponent(modelId)}`;