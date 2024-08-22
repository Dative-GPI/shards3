<script lang="ts">
import { inject, ref, type Ref } from 'vue';

import { type Map, FeatureGroup } from 'leaflet';

export default {
  name: 'FSMapFeatureGroup',
  setup() {
    const map = inject<Ref<Map | null>>('map');

    if(!map) {
      throw new Error('FSMapFeatureGroup must be used inside a FSMap component');
    }

    if(!map.value) {
      throw new Error('FSMapFeatureGroup must be used inside a FSMap component with a map');
    }

    const featureGroup = ref<FeatureGroup | null>(new FeatureGroup());

    inject('featureGroup', featureGroup);
  }
};
</script>
