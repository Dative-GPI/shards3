<template>
  <FSCard
    padding="16px"
    width="100%"
    height="100%"
    :elevation="true"
  >
    <FSCol
      gap="24px"
    >
      <FSRow>
        <FSText
          font="text-h3"
        >
          {{ $tr('ui.map.modify-location', 'Modify location') }}
        </FSText>
        <v-spacer />
        <FSButton
          v-if="menuLocationCoordinates"
          icon="mdi-arrow-collapse"
          variant="icon"
          @click="menuLocationCoordinates = !menuLocationCoordinates"
        />
        <FSButton
          v-else
          icon="mdi-arrow-expand"
          variant="icon"
          @click="menuLocationCoordinates = !menuLocationCoordinates"
        />
      </FSRow>
      <FSCol
        v-if="menuLocationCoordinates"
      >
        <FSAutoCompleteAddress
          :modelValue="$props.modelValue"
          @update:modelValue="onAddressFieldSubmit($event)"
        />
        <FSForm
          variant="standard"
          @submit="onCoordinatesChange()"
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
      </FSCol>
      <FSRow
        align="center-right"
      >
        <FSButton
          :label="$tr('ui.map.cancel', 'Cancel')"
          @click="onCancel"
        />
        <FSButton
          :label="$tr('ui.map.save', 'Save')"
          color="primary"
          prepend-icon="mdi-content-save"
          @click="onSubmit"
        />
      </FSRow>
    </FSCol>
  </FSCard>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref, watch } from "vue";

import { Address } from "@dative-gpi/foundation-shared-domain/models";

import FSAutoCompleteAddress from "../autocompletes/FSAutoCompleteAddress.vue";
import FSNumberField from "../fields/FSNumberField.vue";
import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSForm from "../FSForm.vue";
import FSText from "../FSText.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSMapEditPointAddressOverlay.vue",
  components: {
    FSAutoCompleteAddress,
    FSNumberField,
    FSButton,
    FSCard,
    FSForm,
    FSText,
    FSCol,
    FSRow
  },
  props: {
    modelValue: {
      type: Object as PropType<Address>,
      default: null,
      required: false,
    }
  },
  emits: ["update:modelValue", "update:locationCoordinates", "submit", "cancel"],
  setup(props, { emit }) {
    const menuLocationCoordinates = ref(false);

    const latitude = ref(props.modelValue.latitude);
    const longitude = ref(props.modelValue.longitude);

    const onCoordinatesChange = () => {
      const newModelValue = new Address({
        country: "",
        formattedAddress: "",
        locality: "",
        placeId: "",
        placeLabel: "",
        latitude: latitude.value,
        longitude: longitude.value,
      });
      emit("update:locationCoordinates", newModelValue);
    };

    const onAddressFieldSubmit = (address: Address|null) => {
      if(address === null) {
        return;
      }
      emit('update:modelValue', address);
    };

    const onSubmit = () => {
      emit('submit');
    };

    const onCancel = () => {
      emit('cancel');
    };

    watch(() => props.modelValue, (value) => {
      latitude.value = value.latitude;
      longitude.value = value.longitude;
    });

    return {
      menuLocationCoordinates,
      longitude,
      latitude,
      onAddressFieldSubmit,
      onCoordinatesChange,
      onSubmit,
      onCancel
    };
  }
});
</script>