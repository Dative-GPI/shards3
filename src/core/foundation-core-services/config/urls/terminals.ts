import { CORE_URL } from "./base";

export const TERMINALS_URL = () => `${CORE_URL()}/terminals`;
export const TERMINAL_URL = (terminalId: string) => `${TERMINALS_URL()}/${encodeURIComponent(terminalId)}`;