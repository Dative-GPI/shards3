<template>
  <FSText
    v-if="$props.customProperty.useOnlyAllowedValues && $props.customProperty.allowedValues[meta[$props.customProperty.code]] != null"
    :color="getColor($props.customProperty, meta[$props.customProperty.code])">
    {{ value }}
  </FSText>
  <FSText
    v-else-if="[PropertyDataType.Number, PropertyDataType.String, PropertyDataType.DateTime].includes($props.customProperty.dataType)"
    :color="getColor($props.customProperty, meta[$props.customProperty.code])">
    {{ value }}
  </FSText>
  <FSIcon v-else-if="[PropertyDataType.Boolean, PropertyDataType.Icon].includes($props.customProperty.dataType)"
    :color="getColor($props.customProperty, meta[$props.customProperty.code])">
    {{ value }}
  </FSIcon>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from "vue";

import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSSwitch from "@dative-gpi/foundation-shared-components/components/FSSwitch.vue";
import FSIconField from "@dative-gpi/foundation-shared-components/components/fields/FSIconField.vue";
import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";
import FSDateTimeField from "@dative-gpi/foundation-shared-components/components/fields/FSDateTimeField.vue";

import { getColor } from "./helpers";
import { CustomPropertyInfos, PropertyDataType } from "../../../foundation-core-domain/models";


export default defineComponent({
  name: "FSMetaValue",
  components: {
    FSDateTimeField,
    FSSelectField,
    FSIconField,
    FSSwitch,
    FSText
  },
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
      getColor,
      value
    };
  }
});
</script>