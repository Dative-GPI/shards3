<template>
  <FSText
    v-if="$props.customProperty.useOnlyAllowedValues && $props.customProperty.allowedValues[meta[$props.customProperty.code]] != null"
    :color="getColor($props.customProperty, meta[$props.customProperty.code])"
  >
    {{ value }}
  </FSText>
  <FSText
    v-else-if="[PropertyDataType.Number, PropertyDataType.String, PropertyDataType.DateTime].includes($props.customProperty.dataType)"
    :color="getColor($props.customProperty, meta[$props.customProperty.code])"
  >
    {{ value }}
  </FSText>
  <FSIcon
    v-else-if="[PropertyDataType.Boolean, PropertyDataType.Icon].includes($props.customProperty.dataType)"
    :color="getColor($props.customProperty, meta[$props.customProperty.code])"
  >
    {{ value }}
  </FSIcon>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from "vue";

import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import { CustomPropertyInfos, PropertyDataType } from "../../../foundation-core-domain/models";
import { getColor } from "./helpers";


export default defineComponent({
  name: "FSMetaValue",
  props: {
    customProperty: {
      type: Object as PropType<CustomPropertyInfos>,
      required: true
    },
    meta: {
      type: Object as PropType<{ [key: string]: string }>,
      required: true
    }
  },
  setup(props) {
    const { epochToLongTimeFormat } = useAppTimeZone();

    const value = computed((): string => {
      if (props.customProperty.useOnlyAllowedValues) {
        if (props.customProperty.allowedValues[props.meta[props.customProperty.code]] != null) {
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
      value,
      getColor
    };
  }
});
</script>