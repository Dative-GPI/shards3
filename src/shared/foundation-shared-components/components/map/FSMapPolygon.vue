<template>
  <slot />
</template>

<script lang="ts">
import { inject, type PropType, onMounted, type Ref, watch, ref } from 'vue';

import { type Map, type LatLng, type Polygon, type FeatureGroup, polygon } from 'leaflet';

import { useColors } from "../../composables";
import { FEATUREGROUP, MAP } from './keys';

export default {
  name: 'FSMapPolygon',
  props: {
    color: {
      type: String,
      default: 'primary',
      required: false
    },
    latlngs: {
      type: Array as PropType<Pick<LatLng, "lat" | "lng">[] | null>,
      required: true
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const map = inject<Ref<Map | null>>(MAP);
    const featureGroup = inject<Ref<FeatureGroup | null>>(FEATUREGROUP, ref(null));

    const { getColors } = useColors();

    const lastPolygon = ref<Polygon | null>(null); 

    if(!map) {
      throw new Error('FSMapTileLayer must be used inside a FSMap component');
    }

    if(!map.value) {
      throw new Error('FSMapTileLayer must be used inside a FSMap component with a map');
    }

    const updatePolygon = () => {
      if(!map.value || !props.latlngs) {
        return;
      }

      if(lastPolygon.value) {
        if(featureGroup && featureGroup.value) {
          featureGroup.value.removeLayer(lastPolygon.value);
        } else {
          map.value.removeLayer(lastPolygon.value);
        }
      }

      const color = getColors(props.color).base;
      lastPolygon.value = polygon(props.latlngs.map((coord) => [coord.lat, coord.lng]), {
        color: color,
        fillColor: color + "50",
        fillOpacity: 0.5,
        className: 'fs-map-area',
      })
      
      lastPolygon.value.on('click', (e) => {
        emit('click', e);
      });
      
      if(featureGroup && featureGroup.value) {
        lastPolygon.value.addTo(featureGroup.value);
      }
      else {
        lastPolygon.value.addTo(map.value);
      }
    };

    onMounted(updatePolygon);

    watch(() => [props.color, props.latlngs], updatePolygon);
  }
};
</script>
