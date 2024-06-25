<template>
  <div
    v-if="!value"
  />
  <FSText
    v-else-if="$props.customProperty.useOnlyAllowedValues && $props.customProperty.allowedValues[meta[$props.customProperty.code]] != null"
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
    v-else-if="[PropertyDataType.Icon].includes($props.customProperty.dataType)"
    :color="getColor($props.customProperty, meta[$props.customProperty.code])"
  >
    {{ value }}
  </FSIcon>
  <FSIconCheck
    v-else-if="[PropertyDataType.Boolean].includes($props.customProperty.dataType)"
    :color="getColor($props.customProperty, meta[$props.customProperty.code])"
    :value="value.toLowerCase() === 'true'"
  />
</template>

<script lang="ts">
import type { PropType} from "vue";
import { computed, defineComponent } from "vue";

import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import type { CustomPropertyInfos} from "../../../foundation-core-domain/models";
import { PropertyDataType } from "../../../foundation-core-domain/models";
import { getColor } from "./helpers";

import FSIconCheck from "@dative-gpi/foundation-shared-components/components/FSIconCheck.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

export default defineComponent({
  name: "FSMetaValue",
  components: {
    FSIconCheck,
    FSText,
    FSIcon
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