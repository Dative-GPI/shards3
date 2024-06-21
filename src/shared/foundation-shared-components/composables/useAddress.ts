
import { Address, Place } from "@dative-gpi/foundation-core-domain/models";
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
    get
  }
}