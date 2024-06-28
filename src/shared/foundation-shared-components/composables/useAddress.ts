import type { Place } from "@dative-gpi/foundation-shared-domain/models";
import { Address } from "@dative-gpi/foundation-shared-domain/models";
import _ from "lodash";

export const useAddress = () => {
  const enabled = true;
  let initialized = false;
  let searchService: google.maps.places.AutocompleteService;
  let placeService: google.maps.places.PlacesService;
  let sessionId: google.maps.places.AutocompleteSessionToken;
  

  const init = async () => {
    await window.initMap;
    searchService = new google.maps.places.AutocompleteService();
    placeService = new google.maps.places.PlacesService(
      document.getElementById("places") as HTMLDivElement
    );
    sessionId = new google.maps.places.AutocompleteSessionToken();
    initialized = true;
  }

  const search = async (search: string): Promise<Place[]> => {
    if(!initialized){
      await init();
    } 

    return _search(search).then(result => {
      return _.map(result, r => ({ id: r.place_id, label: r.description }));
    }).catch(() => {
      return [];
    });
  }

  const get = async (place: Place): Promise<Address> => {
    if(!initialized){
      await init();
    } 

    const response = await _get(place.id);
    sessionId = new google.maps.places.AutocompleteSessionToken();
    if (response.address_components && response.formatted_address && response.geometry) {
      return new Address({
        formattedAddress: response.formatted_address,
        locality: _find(response.address_components, "locality"),
        country: _find(response.address_components, "country"),
        latitude: response.geometry.location?.lat() ?? 0,
        longitude: response.geometry.location?.lng() ?? 0,

        placeId: place.id,
        placeLabel: place.label,
      })
    }
    throw new Error("missing informations");
  }

  const reverseSearch = async (lat: number, lon: number): Promise<Address> => {
    if(!initialized){
      await init();
    }

    return new Promise<Address>((resolve, reject) => {
      new google.maps.Geocoder().geocode(
        {
          location: { lat: lat, lng: lon }
        },
        (result, status) => {
          if (status != google.maps.GeocoderStatus.OK || !result) {
            console.error(status);
            reject(status);
          } else {
            const response = result[0];
            if (response.address_components && response.formatted_address && response.geometry) {
              resolve(new Address({
                formattedAddress: response.formatted_address,
                locality: _find(response.address_components, "locality"),
                country: _find(response.address_components, "country"),
                latitude: response.geometry.location?.lat() ?? 0,
                longitude: response.geometry.location?.lng() ?? 0,
                placeId: "",
                placeLabel: ""
              }));
            } else {
              console.error("missing informations");
              reject("missing informations");
            }
          }
        }
      );
    });
  }

  const _search = (search: string) => {
    if (!enabled) {
      throw new Error("offline mode, do not call this method");
    }
    return new Promise<google.maps.places.AutocompletePrediction[]>(
      (resolve, reject) => {
        searchService!.getPlacePredictions(
          {
            input: search,
            sessionToken: sessionId!
          },
          function (result, status) {
            if (status != google.maps.places.PlacesServiceStatus.OK || !result) {
              reject(status);
            } else {
              resolve(result);
            }
          }
        );
      }
    );
  }

  const _get = (id: string) => {
    if (!enabled) {
      throw new Error("offline mode, do not call this method");
    }
    return new Promise<google.maps.places.PlaceResult>((resolve, reject) => {
      placeService!.getDetails(
        {
          placeId: id,
          sessionToken: sessionId!,
          fields: ["formatted_address", "geometry", "address_components", "name"]
        },
        (result, status) => {
          if (status != google.maps.places.PlacesServiceStatus.OK || !result) {
            reject(status);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  const _find = (components: google.maps.GeocoderAddressComponent[], type: string): string => {
    const found = _.find(components, c =>
      _.some(c.types, t => t === type)
    );
    return (found && found.long_name) || "";
  }

  return {
    search,
    get,
    reverseSearch
  }
}