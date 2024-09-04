<template>
  <FSCol
    gap="24px"  
  >
    <FSCol>
      <FSText
        font="text-button"
      >
        {{ $tr("ui.common.selection-reminder", "Selection reminder") }}
      </FSText>
      <!-- Add carousel -->
      <FSSimpleDeviceOrganisationsList
        :filters="selectedFilters"
        :showEdit="false"
        :showRemove="false"
        direction="row"
      />
    </FSCol>

    <FSCol>
      <FSText
        font="text-button"
      >
        {{ $tr("ui.common.devices-list", "Devices list") }}
      </FSText>
      <FSBaseDeviceOrganisationsList
        :tableCode="T.DEVICES_SELECT"
        :modelValue="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        v-bind="$attrs"
      />
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed } from "vue";

import type { DeviceOrganisationFilters } from "@dative-gpi/foundation-core-domain/models";

import { TABLES as T } from "../../../utils";

import FSSimpleDeviceOrganisationsList from "./FSSimpleDeviceOrganisationsList.vue";
import FSBaseDeviceOrganisationsList from "./FSBaseDeviceOrganisationsList.vue";

export default defineComponent({
  name: "FSSelectDeviceOrganisationsList",
  components: {
    FSSimpleDeviceOrganisationsList,
    FSBaseDeviceOrganisationsList
  },
  props: {
    modelValue: {
      type: Array as PropType<string[]>,
      required: true
    }
  },
  setup(props){
    const selectedFilters = computed(() => {
      return { 
        deviceOrganisationsIds: props.modelValue
      } satisfies DeviceOrganisationFilters;
    })

    return {
      T,
      selectedFilters
    }
  }
});
</script>