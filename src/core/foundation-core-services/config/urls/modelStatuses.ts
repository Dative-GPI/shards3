import { CORE_URL } from "./base";

export const MODEL_STATUSES_URL = () => `${CORE_URL()}/modelStatuses`;
export const MODEL_STATUS_URL = (modelStatusId: string) => `${MODEL_STATUSES_URL()}/${encodeURIComponent(modelStatusId)}`;