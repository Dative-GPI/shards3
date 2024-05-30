import { ManufacturerDetails, ManufacturerDetailsDTO, ManufacturerFilters, ManufacturerInfos, ManufacturerInfosDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { MANUFACTURERS_URL, MANUFACTURER_URL } from "../../config/urls";

const ManufacturerServiceFactory = new ServiceFactory<ManufacturerDetailsDTO, ManufacturerDetails>("manufacturer", ManufacturerDetails).create(factory => factory.build(
    factory.addGet(MANUFACTURER_URL),
    factory.addGetMany<ManufacturerInfosDTO, ManufacturerInfos, ManufacturerFilters>(MANUFACTURERS_URL, ManufacturerInfos),
    factory.addNotify()
));

export const useManufacturer = ComposableFactory.get(ManufacturerServiceFactory);
export const useManufacturers = ComposableFactory.getMany(ManufacturerServiceFactory);