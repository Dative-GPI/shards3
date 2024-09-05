<template>
  <FSDataTable
    :items="userOrganisations"
    :itemTo="$props.itemTo"
    :modelValue="$props.modelValue"
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
      #item.allowEmails="{ item }"
    >
      <FSIconCheck
        :value="item.allowEmails"
      />
    </template>
    <template
      #item.allowSms="{ item }"
    >
      <FSIconCheck
        :value="item.allowSms"
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
      #item.validity="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ userValidityLabel(item.validity) }}
      </FSSpan>
    </template>
    <template
      #item.userType="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ userTypeLabel(item.userType) }}
      </FSSpan>
    </template>
    <template
      #item.tile="{ item, toggleSelect }"
    >
      <FSUserOrganisationTileUI
        :roleLabel="item.roleLabel"
        :roleIcon="item.roleIcon"
        :userType="item.userType"
        :imageId="item.imageId"
        :admin="item.admin"
        :name="item.name"
        :to="$props.itemTo && $props.itemTo(item)"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { defineComponent, watch } from "vue";
import type { RouteLocation } from "vue-router";
import _ from "lodash";

import type { UserOrganisationFilters, UserOrganisationInfos } from "@dative-gpi/foundation-core-domain/models";
import { userTypeLabel, userValidityLabel } from "@dative-gpi/foundation-core-components/utils";
import { useUserOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSIconCheck from "@dative-gpi/foundation-shared-components/components/FSIconCheck.vue";
import FSUserOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSUserOrganisationTileUI.vue";

export default defineComponent({
  name: "FSBaseUserOrganisationsList",
  components: {
    FSDataTable,
    FSImage,
    FSUserOrganisationTileUI,
    FSSpan,
    FSTagGroup,
    FSIconCheck

  },
  props: {
    userOrganisationsFilters: {
      type: Object as PropType<UserOrganisationFilters | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    itemTo: {
      type: Function as PropType<(item: UserOrganisationInfos) => Partial<RouteLocation>>,
      required: false
    },
    tableCode: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getMany: fetchUserOrganisations, entities: userOrganisations } = useUserOrganisations();

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    watch(() => props.userOrganisationsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetchUserOrganisations(props.userOrganisationsFilters ?? undefined);
      }
    }, { immediate: true });

    return {
      userOrganisations,
      userValidityLabel,
      userTypeLabel,
      isSelected
    };
  }
});
</script>