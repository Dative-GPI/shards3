<script lang="ts">
import { inject, type PropType, onMounted, type Ref, watch } from 'vue';

import type { Map, Layer } from 'leaflet';

export default {
  name: 'FSMapTileLayer',
  props: {
    layer: {
      type: Object as PropType<Layer>,
      required: false
    }
  },
  setup(props) {
    const map = inject<Ref<Map | null>>('map');

    const lastLayer = props.layer;

    if(!map) {
      throw new Error('FSMapTileLayer must be used inside a FSMap component');
    }

    if(!map.value) {
      throw new Error('FSMapTileLayer must be used inside a FSMap component with a map');
    }

    const updateLayer = () => {
      if (!props.layer || !map.value) {
        return;
      }

      if(lastLayer) {
        map.value.removeLayer(lastLayer);
      }

      props.layer.addTo(map.value);
    };

    onMounted(updateLayer);

    watch(() => props.layer, updateLayer);
  }
};
</script>
