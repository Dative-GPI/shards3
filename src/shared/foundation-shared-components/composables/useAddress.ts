import { Address } from "@dative-gpi/foundation-core-domain/models"
import { NotifyService } from "@dative-gpi/bones-ui";
import { ref } from "vue"
import { KOMOOT_API_REVERSE_URL, KOMOOT_API_URL } from "../../foundation-shared-services/config/urls";

export const useAddress = () => {
  const fetching = ref(false);

  const notifyService = new NotifyService("Address")

  const getAddressFromFeature = (feature: any): Address => {
    const country = feature.properties.country ?? '';
    const stateArray = [feature.properties.state, feature.properties.county, feature.properties.region, feature.properties.province, feature.properties.state_district];
    const state = stateArray.filter((value) => (value && value !== '')).join(', ');
    const localityArray = [feature.properties.city, feature.properties.town, feature.properties.village, feature.properties.hamlet, feature.properties.suburb, feature.properties.city_district, feature.properties.neighbourhood, feature.properties.postcode];
    const locality = localityArray.filter((value) => (value && value !== '')).join(', ');
    const addressArray = [feature.properties.name, feature.properties.street, feature.properties.address];
    const address = addressArray.filter((value) => (value && value !== '')).join(', ');
    const formattedAddress = [address, locality, state, country].filter((value) => (value && value !== '')).join(', ');

    return new Address({
      placeId: '',
      country: country,
      locality: locality,
      placeLabel: address,
      formattedAddress: formattedAddress,
      latitude: feature.geometry.coordinates[1],
      longitude: feature.geometry.coordinates[0]
    })
  }

  const searchAddress = async (search: string): Promise<Address[]> => {
    const url = `${KOMOOT_API_URL}?q=${encodeURI(search)}&limit=5`;
    fetching.value = true;
    const response = await fetch(url);
    fetching.value = false;
    if (response.ok) {
      const objectResponse = await response.json();
      const result = objectResponse.features.map((feature: any) => getAddressFromFeature(feature));
      notifyService.notify("update", result);
      return result;
    } else {
      return [];
    }
  }

  const getAddressFromString = async (search: string): Promise<Address | undefined> => {
    fetching.value = true;
    const response = await fetch(`${KOMOOT_API_URL}?q=${search}&limit=1`);
    fetching.value = false;
    if (response.ok) {
      const objectResponse = await response.json();
      return getAddressFromFeature(objectResponse.features[0]);
    }
    return undefined;
  }

  const getAddressFromCoordinates = async (lat: number, lng: number): Promise<Address | undefined> => {
    fetching.value = true;
    const response = await fetch(`${KOMOOT_API_REVERSE_URL}?lat=${lat}&lon=${lng}`);
    fetching.value = false;
    if (response.ok) {
      const objectResponse = await response.json();
      return getAddressFromFeature(objectResponse.features[0]);
    }
    return undefined;
  }

  return {
    fetching,
    searchAddress,
    getAddressFromString,
    getAddressFromCoordinates
  }
}