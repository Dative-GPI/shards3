<template>
  <FSDataTable
    defaultMode="iterator"
    :loading="fetchingDeviceExplorerElements"
    :singleSelect="$props.singleSelect"
    :items="deviceExplorerElements"
    :showSelect="$props.editable"
    :tableCode="$props.tableCode"
    :itemTo="$props.itemTo"
    :noSearch="true"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-model:search="search"
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
        :thumbnail="true"
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
      #item.type="{ item }"
    >
      <FSIcon
        v-if="item.type === DeviceExplorerElementType.Group"
      >
        mdi-folder-outline
      </FSIcon>
      <FSIcon
        v-else
      >
        mdi-widgets-outline
      </FSIcon>
    </template>

    <template
      #item.icon="{ item }"
    >
      <FSIcon
        v-if="item.type === DeviceExplorerElementType.Group"
      >
        {{ item.icon }}
      </FSIcon>
    </template>
    <template
      #item.connectivity="{ item }"
    >
      <FSCol
        v-if="item.type === DeviceExplorerElementType.DeviceOrganisation"
      >
        <FSConnectivity
          v-if="item.connectivity.status != ConnectivityStatus.None"
          :deviceConnectivity="item.connectivity"
        />
      </FSCol>
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
        v-if="item.type === DeviceExplorerElementType.DeviceOrganisation"
        :modelStatuses="item.modelStatuses"
        :deviceStatuses="item.status.statuses"
      />
    </template>

    <template
      #item.tile="{ item, toggleSelect }"
    >
      <FSGroupTileUI
        v-if="item.type === DeviceExplorerElementType.Group"
        :to="$props.itemTo && $props.itemTo(item)"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        v-bind="item"
      />
      <FSDeviceOrganisationTileUI
        v-if="item.type === DeviceExplorerElementType.DeviceOrganisation"
        :to="$props.itemTo && $props.itemTo(item)"
        :deviceConnectivity="item.connectivity"
        :deviceStatuses="item.status.statuses"
        :deviceWorstAlert="item.worstAlert"
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
import { computed, defineComponent, type PropType, ref, watch } from "vue";
import { type RouteLocation } from "vue-router";
import _ from "lodash";
  
import { type DeviceExplorerElementFilters, type DeviceExplorerElementInfos} from "@dative-gpi/foundation-core-domain/models";
import { ConnectivityStatus, DeviceExplorerElementType } from "@dative-gpi/foundation-shared-domain/enums";
import { useDeviceExplorerElements } from "@dative-gpi/foundation-core-services/composables";
import { useDebounce } from "@dative-gpi/foundation-shared-components/composables";

import FSDeviceOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDeviceOrganisationTileUI.vue";
import FSStatusesCarousel from "@dative-gpi/foundation-shared-components/components/deviceOrganisations/FSStatusesCarousel.vue";
import FSConnectivity from "@dative-gpi/foundation-shared-components/components/deviceOrganisations/FSConnectivity.vue";
import FSWorstAlert from "@dative-gpi/foundation-shared-components/components/deviceOrganisations/FSWorstAlert.vue";
import FSGroupTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSGroupTileUI.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";

import FSDataTable from "../lists/FSDataTable.vue";

export default defineComponent({
  name: "FSBaseDevicesExplorer",
  components: {
    FSDeviceOrganisationTileUI,
    FSStatusesCarousel,
    FSConnectivity,
    FSGroupTileUI,
    FSWorstAlert,
    FSDataTable,
    FSTagGroup,
    FSImage
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    deviceExplorerElementFilters: {
      type: Object as PropType<DeviceExplorerElementFilters>,
      required: false,
      default: null
    },
    connectedOnly: {
      type: Boolean,
      required: false,
      default: false
    },
    itemTo: {
      type: Function as PropType<(item: DeviceExplorerElementInfos) => Partial<RouteLocation>>,
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
    const { entities, fetching: fetchingDeviceExplorerElements, getMany: getManyDeviceExplorerElements } = useDeviceExplorerElements();
    const { debounce } = useDebounce();

    const search = ref("");

    const deviceExplorerElements = computed((): DeviceExplorerElementInfos[] => {
      if (props.connectedOnly) {
        return entities.value.filter(dee => 
          dee.type === DeviceExplorerElementType.Group ||
          (dee.connectivity != null && dee.connectivity.status != ConnectivityStatus.None)
        );
      }
      return entities.value;
    });

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    const fetch = () => {
      getManyDeviceExplorerElements({ ...props.deviceExplorerElementFilters, search: search.value });
    }

    // Delay to wait before fetching after a search change
    const debounceFetch = (): void => debounce(fetch, 1500);
  
    watch(() => props.deviceExplorerElementFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetch();
      }
    }, { immediate: true });

    watch(search, (next, previous) => {
      if (next !== previous && next.length === 0 || next.length >= 3) {
        debounceFetch();
      }
    });

    return {
      fetchingDeviceExplorerElements,
      DeviceExplorerElementType,
      deviceExplorerElements,
      ConnectivityStatus,
      search,
      isSelected
    };
  }
});
</script>