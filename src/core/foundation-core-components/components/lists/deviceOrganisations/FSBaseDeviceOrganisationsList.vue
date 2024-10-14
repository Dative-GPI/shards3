<template>
  <FSDataTable
    defaultMode="iterator"
    :loading="fetchingDeviceOrganisations"
    :singleSelect="$props.singleSelect"
    :headersOptions="headersOptions"
    :showSelect="$props.editable"
    :tableCode="$props.tableCode"
    :items="deviceOrganisations"
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
      #header.imageId-title
    >
      <FSIcon>
        mdi-panorama-variant-outline
      </FSIcon>
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
        v-if="item.worstAlert"
        :deviceWorstAlert="item.worstAlert"
        :deviceAlerts="item.alerts"
        :alertTo="$props.alertTo"
      />
      <div
        v-else
      />
    </template>
    <template
      #item.alerts="{ item }"
    >
      <FSWorstAlert
        v-if="item.worstAlert"
        :deviceWorstAlert="item.worstAlert"
        :deviceAlerts="item.alerts"
        :alertTo="$props.alertTo"
      />
      <div
        v-else
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
      v-for="(property, index) in customProperties"
      #[`filter.meta.${property.code}`]="{ filter }"
      :key="index"
    >
      <FSMetaValue
        v-if="filter.text !== '—'"
        variant="colorless"
        :customProperty="property"
        :meta="{ [property.code]: filter.text }"
      />
    </template>
    <template
      #item.tile="{ item, toggleSelect }"
    >
      <FSDeviceOrganisationTileUI
        :to="$props.itemTo && $props.itemTo(item)"
        :deviceConnectivity="item.connectivity"
        :deviceStatuses="item.status.statuses"
        :deviceWorstAlert="item.worstAlert"
        :singleSelect="$props.singleSelect"
        :deviceAlerts="item.alerts"
        :alertTo="$props.alertTo"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        v-bind="item"
      />
    </template>
  </FSDataTable>
</template>
  
<script lang="ts">
import { computed, defineComponent, onMounted, type PropType, watch } from "vue";
import { type RouteLocation } from "vue-router";
import _ from "lodash";
  
import { alphanumericSort, connectivityLabel } from "@dative-gpi/foundation-shared-components/utils";
import { ConnectivityStatus, PropertyEntity } from "@dative-gpi/foundation-shared-domain/enums";

import type { DeviceConnectivityDetails, DeviceOrganisationAlert, DeviceOrganisationFilters, DeviceOrganisationInfos} from "@dative-gpi/foundation-core-domain/models";
import { useCustomProperties, useDeviceOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSMetaValue from "../../customProperties/FSMetaValue.vue";
import FSDataTable from "../FSDataTable.vue";

import FSDeviceOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDeviceOrganisationTileUI.vue";
import FSStatusesCarousel from "@dative-gpi/foundation-shared-components/components/deviceOrganisations/FSStatusesCarousel.vue";
import FSConnectivity from "@dative-gpi/foundation-shared-components/components/deviceOrganisations/FSConnectivity.vue";
import FSWorstAlert from "@dative-gpi/foundation-shared-components/components/deviceOrganisations/FSWorstAlert.vue";
import FSIconCheck from "@dative-gpi/foundation-shared-components/components/FSIconCheck.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";

export default defineComponent({
  name: "FSBaseDeviceOrganisationsList",
  components: {
    FSDeviceOrganisationTileUI,
    FSStatusesCarousel,
    FSConnectivity,
    FSWorstAlert,
    FSDataTable,
    FSIconCheck,
    FSMetaValue,
    FSTagGroup,
    FSImage
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
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
    alertTo: {
      type: Function,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
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

    const headersOptions = computed(() => ({
      connectable: {
        fixedFilters: [{
          value: ConnectivityStatus.None,
          text: "—"
        }, {
          value: ConnectivityStatus.Offline,
          text: connectivityLabel(ConnectivityStatus.Offline)
        }, {
          value: ConnectivityStatus.AlmostOffline,
          text: connectivityLabel(ConnectivityStatus.AlmostOffline)
        }, {
          value: ConnectivityStatus.PartiallyConnected,
          text: connectivityLabel(ConnectivityStatus.PartiallyConnected)
        }, {
          value: ConnectivityStatus.Connected,
          text: connectivityLabel(ConnectivityStatus.Connected)
        }],
        methodFilter: (value: ConnectivityStatus, item: DeviceConnectivityDetails) => {
          switch(value) {
            case ConnectivityStatus.None:
              return !item.status;
            default:
              return item.status == value;
          }
        },
        sort: (a: DeviceConnectivityDetails, b: DeviceConnectivityDetails) => alphanumericSort(a?.status, b?.status)
      },
      connectivity: {
        fixedFilters: [{
          value: ConnectivityStatus.None,
          text: "—"
        }, {
          value: ConnectivityStatus.Offline,
          text: connectivityLabel(ConnectivityStatus.Offline)
        }, {
          value: ConnectivityStatus.AlmostOffline,
          text: connectivityLabel(ConnectivityStatus.AlmostOffline)
        }, {
          value: ConnectivityStatus.PartiallyConnected,
          text: connectivityLabel(ConnectivityStatus.PartiallyConnected)
        }, {
          value: ConnectivityStatus.Connected,
          text: connectivityLabel(ConnectivityStatus.Connected)
        }],
        methodFilter: (value: ConnectivityStatus, item: DeviceConnectivityDetails) => {
          switch(value) {
            case ConnectivityStatus.None:
              return !item.status;
            default:
              return item.status == value;
          }
        },
        sort: (a: DeviceConnectivityDetails, b: DeviceConnectivityDetails) => alphanumericSort(a?.status, b?.status)
      },
      worstAlert: {
        sort: (a: DeviceOrganisationAlert, b: DeviceOrganisationAlert) => alphanumericSort(a?.criticity, b?.criticity)
      },
      ...customProperties.value.reduce((acc, cp) => ({
        ...acc,
        [`meta.${cp.code}`]: {
          fixedFilters: cp.useOnlyAllowedValues ? [{
            value: (null as string | null),
            text: "—"
          }].concat(Object.keys(cp.allowedValues).map(av => ({
            value: av,
            text: av
          }))): undefined,
          methodFilterRaw: (value: any, item: DeviceOrganisationInfos) => item.meta[cp.code] == value,
          sort: (a: string, b: string) => alphanumericSort(a, b)
        }
      }), {})
    }));
  
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
      headersOptions,
      isSelected
    };
  }
});
</script>
  