<template>
  <FSCol class="fs-map">
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
      <FSCard
        v-if="$props.editable"
        padding="16px"
        width="100%"
      >
        <FSCol gap="24px">
          <FSRow>
            <FSText font="text-h3">
              {{ $tr('ui.map.modify-location', 'Modify location') }}
            </FSText>
            <v-spacer />
            <FSButton
              icon="mdi-arrow-expand"
              variant="icon"
            />
          </FSRow>
          <FSRow align="center-right">
            <FSButton :label="$tr('ui.map.cancel', 'Cancel')" />
            <FSButton
              :label="$tr('ui.map.save', 'Save')"
              color="primary"
              prepend-icon="mdi-content-save"
            />
          </FSRow>
        </FSCol>
      </FSCard>
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { PropType, computed, defineComponent, onMounted, ref } from "vue";
import { v4 as uuidv4 } from "uuid"; // Import the UUID library

import FSCard from './FSCard.vue'
import FSChip from './FSChip.vue'
import FSCol from './FSCol.vue'
import FSRow from './FSRow.vue'
import FSText from './FSText.vue'
import FSButton from './FSButton.vue'

import L from "leaflet";
import { MapLayer, PinnedLocation } from "../models/map";
import { ColorEnum } from "../models";
import { useColors } from "../composables";

export default defineComponent({
  name: "FSMap",
  components: {
    FSCard,
    FSChip,
    FSCol,
    FSRow,
    FSText,
    FSButton,
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
      type: Array<PinnedLocation>,
      required: false,
      default: () => [],
    },
    center: {
      type: Array<number>,
      default: [45.71, 5.07],
      required: false
    },
  },
  emits: ['update:modelValue'],
  setup(props) {
    const mapId = uuidv4();
    const { getColors } = useColors();

    const vueJsRender = ref<HTMLElement | null>(null);

    const mapLayers: MapLayer[] = [
      {
        name: "osm",
        label: "OpenStreetMap",
        layer: L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
        })
      },
      {
        name: "imagery",
        label: "Imagery",
        layer: L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg', {
          maxZoom: 20,
          attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
        }),
      },
      {
        name: "light",
        label: "Light",
        layer: L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
          maxZoom: 20,
          attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        })
      }
    ];

    const baseMaps = mapLayers.reduce((acc, layer) => {
      acc[layer.label] = layer.layer;
      return acc;
    }, {});

    const style = computed((): { [key: string]: string | undefined } => {
      return {
        "--fs-map-location-pin-color": getColors(ColorEnum.Primary).base
      };
    });

    const selectedMap = mapLayers.find((mapLayer) => mapLayer.name === props.selectedLayer);

    onMounted(() => {
      console.log(props)
      const map = L.map(mapId).setView([props.center[0], props.center[1]], 13);
      (selectedMap ?? mapLayers[0]).layer.addTo(map);
      map.zoomControl.remove();

      props.modelValue.forEach((pinnedLocation) => {
        const iconHtml = `<div class="fs-map-location-pin"><i class="${pinnedLocation.icon} mdi v-icon notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 20px;"  ></i></div>`;

        const icon = L.divIcon({
          html: iconHtml,
          className: 'fs-map-location',
          iconSize: [40, 50],
          iconAnchor: [15, 42],
        });

        L.marker([pinnedLocation.lat, pinnedLocation.lng], { icon }).addTo(map).bindPopup(pinnedLocation.label);
        map.setView([pinnedLocation.lat, pinnedLocation.lng], 13);
      });
    });

    return {
      mapId,
      vueJsRender,
      style,
    };
  },
});
</script>