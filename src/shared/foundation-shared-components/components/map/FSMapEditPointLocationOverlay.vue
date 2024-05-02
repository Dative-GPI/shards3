<template>
  <FSCard
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
          v-if="menuLocationCoord"
          icon="mdi-arrow-collapse"
          variant="icon"
          @click="menuLocationCoord = !menuLocationCoord"
        />
        <FSButton
          v-else
          icon="mdi-arrow-expand"
          variant="icon"
          @click="menuLocationCoord = !menuLocationCoord"
        />
      </FSRow>
      <FSForm
        v-if="menuLocationCoord"
        variant="standard"
        @submit="onCoordinateChange()"
      >
        <FSRow>
          <FSNumberField
            :label="$tr('ui.map.latitude', 'Latitude')"
            v-model="latitude"
          />
          <FSNumberField
            :label="$tr('ui.map.longitude', 'Longitude')"
            v-model="longitude"
          />
        </FSRow>
        <FSButton
          :label="$tr('ui.map.save', 'Save')"
          color="primary"
          prepend-icon="mdi-content-save"
          type="submit"
          style="display: none;"
        />
      </FSForm>
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
</template>

<script lang="ts">
import { PropType, defineComponent, ref, watch } from "vue";

import FSCard from '../FSCard.vue'
import FSCol from '../FSCol.vue'
import FSRow from '../FSRow.vue'
import FSText from '../FSText.vue'
import FSButton from '../FSButton.vue'
import FSNumberField from '../fields/FSNumberField.vue'
import FSForm from '../FSForm.vue'
import { Address } from "../../../../core/foundation-core-domain/models/locations/address";


export default defineComponent({
  name: "FSMapEditPointLocationOverlay.vue",
  components: {
    FSCard,
    FSCol,
    FSRow,
    FSText,
    FSButton,
    FSNumberField,
    FSForm
  },
  props: {
    modelValue: {
      type: Object as PropType<Address>,
      default: null,
      required: false,
    },
  },
  emits: ['update:modelValue', 'update:locationCoord'],
  setup(props, { emit }) {
    const menuLocationCoord = ref(false);

    const latitude = ref(props.modelValue.latitude);
    const longitude = ref(props.modelValue.longitude);

    const onCoordinateChange = () => {
      const newModelValue = new Address({
        country: "",
        formattedAddress: "",
        locality: "",
        placeId: "",
        placeLabel: "",
        latitude: latitude.value,
        longitude: longitude.value,
      });
      emit('update:locationCoord', newModelValue);
      console.log('update:locationCoord', newModelValue);
    };

    watch(() => props.modelValue, (value) => {
      latitude.value = value.latitude;
      longitude.value = value.longitude;
    });

    return {
      onCoordinateChange,
      latitude,
      longitude,
      menuLocationCoord,
    };
  },
});
</script>