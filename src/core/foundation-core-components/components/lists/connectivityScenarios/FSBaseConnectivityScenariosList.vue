<template>
  <FSDataTable
    :loading="fetchingConnectivityScenarios"
    :modelValue="$props.modelValue"
    :items="connectivityScenarios"
    :tableCode="$props.tableCode"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>

    <template
      #item.time="{ item }"
    >
      {{ getTimeBestString(item.time) }}
    </template>

    <template
      #item.deviceOrganisationImageId="{ item }"
    >
      <FSImage
        v-if="item.deviceOrganisationImageId"
        width="34px"
        height="34px"
        :imageId="item.deviceOrganisationImageId"
      />
    </template>
    <template
      #item.deviceOrganisationConnectivity="{ item }"
    >
      <FSIcon
        v-if="item.deviceOrganisationConnectivity"
        :icon="item.deviceOrganisationConnectivity.icon"
        :color="item.deviceOrganisationConnectivity.color"
      />
    </template>
    <template
      #item.warnDeviceManager="{ item }"
    >
      <FSIconCheck
        :value="item.warnDeviceManager"
      />
    </template>
    <template
      #item.warnOnReconnection="{ item }"
    >
      <FSIconCheck
        :value="item.warnOnReconnection"
      />
    </template> 
  </FSDataTable>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";
import _ from "lodash";

import { ConnectivityStatus } from "@dative-gpi/foundation-shared-domain/enums";
import {ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { getTimeBestString } from "@dative-gpi/foundation-shared-components/utils"

import type { ConnectivityScenarioFilters } from "@dative-gpi/foundation-core-domain/models";
import { useConnectivityScenarios } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSIconCheck from "@dative-gpi/foundation-shared-components/components/FSIconCheck.vue";

export default defineComponent({
  name: "FSBaseConnectivityScenariosList",
  components: {
    FSDataTable,
    FSIconCheck,
    FSImage,
    FSIcon
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    },
    connectivityScenarioFilters: {
      type: Object as PropType<ConnectivityScenarioFilters>,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { entities: connectivityScenarios, fetching: fetchingConnectivityScenarios, getMany: getManyConnectivityScenarios } = useConnectivityScenarios();
    
    const fetch = () =>{
      getManyConnectivityScenarios(props.connectivityScenarioFilters);
    }
 
    watch(() => [props.connectivityScenarioFilters], (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetch();
      }
    }, { immediate: true });
    

    return {
      fetchingConnectivityScenarios,
      connectivityScenarios,
      ConnectivityStatus,
      ColorEnum,
      getTimeBestString
    };
  }
});
</script>
