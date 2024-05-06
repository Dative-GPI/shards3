import { Address } from "@dative-gpi/foundation-core-domain/models"
import { NotifyService } from "@dative-gpi/bones-ui";
import { ref } from "vue"

export const useAddress = () => {
  const API_URL = 'https://photon.komoot.io/api/'
  const API_REVERSE_URL = 'https://photon.komoot.io/reverse/'
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
      latitude: feature.geometry.coordinates[0],
      longitude: feature.geometry.coordinates[1]
    })
  }

  const searchAddress = async (search: string): Promise<Address[]> => {
    const url = `${API_URL}?q=${encodeURI(search)}&limit=5`;
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
    const response = await fetch(`${API_URL}?q=${search}&limit=1`);
    fetching.value = false;
    if (response.ok) {
      const objectResponse = await response.json();
      return getAddressFromFeature(objectResponse.features[0]);
    }
    return undefined;
  }

  const getAddressFromCoordinates = async (lat: number, lng: number): Promise<Address | undefined> => {
    fetching.value = true;
    const response = await fetch(`${API_REVERSE_URL}?lat=${lat}&lon=${lng}`);
    fetching.value = false;
    if (response.ok) {
      const objectResponse = await response.json()
      if(objectResponse.features.length !== 0) {
        const enhancedAdress = getAddressFromFeature(objectResponse.features[0])
        enhancedAdress.latitude = lat
        enhancedAdress.longitude = lng
        return enhancedAdress;
      }
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