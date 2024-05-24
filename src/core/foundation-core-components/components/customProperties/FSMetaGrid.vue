<template>
  <FSGrid
    :items="$props.items"
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
      v-for="(metaItem, index) in metaItems"
      #[`item.${metaItem.value.code}`]
      :key="index"
    >
      <FSMetaValue
        v-if="!metaItem.value.hideDefault && metaItem.customProperty"
        :customProperty="metaItem.customProperty"
        :meta="meta"
      />
    </template>
    <template
      v-for="(metaItem, index) in metaItems"
      #[`item-end.${metaItem.value.code}`]
      :key="index"
    >
      <FSMetaValue
        v-if="metaItem.value.hideDefault && metaItem.customProperty"
        :customProperty="metaItem.customProperty"
        :meta="meta"
      />
    </template>
  </FSGrid>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { FSGridItem } from "@dative-gpi/foundation-shared-components/models";

import FSGrid from "@dative-gpi/foundation-shared-components/components/FSGrid.vue";

import { CustomPropertyInfos } from "../../../foundation-core-domain/models";

import FSMetaValue from "./FSMetaValue.vue";

export default defineComponent({
  name: "FSMetaGrid",
  components: {
    FSMetaValue,
    FSGrid
  },
  props: {
    items: {
      type: Array as PropType<FSGridItem[]>,
      default: () => [],
      required: false
    },
    customProperties: {
      type: Array as PropType<CustomPropertyInfos[]>,
      default: () => [],
      required: false
    },
    meta: {
      type: Object as PropType<{ [key: string]: string }>,
      required: true
    }
  },
  setup(props) {
    const metaItems = computed(() => {
      return  props.items.filter(i => i.code.startsWith("meta."))
        .map(metaItem => {
          return {
            value: metaItem,
            customProperty: customProperty(metaItem.code)
          };
        });
    });

    const customProperty = (code: string): CustomPropertyInfos | undefined => {
      return props.customProperties.find(cp => `meta.${cp.code}` === code);
    };

    return {
      metaItems
    };
  }
});
</script>