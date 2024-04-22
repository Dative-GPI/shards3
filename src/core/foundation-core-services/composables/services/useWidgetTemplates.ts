import { WidgetTemplateFilters, WidgetTemplateInfos, WidgetTemplateInfosDTO, WidgetTemplateDetails, WidgetTemplateDetailsDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { WIDGET_TEMPLATES_URL } from "../../config/urls";

const WidgetTemplateServiceFactory = new ServiceFactory<WidgetTemplateDetailsDTO, WidgetTemplateDetails>("widgetTemplate", WidgetTemplateDetails).create(factory => factory.build(
    factory.addGetMany<WidgetTemplateInfosDTO, WidgetTemplateInfos, WidgetTemplateFilters>(WIDGET_TEMPLATES_URL, WidgetTemplateInfos),
    factory.addNotify()
));

export const useWidgetTemplates = ComposableFactory.getMany(WidgetTemplateServiceFactory);