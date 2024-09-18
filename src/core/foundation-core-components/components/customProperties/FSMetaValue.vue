<template>
  <template
    v-if="$props.variant === 'standard'"
  >
    <FSText
      v-if="$props.customProperty.useOnlyAllowedValues"
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
      v-else-if="[PropertyDataType.Boolean].includes($props.customProperty.dataType) && value"
      :color="getColor($props.customProperty, meta[$props.customProperty.code])"
      :value="value.toLowerCase() === 'true'"
    />
  </template>
  <template
    v-else-if="$props.variant === 'colorless'"
  >
    <FSSpan
      v-if="$props.customProperty.useOnlyAllowedValues"
    >
      {{ value }}
    </FSSpan>
    <FSSpan
      v-else-if="[PropertyDataType.Number, PropertyDataType.String, PropertyDataType.DateTime].includes($props.customProperty.dataType)"
    >
      {{ value }}
    </FSSpan>
    <FSIcon
      v-else-if="[PropertyDataType.Icon].includes($props.customProperty.dataType)"
    >
      {{ value }}
    </FSIcon>
    <FSIconCheck
      v-else-if="[PropertyDataType.Boolean].includes($props.customProperty.dataType) && value"
      :value="value.toLowerCase() === 'true'"
    />
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";
import { PropertyDataType } from "@dative-gpi/foundation-shared-domain/enums";

import { type CustomPropertyInfos } from "../../../foundation-core-domain/models";
import { getColor } from "./helpers";

import FSIconCheck from "@dative-gpi/foundation-shared-components/components/FSIconCheck.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

export default defineComponent({
  name: "FSMetaValue",
  components: {
    FSIconCheck,
    FSIcon,
    FSSpan,
    FSText
  },
  props: {
    variant: {
      type: String as PropType<"standard" | "colorless">,
      required: false,
      default: "standard"
    },
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
    const { epochToLongTimeFormat } = useDateFormat();

    const value = computed((): string => {
      if (props.customProperty.useOnlyAllowedValues) {
        return props.customProperty.allowedValues[props.meta[props.customProperty.code]] ?? "";
      }
      switch (props.customProperty.dataType) {
        case PropertyDataType.DateTime: {
          return epochToLongTimeFormat(parseInt(props.meta[props.customProperty.code]));
        }
        case PropertyDataType.Boolean: {
          return props.meta[props.customProperty.code];
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