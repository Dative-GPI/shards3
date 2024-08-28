<template>
  <slot />
</template>

<script lang="ts">
import { inject, type PropType, onMounted, type Ref, watch, ref } from 'vue';

import { type Map, type DivIcon, divIcon, type LatLng, marker, type Marker, type MarkerClusterGroup, type Layer } from 'leaflet';

import { useColors } from "../../composables";

import { gpsMarkerHtml, locationMarkerHtml, pinMarkerHtml } from '../../utils/leafletMarkers';
import { MAP, MARKERCLUSTERGROUP } from './keys';

export default {
  name: 'FSMapMarker',
  props: {
    variant: {
      type: String as PropType<'gps' | 'location' | 'pin'>,
      default: 'location',
      required: false
    },
    color: {
      type: String,
      default: 'primary',
      required: false
    },
    latlng: {
      type: Object as PropType<Pick<LatLng, "lat" | "lng"> | null>,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    selected: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const map = inject<Ref<Map | null>>(MAP);
    const markerClusterGroup = inject<Ref<MarkerClusterGroup | null>>(MARKERCLUSTERGROUP, ref(null));

    const { getColors } = useColors();

    const lastMarker = ref<Marker | null>(null); 

    if(!map) {
      throw new Error('FSMapTileLayer must be used inside a FSMap component');
    }

    if(!map.value) {
      throw new Error('FSMapTileLayer must be used inside a FSMap component with a map');
    }

    const updateMarker = () => {
      if(!map.value || !props.latlng) {
        return;
      }

      if(lastMarker.value) {
        if(markerClusterGroup && markerClusterGroup.value) {
          markerClusterGroup.value.removeLayer(lastMarker.value);
        } else {
          map.value.removeLayer(lastMarker.value as Layer);
        }
      }

      let icon: DivIcon | null = null;
      if(props.variant === 'gps') {
        const size = 16;
        icon = divIcon({
          html: gpsMarkerHtml(),
          className: 'fs-map-mylocation',
          iconSize: [size, size],
          iconAnchor: [size / 2, size / 2],
        });
      } else if(props.variant === 'location' && props.icon) {
        const size = 36;
        icon = divIcon({
          html: locationMarkerHtml(props.icon, getColors(props.color).base),
          iconSize: [size, size],
          className: props.selected ? 'fs-map-location fs-map-location-selected' : 'fs-map-location',
          iconAnchor: [size / 2, size / 2],
        });
      } else {
        const size = 20;
        icon = divIcon({
          html: pinMarkerHtml(getColors(props.color).base),
          iconSize: [size, size],
          className: props.selected ? 'fs-map-location fs-map-location-selected' : 'fs-map-location',
          iconAnchor: [size / 2, size / 2],
        });
      }
      
      lastMarker.value = marker(props.latlng, { icon });
      lastMarker.value.on('click', (e) => {
        emit('click', e);
      });

      if(markerClusterGroup && markerClusterGroup.value) {
        lastMarker.value.addTo(markerClusterGroup.value);
      } else {
        lastMarker.value.addTo(map.value);
      }
    };

    onMounted(updateMarker);

    watch(() => [props.variant, props.color, props.latlng, props.selected], updateMarker);
  }
};
</script>
