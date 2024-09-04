<template>
  <FSDataTable
    :items="deviceOrganisations"
    :customSorts="customSorts"
    :itemTo="$props.itemTo"
    :modelValue="$props.modelValue"
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
      #header.connectable-title
    >
      <FSIcon>
        mdi-wifi
      </FSIcon>
    </template>
    <template
      #header.connectivity-title
    >
      <FSIcon>
        mdi-wifi
      </FSIcon>
    </template>
    <template
      #item.imageId="{ item }"
    >
      <FSImage
        v-if="item.imageId"
        height="32px"
        width="32px"
        :imageId="item.imageId"
      />
    </template>
    <template
      #item.connectable="{ item }"
    >
      <FSCol>
        <FSConnectivity
          v-if="item.connectivity.status != ConnectivityStatus.None"
          :deviceConnectivity="item.connectivity"
        />
      </FSCol>
    </template>
    <template
      #item.connectivity="{ item }"
    >
      <FSCol>
        <FSConnectivity
          v-if="item.connectivity.status != ConnectivityStatus.None"
          :deviceConnectivity="item.connectivity"
        />
      </FSCol>
    </template>
    <template
      #item.unrestricted="{ item }"
    >
      <FSIconCheck
        :value="item.unrestricted"
      />
    </template>
    <template
      #item.tags="{ item }"
    >
      <FSTagGroup
        variant="slide"
        :editable="false"
        :tags="item.tags"
      />
    </template>
    <template
      #item.worstAlert="{ item }"
    >
      <FSWorstAlert
        :alerts="item.alerts"
        :worstAlert="item.worstAlert"
      />
    </template>
    <template
      #item.alerts="{ item }"
    >
      <FSWorstAlert
        :alerts="item.alerts"
        :worstAlert="item.worstAlert"
      />
    </template>
    <template
      #item.status="{ item }"
    >
      <FSStatusesCarousel
        :modelStatuses="item.modelStatuses"
        :deviceStatuses="item.status.statuses"
      />
    </template>
    <template
      #item.actions="{ item }"
    >
      <slot
        name="actions"
        v-bind="{ item }"
      >
      </slot>
    </template>
    <template
      v-for="(property, index) in customProperties"
      #[`item.meta.${property.code}`]="{ item }"
      :key="index"
    >
      <FSMetaValue
        :customProperty="property"
        :meta="item.meta"
      />
    </template>
  
    <template
      #item.tile="{ item, toggleSelect }"
    >
      <FSDeviceOrganisationTileUI
        v-bind="item"
        :modelValue="isSelected(item.id)"
        :singleSelect="singleSelect"
        :deviceStatuses="item.status.statuses"
        :deviceConnectivity="item.connectivity"
        :deviceWorstAlert="item.worstAlert"
        :deviceAlerts="item.alerts"
        :to="$props.itemTo && $props.itemTo(item)"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSDataTable>
</template>
  
<script lang="ts">
import type { PropType} from "vue";
import type { RouteLocation } from "vue-router";
import { computed, defineComponent, onMounted, watch } from "vue";
import _ from "lodash";
  
import { alphanumericSort } from "@dative-gpi/foundation-shared-components/utils";
import { ConnectivityStatus, PropertyEntity } from "@dative-gpi/foundation-shared-domain/enums";

import { useCustomProperties, useDeviceOrganisations } from "@dative-gpi/foundation-core-services/composables";
import type { DeviceConnectivityDetails, DeviceOrganisationFilters, DeviceOrganisationInfos} from "@dative-gpi/foundation-core-domain/models";

  
export default defineComponent({
  name: "BaseDeviceOrganisationsList",
  props: {
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    },
    deviceOrganisationFilters: {
      type: Object as PropType<DeviceOrganisationFilters>,
      required: false,
      default: null
    },
    connectedOnly: {
      type: Boolean,
      required: false,
      default: false
    },
    itemTo: {
      type: Function as PropType<(item: DeviceOrganisationInfos) => Partial<RouteLocation>>,
      required: false
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { fetching: fecthingCustomProperties, entities: customProperties, getMany: getManyCustomProperties } = useCustomProperties();
    const { entities, fetching: fetchingDeviceOrganisations, getMany: getManyDeviceOrganisations } = useDeviceOrganisations();
  
    const deviceOrganisations = computed((): DeviceOrganisationInfos[] => {
      if (props.connectedOnly) {
        return entities.value.filter(d => d.connectivity != null && d.connectivity.status != ConnectivityStatus.None);
      }
      return entities.value;
    });
  
    const customSorts = computed(() => {
      return {
        connectable: (a:DeviceConnectivityDetails, b:DeviceConnectivityDetails) => {
          return alphanumericSort(a?.status, b?.status);
        },
        connectivity: (a:DeviceConnectivityDetails, b:DeviceConnectivityDetails) => {
          return alphanumericSort(a?.status, b?.status);
        }
      }
    });
  
    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };
  
    onMounted((): void => {
      getManyCustomProperties({ 
        entities: [PropertyEntity.Device, PropertyEntity.DeviceOrganisation]
      });
    });
  
    watch(() => props.deviceOrganisationFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyDeviceOrganisations(props.deviceOrganisationFilters);
      }
    }, { immediate: true });
  
    return {
      fetchingDeviceOrganisations,
      fecthingCustomProperties,
      deviceOrganisations,
      ConnectivityStatus,
      customProperties,
      customSorts,
      isSelected
    };
  }
});
</script>
  