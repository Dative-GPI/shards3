import { TimeZoneFilters, TimeZoneInfos, TimeZoneInfosDTO } from "@dative-gpi/foundation-core-domain";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { TIME_ZONES_URL } from "../../config/urls";

const TimeZoneServiceFactory = new ServiceFactory<TimeZoneInfosDTO, TimeZoneInfos>("timeZone", TimeZoneInfos).create(factory => factory.build(
    factory.addGetMany<TimeZoneInfosDTO, TimeZoneInfos, TimeZoneFilters>(TIME_ZONES_URL, TimeZoneInfos),
    factory.addNotify()
));

export const useTimeZones = ComposableFactory.getMany(TimeZoneServiceFactory);