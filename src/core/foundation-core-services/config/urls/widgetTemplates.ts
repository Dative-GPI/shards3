import { CORE_URL } from "./base";

export const WIDGET_TEMPLATES_URL = () => `${CORE_URL()}/widget-templates`;
export const WIDGET_TEMPLATE_URL = (widgetTemplateId: string) => `${WIDGET_TEMPLATES_URL()}/${widgetTemplateId}`;