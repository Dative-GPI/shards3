<template>
  <FSSelectField
    v-if="$props.customProperty.useOnlyAllowedValues"
    :label="$props.customProperty.label"
    :items="Object.keys($props.customProperty.allowedValues)"
    :disabled="!editable"
    :modelValue="$props.modelValue"
    @update:modelValue="(event) => $emit('update:modelValue', event)"
  >
    <template
      #selection="{ item }"
    >
      <FSSpan
        v-if="customProperty.allowedValues[item.value] != null"
        class="text-body-1"
      >
        {{ customProperty.allowedValues[item.value] }}
      </FSSpan>
      <FSSpan
        v-else-if="[PropertyDataType.Number, PropertyDataType.String, PropertyDataType.DateTime].includes(customProperty.dataType)"
        class="text-body-1"
      >
        {{ asSelector(item.value) }}
      </FSSpan>
      <FSIcon
        v-else-if="[PropertyDataType.Boolean, PropertyDataType.Icon].includes(customProperty.dataType)"
      >
        {{ asSelector(item.value) }}
      </FSIcon>
    </template>
    <template
      #item="{ props, item }"
    >
      <v-list-item
        v-bind="{ ...props, title: '' }"
      >
        <FSRow
          align="center-left"
        >
          <FSSpan
            v-if="customProperty.allowedValues[item.value] != null"
            class="text-body-1"
          >
            {{ customProperty.allowedValues[item.value] }}
          </FSSpan>
          <FSSpan
            v-else-if="[PropertyDataType.Number, PropertyDataType.String].includes($props.customProperty.dataType)"
            class="text-body-1"
          >
            {{ asSelector(item.value) }}
          </FSSpan>
          <FSSpan
            v-else-if="[PropertyDataType.DateTime].includes($props.customProperty.dataType)"
            class="text-body-1"
          >
            {{ asSelector(item.value) }}
          </FSSpan>
          <FSIcon
            v-else-if="[PropertyDataType.Boolean, PropertyDataType.Icon].includes($props.customProperty.dataType)"
          >
            {{ asSelector(item.value) }}
          </FSIcon>
        </FSRow>
      </v-list-item>
    </template>
  </FSSelectField>
  <template
    v-else
  >
    <FSNumberField
      v-if="$props.customProperty.dataType === PropertyDataType.Number"
      :label="$props.customProperty.label"
      :disabled="!editable"
      :modelValue="asNumber()"
      @update:modelValue="(event) => $emit('update:modelValue', event.toString())"
    />
    <FSSwitch
      v-else-if="$props.customProperty.dataType === PropertyDataType.Boolean"
      :label="$props.customProperty.label"
      :editable="editable"
      :modelValue="asBoolean()"
      @update:modelValue="(event) => $emit('update:modelValue', event.toString())"
    />
    <FSTextField
      v-else-if="$props.customProperty.dataType === PropertyDataType.String"
      :label="$props.customProperty.label"
      :disabled="!editable"
      :modelValue="$props.modelValue"
      @update:modelValue="(event) => $emit('update:modelValue', event)"
    />
    <FSDateTimeField
      v-else-if="$props.customProperty.dataType === PropertyDataType.DateTime"
      :label="$props.customProperty.label"
      :editable="editable"
      :modelValue="asNumber()"
      @update:modelValue="(event) => $emit('update:modelValue', (event + getMachineOffsetMillis - getUserOffsetMillis).toString())"
    />
    <FSIconField
      v-else-if="$props.customProperty.dataType === PropertyDataType.Icon"
      :label="$props.customProperty.label" 
      :editable="editable"
      :modelValue="modelValue"
      @update:modelValue="(event) => $emit('update:modelValue', event.toString()) "
    />
  </template>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

import FSSwitch from "@dative-gpi/foundation-shared-components/components/FSSwitch.vue";
import FSIconField from "@dative-gpi/foundation-shared-components/components/fields/FSIconField.vue";
import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";
import FSNumberField from "@dative-gpi/foundation-shared-components/components/fields/FSNumberField.vue";
import FSDateTimeField from "@dative-gpi/foundation-shared-components/components/fields/FSDateTimeField.vue";

import { CustomPropertyInfos, PropertyDataType } from "../../../foundation-core-domain/models";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";


export default defineComponent({
  name: "FSMetaField",
  components: {
    FSSwitch,
    FSIconField,
    FSSelectField,
    FSNumberField,
    FSDateTimeField
  },
  props: {
    customProperty: {
      type: Object as PropType<CustomPropertyInfos>,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { epochToLongTimeFormat, epochToPicker, getUserOffsetMillis, getMachineOffsetMillis } = useAppTimeZone();

    const asSelector = (item: string): string => {
      switch (props.customProperty.dataType) {
        case PropertyDataType.Boolean: {
          if (item?.toLowerCase() === "true") {
            return "mdi-check-circle-outline";
          }
          return "mdi-close-circle-outline";
        }
        case PropertyDataType.DateTime: {
          return epochToLongTimeFormat(parseInt(item));
        }
        default: {
          return item;
        }
      }
    }

    const asNumber = (): number | undefined => {
      if (!isNaN(parseFloat(props.modelValue))) {
        return parseFloat(props.modelValue);
      }
      return undefined;
    }

    const asBoolean = (): boolean => {
      return props.modelValue === "true";
    }

    const asDateTime = (): Date | undefined => {
      let epoch: number | undefined = undefined;
      if (props.modelValue != null && isFinite(parseInt(props.modelValue))) {
        epoch = parseInt(props.modelValue);
      }
      return epochToPicker(epoch) ?? undefined;
    }

    return {
      PropertyDataType,
      getMachineOffsetMillis,
      getUserOffsetMillis,
      asSelector,
      asDateTime,
      asBoolean,
      asNumber
    };
  }
});
</script>