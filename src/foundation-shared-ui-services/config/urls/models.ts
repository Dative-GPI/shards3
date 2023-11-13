import { ORGANISATION_URL } from "./organisations";

export const MODELS_URL = `${ORGANISATION_URL}/models`;
export const MODEL_URL = (modelId: string) => `${MODELS_URL}/${encodeURIComponent(modelId)}`;