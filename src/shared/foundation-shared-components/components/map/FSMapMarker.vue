<script lang="ts">
import { inject, type PropType, onMounted, type Ref, watch, ref } from 'vue';

import { type Map, type DivIcon, divIcon, type LatLng, marker, type Marker, type MarkerClusterGroup } from 'leaflet';

import { useColors } from "../../composables";

import { gpsMarkerHtml, locationMarkerHtml } from '../../utils/leafletMarkers';

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
    }
  },
  setup(props) {
    const map = inject<Ref<Map | null>>('map');
    const markerClusterGroup = inject<Ref<MarkerClusterGroup | null>>('markerClusterGroup');

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
        lastMarker.value.remove();
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
          className: 'fs-map-location',
          iconAnchor: [size / 2, size / 2],
        });
      }
      
      if(!icon) {
        return;
      }
      
      lastMarker.value = marker(props.latlng, { icon });

      if(markerClusterGroup && markerClusterGroup.value) {
        console.log("cluster")
        lastMarker.value.addTo(markerClusterGroup.value);
      } else {
        console.log("map")
        lastMarker.value.addTo(map.value);
      }
    };

    onMounted(updateMarker);

    watch(() => [props.variant, props.color, props.latlng], updateMarker);
  }
};
</script>
