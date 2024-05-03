<template>
  <FSCol class="fs-map">
    <FSRow
      v-if="showLayerChoice"
      gap="2px"
      class="fs-map-overlay-layer-choice"
    >
      <FSChip
        v-for="mapLayer in mapLayers"
        :key="mapLayer"
        :label="mapLayer.label"
        :editable="true"
        :color="innerSelectedLayer === mapLayer.name ? 'dark' : 'light'"
        variant="full"
        @click="setMapBaseLayer(mapLayer.name)"
      />
    </FSRow>
    <FSCol :style="style">
      <div
        :id="mapId"
        :style="{ height: $props.height, width: '100%' }"
      ></div>
    </FSCol>
    <FSCol
      class="fs-map-overlay-container"
      align="center-center"
    >
      <FSMapEditPointAddressOverlay
        v-if="$props.editable"
        :modelValue="(innerModelValue.find((loc) => loc.id === selectedLocationId))?.address"
        @update:locationCoord="($event) => onNewCoordEntered($event)"
      />
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { PropType, computed, defineComponent, onMounted, ref, watch } from "vue";
import { v4 as uuidv4 } from "uuid"; // Import the UUID library

import FSCard from '../FSCard.vue'
import FSCol from '../FSCol.vue'
import FSRow from '../FSRow.vue'
import FSText from '../FSText.vue'
import FSButton from '../FSButton.vue'
import FSChip from '../FSChip.vue'

import FSMapEditPointAddressOverlay from "./FSMapEditPointAddressOverlay.vue";

import L from "leaflet";
import { ColorEnum, mapLayers } from "../../models";
import { useColors } from "../../composables";
import { Address } from "../../../../core/foundation-core-domain/models/locations/address";
import { LocationInfos } from "../../../../core/foundation-core-domain/models/locations/locationInfos";
import { useAddress } from "../../composables/useAddress";


export default defineComponent({
  name: "FSMap",
  components: {
    FSCard,
    FSCol,
    FSRow,
    FSText,
    FSButton,
    FSChip,
    FSMapEditPointAddressOverlay,
  },
  props: {
    selectedLayer: {
      type: String,
      default: "osm",
    },
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: '400px'
    },
    showLayerChoice: {
      type: Boolean,
      required: false,
      default: true,
    },
    editable: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelValue: {
      type: Array<LocationInfos>,
      required: false,
      default: () => [],
    },
    center: {
      type: Array<number>,
      default: [45.71, 5.07],
      required: false
    },
    singlePoint: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { getAddressFromCoordinates } = useAddress();

    const innerModelValue = ref(props.modelValue);
    const innerSelectedLayer = ref(props.selectedLayer);
    const map = ref<L.Map>();
    const selectedLocationId = ref<string | null>(null);

    const mapId = `map-${uuidv4()}`;
    const pinLayerGroup = new L.LayerGroup();
    const baseLayerGroup = new L.LayerGroup();

    const { getColors } = useColors();

    if (props.singlePoint && props.modelValue.length >= 1) {
      selectedLocationId.value = props.modelValue[0].id;
    }

    const style = computed((): { [key: string]: string | undefined } => {
      return {
        "--fs-map-location-pin-color": getColors(ColorEnum.Primary).base
      };
    });

    const displayLocations = () => {
      pinLayerGroup.clearLayers();
      innerModelValue.value.forEach((location) => {
        const iconHtml = `<div class="fs-map-location-pin"><i class="${location.icon} mdi v-icon notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 20px;"  ></i></div>`;

        const icon = L.divIcon({
          html: iconHtml,
          className: 'fs-map-location',
          iconSize: [40, 50],
          iconAnchor: [20, 45],
        });

        L.marker([location.address.latitude, location.address.longitude], { icon }).addTo(pinLayerGroup).bindPopup(location.label);
      });
    };

    const enhanceAddressLocation = async (location: LocationInfos, initialIcon: string) => {
      const address = location.address;
      const enhancedAddress = await getAddressFromCoordinates(address.latitude, address.longitude)
      if (enhancedAddress.formattedAddress !== "") {
        location.address = enhancedAddress;
      }
      location.icon = initialIcon;
      innerModelValue.value = innerModelValue.value.map((loc) => loc.id === location.id ? location : loc);
    }

    const modifyLocationAddress = (locationId: string, newAddress: Address) => {
      const location = innerModelValue.value.find((loc) => loc.id === locationId);
      if (!location) return;
      const initialIcon = location.icon;
      const newLocation = {
        ...location,
        icon: 'mdi-loading',
        address: {
          ...newAddress
        },
      };
      innerModelValue.value = innerModelValue.value.map((loc) => loc.id === locationId ? newLocation : loc);
      enhanceAddressLocation(newLocation, initialIcon);
    };

    const initMap = () => {
      map.value = L.map(mapId, { zoomAnimation: false }).setView([props.center[0], props.center[1]], 13);

      map.value.zoomControl.remove();

      baseLayerGroup.addTo(map.value);
      pinLayerGroup.addTo(map.value);
      setMapBaseLayer(props.selectedLayer);
      displayLocations();

      map.value.on('click', (e) => {
        if (props.editable) {
          onNewCoordEntered(new Address({
            latitude: parseFloat(e.latlng.lat.toFixed(6)),
            longitude: parseFloat(e.latlng.lng.toFixed(6)),
            placeId: "",
            placeLabel: "",
            formattedAddress: "",
            locality: "",
            country: ""
          }));
        }
      });
    };

    const setMapBaseLayer = (layerName: string) => {
      innerSelectedLayer.value = layerName;
      const layer = mapLayers.find((mapLayer) => mapLayer.name === layerName) ?? mapLayers[0];
      baseLayerGroup.clearLayers();
      layer.layer.addTo(baseLayerGroup);
    };

    const onNewCoordEntered = (newCoord: Address) => {
      if (selectedLocationId.value) {
        modifyLocationAddress(selectedLocationId.value, newCoord);
      } else {
        const newLocation = new LocationInfos({
          id: uuidv4(),
          label: 'New location',
          icon: 'mdi-circle',
          address: newCoord,
          organisationId: '',
          code: "",
          tags: [],
          modelsIds: [],
          deviceOrganisationsIds: [],
          deviceOrganisationsCount: 0
        });
        innerModelValue.value = [...innerModelValue.value, newLocation];
        modifyLocationAddress(newLocation.id, newCoord);
      }
      map.value?.flyTo([newCoord.latitude, newCoord.longitude], map.value?.getZoom() ?? 13);
    };

    onMounted(() => {
      initMap();
    });

    watch(() => innerModelValue.value, () => {
      displayLocations();
    });

    return {
      onNewCoordEntered,
      setMapBaseLayer,
      innerSelectedLayer,
      mapId,
      style,
      selectedLocationId,
      innerModelValue,
      mapLayers,
    };
  },
});
</script>