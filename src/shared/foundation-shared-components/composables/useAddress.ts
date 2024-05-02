import { Address } from "@dative-gpi/foundation-core-domain/models"
import { ref } from "vue"

export const useAddress = () => {
  const API_URL = 'https://photon.komoot.io/api/'
  const API_REVERSE_URL = 'https://photon.komoot.io/reverse/'
  const fetching = ref(false);

  const notifyService = useNotifyService()

  const getAddressFromFeature = (feature: any): Address  => {
    return new Address({
      placeId: '',
      placeLabel: (feature.properties.name ?? feature.properties.street ?? feature.properties.address ?? '') + ', ' + (feature.properties.city ?? feature.properties.town ?? feature.properties.village ?? feature.properties.hamlet ?? feature.properties.suburb ?? feature.properties.city_district ?? feature.properties.neighbourhood ?? feature.properties.postcode ?? '') + ', ' + (feature.properties.country ?? ''),
      formattedAddress: (feature.properties.name ?? feature.properties.street ?? feature.properties.address ?? '') + ', ' + (feature.properties.city ?? feature.properties.town ?? feature.properties.village ?? feature.properties.hamlet ?? feature.properties.suburb ?? feature.properties.city_district ?? feature.properties.neighbourhood ?? feature.properties.postcode ?? '') + ', ' + (feature.properties.country ?? ''),
      locality: feature.properties.city ?? feature.properties.town ?? feature.properties.village ?? feature.properties.hamlet ?? feature.properties.suburb ?? feature.properties.city_district ?? feature.properties.neighbourhood ?? feature.properties.postcode ?? '',
      country: feature.properties.country ?? '',
      latitude: feature.geometry.coordinates[0],
      longitude: feature.geometry.coordinates[1]
    })
  }

  const searchAddress = async (search: string): Promise<Address[]> => {
    const url = `${API_URL}?q=${encodeURI(search)}&limit=5`
    fetching.value = true;
    const response = await fetch(url);
    fetching.value = false;
    if(response.ok) {
      const objectResponse = await response.json()
      console.log(objectResponse.features)
      return objectResponse.features.map((feature: any) => getAddressFromFeature(feature))
    }else {
      return []
    }
  }

  const getAddressFromString = async (search: string): Promise<Address> => {
    fetching.value = true;
    const response = await fetch(`${API_URL}?q=${search}&limit=1`)
    fetching.value = false;
    if(response.ok) {
      const objectResponse = await response.json()
      return getAddressFromFeature(objectResponse.features[0])
    }
    return new Address({
      placeId: '',
      placeLabel: '',
      formattedAddress: '',
      locality: '',
      country: '',
      latitude: 0,
      longitude: 0
    })
  }

  const getAddressFromCoordinates = async (lat: number, lng: number): Promise<Address> => {
    fetching.value = true;
    const response = await fetch(`${API_REVERSE_URL}?lat=${lat}&lon=${lng}`)
    fetching.value = false;
    if(response.ok) {
      const objectResponse = await response.json()
      return getAddressFromFeature(objectResponse.features[0])
    }
    return new Address({
      placeId: '',
      placeLabel: '',
      formattedAddress: '',
      locality: '',
      country: '',
      latitude: 0,
      longitude: 0
    })
  }

  return {
    fetching,
    searchAddress,
    getAddressFromString,
    getAddressFromCoordinates
  }
}