import { type CreateLocationDTO, LocationDetails, type LocationDetailsDTO, type LocationFilters, LocationInfos, type LocationInfosDTO, type UpdateLocationDTO } from "@dative-gpi/foundation-core-domain/models";
import { ComposableFactory, ServiceFactory } from "@dative-gpi/bones-ui/core";

import { LOCATIONS_URL, LOCATION_URL } from "../../config/urls";

import { resetDeviceOrganisations } from "./useDeviceOrganisations";

const LocationServiceFactory = new ServiceFactory<LocationDetailsDTO, LocationDetails>("location", LocationDetails)
  .createComplete<LocationInfos, LocationInfosDTO, CreateLocationDTO, UpdateLocationDTO, LocationFilters>(LOCATIONS_URL, LOCATION_URL, LocationInfos);

const updateLocation = ComposableFactory.update(LocationServiceFactory);

export const useLocation = ComposableFactory.get(LocationServiceFactory);
export const useLocations = ComposableFactory.getMany(LocationServiceFactory);
export const useCreateLocation = ComposableFactory.create(LocationServiceFactory);
export const useRemoveLocation = ComposableFactory.remove(LocationServiceFactory);

export const useUpdateLocation = () => {
  const { update, updated, updating } = updateLocation();

  const actualUpdate = async (...params: Parameters<typeof update>) => {
    const result = await update(...params);
    resetDeviceOrganisations();
    return result;
  }

  return {
    update: actualUpdate,
    updated,
    updating
  }
}