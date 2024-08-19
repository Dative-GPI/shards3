import { type CreateLocationDTO, LocationDetails, type LocationDetailsDTO, type LocationFilters, LocationInfos, type LocationInfosDTO, type UpdateLocationDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { LOCATIONS_URL, LOCATION_URL } from "../../config/urls";

const LocationServiceFactory = new ServiceFactory<LocationDetailsDTO, LocationDetails>("location", LocationDetails)
  .createComplete<LocationInfos, LocationInfosDTO, CreateLocationDTO, UpdateLocationDTO, LocationFilters>(LOCATIONS_URL, LOCATION_URL, LocationInfos);

export const useLocation = ComposableFactory.get(LocationServiceFactory);
export const useLocations = ComposableFactory.getMany(LocationServiceFactory);
export const useCreateLocation = ComposableFactory.create(LocationServiceFactory);
export const useUpdateLocation = ComposableFactory.update(LocationServiceFactory);
export const useRemoveLocation = ComposableFactory.remove(LocationServiceFactory);