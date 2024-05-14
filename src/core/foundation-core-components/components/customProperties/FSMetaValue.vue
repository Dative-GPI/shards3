<template>
  <FSSpan
    v-if="customProperty.useOnlyAllowedValues && !isNullOrSpaces(customProperty.allowedValues[meta[customProperty.code]])">
    {{ value }}
  </FSSpan>
  <FSSpan
    v-else-if="[PropertyDataType.Number, PropertyDataType.String, PropertyDataType.DateTime].includes(customProperty.dataType)">
    {{ value }}
</FSSpan>
  <FSIcon v-else-if="[PropertyDataType.Boolean, PropertyDataType.Icon].includes(customProperty.dataType)">
    {{ value }}
  </FSIcon>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from "vue";

import FSSwitch from "@dative-gpi/foundation-shared-components/components/FSSwitch.vue";
import FSIconField from "@dative-gpi/foundation-shared-components/components/fields/FSIconField.vue";
import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";
import FSDateTimeField from "@dative-gpi/foundation-shared-components/components/fields/FSDateTimeField.vue";

import { CustomPropertyInfos, PropertyDataType } from "../../../foundation-core-domain/models";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";


export default defineComponent({
  name: "FSMetaValue",
  components: {
    FSSwitch,
    FSIconField,
    FSSelectField,
    FSDateTimeField
  },
  props: {
    customProperty: {
      type: CustomPropertyInfos,
      required: true
    },
    meta: {
      type: Object as PropType<{ [key: string]: string }>,
      required: true
    }
  },
  setup(props) {
    const { epochToLongTimeFormat, epochToPicker } = useAppTimeZone();

    const isNullOrSpaces = (value: string | null | undefined): boolean => {
      return (value == null || value.match(/^ *$/) !== null);
    }

    const value = computed((): string => {
      if (props.customProperty.useOnlyAllowedValues) {
        if (!isNullOrSpaces(props.customProperty.allowedValues[props.meta[props.customProperty.code]])) {
          return props.customProperty.allowedValues[props.meta[props.customProperty.code]];
        }
      }
      switch (props.customProperty.dataType) {
        case PropertyDataType.Boolean: {
          if (props.meta[props.customProperty.code]?.toLowerCase() === "true") {
            return "mdi-check-circle-outline";
          }
          return "mdi-close-circle-outline";
        }
        case PropertyDataType.DateTime: {
          return epochToLongTimeFormat(parseInt(props.meta[props.customProperty.code]));
        }
        default: {
          return props.meta[props.customProperty.code];
        }
      }
    });

    return {
      PropertyDataType,
      isNullOrSpaces,
      value
    };
  }
});
</script>