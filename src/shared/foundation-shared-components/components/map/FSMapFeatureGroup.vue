<template>
  <slot />
</template>

<script lang="ts">
import { inject, provide, ref, type Ref } from 'vue';

import { type Map, FeatureGroup } from 'leaflet';
import { MAP } from './keys';

export default {
  name: 'FSMapFeatureGroup',
  props: {
    expectedLayers: {
      type: Number,
      default: 0,
      required: false
    }
  },
  setup(props, { emit }) {
    const map = inject<Ref<Map | null>>(MAP);
    let added = false;
    
    if(!map) {
      throw new Error('FSMapFeatureGroup must be used inside a FSMap component');
    }

    if(!map.value) {
      throw new Error('FSMapFeatureGroup must be used inside a FSMap component with a map');
    }

    const featureGroup = ref<FeatureGroup>(new FeatureGroup());

    provide('featureGroup', featureGroup);

    featureGroup.value.on("layeradd", () => {
      if(!map.value) {
        return;
      }

      const layers = featureGroup.value.getLayers();

      if(layers.length === props.expectedLayers && !added) {
        featureGroup.value.addTo(map.value);
        added = true;
        emit("update:bounds", featureGroup.value.getBounds());
      }
    });
  }
};
</script>
