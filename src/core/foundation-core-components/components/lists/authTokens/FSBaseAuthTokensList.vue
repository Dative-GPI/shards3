<template>
  <FSDataTable
    :items="authTokens"
    :tableCode="$props.tableCode"
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
      #item.creationDate="{item}"
    >
      <FSText>
        {{ epochToLongTimeFormat(item.creationDate) }}
      </FSText>
    </template>
    <template
      #item.dateMax="{item}"
    >
      <FSText>
        {{ epochToLongTimeFormat(item.dateMax) }}
      </FSText>
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";
import _ from "lodash";

import { useDateFormat, useAuthTokens } from "@dative-gpi/foundation-shared-services/composables";
import { type AuthTokenFilters } from "@dative-gpi/foundation-shared-domain/models";

import FSDataTable from "../FSDataTable.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

export default defineComponent({
  name: "FSBaseAuthTokensList",
  components: {
    FSDataTable,
    FSText
  },
  props: {
    authTokensFilters: {
      type: Object as PropType<AuthTokenFilters | null>,
      required: false,
      default: null
    },
    tableCode: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { getMany: fetchAuthTokens, entities: authTokens } = useAuthTokens();
    const { epochToLongTimeFormat } = useDateFormat();

    watch(() => props.authTokensFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetchAuthTokens(props.authTokensFilters ?? undefined);
      }
    }, { immediate: true });

    return {
      authTokens,
      epochToLongTimeFormat
    };
  }
});
</script>