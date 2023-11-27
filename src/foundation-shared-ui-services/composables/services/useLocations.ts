import { CreateLocationDTO, LocationDetails, LocationDetailsDTO, LocationFilters, LocationInfos, LocationInfosDTO, UpdateLocationDTO } from "@dative-gpi/foundation-shared-ui-domain";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui";

import { LOCATIONS_URL, LOCATION_URL } from "../../config/urls";

const LocationServiceFactory = new ServiceFactory<LocationDetailsDTO, LocationDetails>("location", LocationDetails)
    .createComplete<LocationInfos, LocationInfosDTO, CreateLocationDTO, UpdateLocationDTO, LocationFilters>(LOCATIONS_URL, LOCATION_URL, LocationInfos);

export const useLocation = ComposableFactory.get(LocationServiceFactory);
export const useLocations = ComposableFactory.getMany(LocationServiceFactory);
export const useCreateLocation = ComposableFactory.create(LocationServiceFactory);
export const useUpdateLocation = ComposableFactory.update(LocationServiceFactory);
export const useRemoveLocation = ComposableFactory.remove(LocationServiceFactory);