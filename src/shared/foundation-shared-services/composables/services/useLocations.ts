import type { CreateLocationDTO, LocationDetailsDTO, LocationFilters, LocationInfosDTO, UpdateLocationDTO } from "@dative-gpi/foundation-shared-domain/models";
import { LocationDetails, LocationInfos } from "@dative-gpi/foundation-shared-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { LOCATIONS_URL, LOCATION_URL } from "@dative-gpi/foundation-core-services/config/urls";

const LocationServiceFactory = new ServiceFactory<LocationDetailsDTO, LocationDetails>("location", LocationDetails)
    .createComplete<LocationInfos, LocationInfosDTO, CreateLocationDTO, UpdateLocationDTO, LocationFilters>(LOCATIONS_URL, LOCATION_URL, LocationInfos);

export const useLocation = ComposableFactory.get(LocationServiceFactory);
export const useLocations = ComposableFactory.getMany(LocationServiceFactory);
export const useCreateLocation = ComposableFactory.create(LocationServiceFactory);
export const useUpdateLocation = ComposableFactory.update(LocationServiceFactory);
export const useRemoveLocation = ComposableFactory.remove(LocationServiceFactory);