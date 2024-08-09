<template>
  <FSButton
    prependIcon="mdi-history"
    :label="$tr('entity.custom-property.history', 'History')"
    @click="dialog = !dialog"
  />
  <FSDialog
    width="500px"
    :label="$tr('entity.custom-property.history', 'History')"
    v-model="dialog"
  >
    <template
      #body
    >
      <FSCol>
        <FSRow
          v-for="(customPropertyValue, index) in customPropertyValues"
          :key="index"
        >
          <FSText>
            {{ epochToLongTimeFormat(customPropertyValue.timestamp) }}
          </FSText>
          <FSCol
            padding="0 8px 0 0"
            align="center-right"
          >
            <FSMetaValue
              :meta="{ code: customPropertyValue.value }"
              :customProperty="$props.customProperty"
            />
          </FSCol>
        </FSRow>
      </FSCol>
    </template>
  </FSDialog>
</template>
<script lang="ts">
import { defineComponent, type PropType, ref, watch } from "vue";
import _ from "lodash";

import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import { type CustomPropertyInfos, type PropertyEntity } from "../../../foundation-core-domain/models";
import { useCustomPropertyValues } from "../../../foundation-core-services/composables";

import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSDialog from "@dative-gpi/foundation-shared-components/components/FSDialog.vue";

import FSMetaValue from "./FSMetaValue.vue";

export default defineComponent({
  name: "FSMetaHistory",
  components: {
    FSMetaValue,
    FSButton,
    FSDialog
  },
  props: {
    customProperty: {
      type: Object as PropType<CustomPropertyInfos>,
      required: true
    },
    entityType: {
      type: Number as PropType<PropertyEntity>,
      required: true
    },
    entityId: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { epochToLongTimeFormat } = useAppTimeZone();
    const { fetch, entity: customPropertyValues } = useCustomPropertyValues();

    const dialog = ref(false);

    watch(() => props.entityId, async (next, previous) => {
      if (!_.isEqual(next, previous)) {
        await fetch(props.entityType, props.entityId, props.customProperty.code);
      }
    }, { immediate: true });

    return {
      customPropertyValues,
      dialog,
      epochToLongTimeFormat
    }
  }
});
</script>