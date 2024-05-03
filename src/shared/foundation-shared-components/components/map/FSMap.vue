<template>
  <FSCol
    class="fs-map"
    :width="$props.width"
  >
    <FSRow
      v-if="showLayerChoice && selectableLayers.length > 1"
      gap="2px"
      class="fs-map-overlay-layer-choice"
    >
      <FSChip
        v-for="mapLayer in mapLayers.filter((layer) => selectableLayers.includes(layer.name))"
        :key="mapLayer"
        :label="mapLayer.label"
        :editable="true"
        :color="innerSelectedLayer === mapLayer.name ? 'dark' : 'light'"
        variant="full"
        @click="setMapBaseLayer(mapLayer.name)"
      />
    </FSRow>
    <FSRow
      v-if="$props.editable && !editing"
      class="fs-map-overlay-edit-button"
    >
      <FSButton
        prepend-icon="mdi-pencil"
        :label="$tr('ui.map.modify', 'Modify')"
        @click="editing = true"
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
      <FSCol
        width="hug"
        class="fs-map-zoom-overlay"
        align="bottom-center"
      >
        <FSButton
          v-if="$props.showMyLocation"
          :elevation="true"
          :border="false"
          color="primary"
          variant="full"
          prepend-icon="mdi-navigation-variant-outline"
          @click="locate"
        />
        <FSCol
          v-if="$props.showZoomButtons"
          gap="0"
        >
          <FSButton
            :elevation="true"
            class="fs-map-zoom-plus"
            prepend-icon="mdi-plus"
            @click="zoomIn"
            :border="false"
          />
          <FSButton
            :elevation="true"
            class="fs-map-zoom-minus"
            prepend-icon="mdi-minus"
            :border="false"
            @click="zoomOut"
          />
        </FSCol>
      </FSCol>
      <FSMapEditPointAddressOverlay
        v-if="editing"
        :label="$tr('ui.map.address', 'Address')"
        :modelValue="(innerModelValue.find((loc) => loc.id === selectedLocationId))?.address"
        @update:locationCoord="($event) => onNewCoordEntered($event)"
        @cancel="onCancel"
        @update:modelValue="onSubmit"
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
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: '400px'
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: '100%'
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
    selectedLayer: {
      type: String,
      default: "osm",
    },
    selectableLayers: {
      type: Array<string>,
      default: ["osm", "imagery"],
    },
    showLayerChoice: {
      type: Boolean,
      required: false,
      default: true,
    },
    showMyLocation: {
      type: Boolean,
      required: false,
      default: true,
    },
    showZoomButtons: {
      type: Boolean,
      required: false,
      default: true,
    },
    showLocationAddressPopup: {
      type: Boolean,
      required: false,
      default: true,
    },
    singlePoint: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { getColors } = useColors();
    const { getAddressFromCoordinates } = useAddress();

    const innerModelValue = ref(props.modelValue);
    const innerSelectedLayer = ref(props.selectedLayer);
    const map = ref<L.Map>();
    const selectedLocationId = ref<string | null>(null);
    const editing = ref(false);

    const mapId = `map-${uuidv4()}`;
    const pinLayerGroup = new L.LayerGroup();
    const baseLayerGroup = new L.LayerGroup();
    const myLocationLayerGroup = new L.LayerGroup();

    if (props.singlePoint && props.modelValue.length >= 1) {
      selectedLocationId.value = props.modelValue[0].id;
    }

    const style = computed((): { [key: string]: string | undefined } => {
      return {
        "--fs-map-location-pin-color": getColors(ColorEnum.Primary).base,
        "--fs-map-mylocation-pin-color-alpha": getColors(ColorEnum.Primary).base + "50",
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

        const marker = L.marker([location.address.latitude, location.address.longitude], { icon }).addTo(pinLayerGroup);

        if (props.showLocationAddressPopup) {
          const popupHtml = `
          <div class="fs-map-location-popup">
            <h3 class="fs-text text-h3 fs-span-ellipsis">
              <i class="${location.icon} mdi v-icon notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;"></i>
              ${location.label}
            </h3>
            <p>${location.address.formattedAddress}</p>
          </div>`;
          const popup = L.popup({
            offset: [0, -20],
          }).setContent(popupHtml);
          marker.bindPopup(popup);
        }
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
      const mapOptions = {
        zoomAnimation: false,
        zoomControl: false,
        scrollWheelZoom: false,
      };
      map.value = L.map(mapId, mapOptions).setView([props.center[0], props.center[1]], 13);
      map.value.attributionControl.remove();
      L.control.attribution({ position: 'bottomleft' }).addTo(map.value);

      baseLayerGroup.addTo(map.value);
      pinLayerGroup.addTo(map.value);
      myLocationLayerGroup.addTo(map.value);
      setMapBaseLayer(props.selectedLayer);
      displayLocations();

      map.value.on('click', (e) => {
        if (editing.value) {
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

    const zoomIn = () => {
      map.value?.zoomIn();
    };

    const zoomOut = () => {
      map.value?.zoomOut();
    };

    const locate = () => {
      map.value?.locate();
      map.value?.on('locationfound', (e) => {
        map.value?.flyTo(e.latlng, 13);

        const iconHtml = `<div class="fs-map-mylocation-pin"></div>`;

        const icon = L.divIcon({
          html: iconHtml,
          className: 'fs-map-mylocation',
          iconSize: [16, 16],
          iconAnchor: [8, 8],
        });
        myLocationLayerGroup.clearLayers();

        L.marker(e.latlng, { icon }).addTo(myLocationLayerGroup);

      });
    };

    const onCancel = () => {
      editing.value = false;
      innerModelValue.value = props.modelValue;
      map.value?.flyTo([props.center[0], props.center[1]], map.value?.getZoom() ?? 13);
    };

    const onSubmit = () => {
      emit('update:modelValue', innerModelValue.value);
      editing.value = false;
    };

    onMounted(() => {
      initMap();
    });

    watch(() => innerModelValue.value, () => {
      displayLocations();
    });

    return {
      onNewCoordEntered,
      onCancel,
      onSubmit,
      setMapBaseLayer,
      zoomIn,
      zoomOut,
      locate,
      innerSelectedLayer,
      mapId,
      style,
      editing,
      selectedLocationId,
      innerModelValue,
      mapLayers,
    };
  },
});
</script>