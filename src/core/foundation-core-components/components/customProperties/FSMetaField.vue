<template>
  <FSSelectField
    v-if="$props.customProperty.useOnlyAllowedValues"
    :editable="$props.editable"
    :itemTitle="itemTitle"
    :label="$props.label"
    :class="classes"
    :items="items"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
  >
    <template
      v-if="$props.customProperty.dataType === PropertyDataType.Icon"
      #item-prepend="{ item }"
    >
      <FSIcon
        v-if="item.icon"
      >
        {{ item.icon }}
      </FSIcon>
      <FSSpan
        v-else
      >
        {{ item.label }}
      </FSSpan>
    </template>
  </FSSelectField>
  <template
    v-else
  >
    <FSNumberField
      v-if="$props.customProperty.dataType === PropertyDataType.Number"
      :editable="$props.editable"
      :label="$props.label"
      :modelValue="asNumber()"
      @update:modelValue="onUpdate"
    />
    <FSSwitch
      v-else-if="$props.customProperty.dataType === PropertyDataType.Boolean"
      :editable="$props.editable"
      :label="$props.label"
      :modelValue="asBoolean()"
      @update:modelValue="onUpdate"
    />
    <FSTextField
      v-else-if="$props.customProperty.dataType === PropertyDataType.String"
      :editable="$props.editable"
      :label="$props.label"
      :modelValue="$props.modelValue"
      @update:modelValue="onUpdate"
    />
    <FSDateTimeField
      v-else-if="$props.customProperty.dataType === PropertyDataType.DateTime"
      :editable="$props.editable"
      :label="$props.label"
      :modelValue="asNumber()"
      @update:modelValue="onUpdate"
    />
    <FSIconField
      v-else-if="$props.customProperty.dataType === PropertyDataType.Icon"
      :editable="$props.editable"
      :label="$props.label" 
      :modelValue="modelValue"
      @update:modelValue="onUpdate"
    />
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";

import { type CustomPropertyInfos } from "../../../foundation-core-domain/models";
import { PropertyDataType } from "@dative-gpi/foundation-shared-domain/enums";

import FSDateTimeField from "@dative-gpi/foundation-shared-components/components/fields/FSDateTimeField.vue";
import FSNumberField from "@dative-gpi/foundation-shared-components/components/fields/FSNumberField.vue";
import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";
import FSIconField from "@dative-gpi/foundation-shared-components/components/fields/FSIconField.vue";
import FSSwitch from "@dative-gpi/foundation-shared-components/components/FSSwitch.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";

export default defineComponent({
  name: "FSMetaField",
  components: {
    FSDateTimeField,
    FSNumberField,
    FSSelectField,
    FSIconField,
    FSSwitch,
    FSIcon,
    FSSpan
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    customProperty: {
      type: Object as PropType<CustomPropertyInfos>,
      required: true
    },
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { epochToLongTimeFormat } = useDateFormat();

    const items = computed((): { id: string, label: string, icon: string | null }[] => {
      return Object.keys(props.customProperty.allowedValues).map((key: string) => {
        // If the allowed value is translated
        if (props.customProperty.allowedValues[key]) {
          return {
            id: key,
            label: props.customProperty.allowedValues[key],
            icon: null
          }
        }
        // If we have the value without translation
        else {
          switch (props.customProperty.dataType) {
            case PropertyDataType.Boolean: return {
              id: key,
              label: key,
              icon: key === "true" ? "mdi-check-circle-outline" : "mdi-close-circle-outline"
            }
            case PropertyDataType.DateTime: return {
              id: key,
              label: epochToLongTimeFormat(parseInt(key)),
              icon: null
            }
            case PropertyDataType.Icon: return {
              id: key,
              label: key,
              icon: key
            }
            default: return {
              id: key,
              label: key,
              icon: null
            }
          }
        }
      });
    });

    const itemTitle = computed((): string => {
      switch (props.customProperty.dataType) {
        case PropertyDataType.Icon: return "";
        default                   : return "label";
      };
    });

    const classes = computed((): string[] => {
      const classNames = ["fs-meta-field"];
      switch(props.customProperty.dataType) {
        case PropertyDataType.Icon: 
          classNames.push("fs-meta-icon-field"); 
          break;
      }
      return classNames;
    });

    const asNumber = (): number | null => {
      if (!props.modelValue) {
        return null;
      }
      if (!isNaN(parseFloat(props.modelValue))) {
        return parseFloat(props.modelValue);
      }
      return null;
    };

    const asBoolean = (): boolean | null => {
      if (!props.modelValue) {
        return null;
      }
      return props.modelValue === "true";
    };

    const onUpdate = (value: any) => {
      switch (props.customProperty.dataType) {
        case PropertyDataType.Boolean:
        case PropertyDataType.DateTime:
        case PropertyDataType.Number:
          if (value) {
            emit("update:modelValue", value.toString());
            break;
          }
          emit("update:modelValue", null);
          break;
        default:
          emit("update:modelValue", value);
          break;
      }
    };

    return {
      PropertyDataType,
      itemTitle,
      classes,
      items,
      asBoolean,
      asNumber,
      onUpdate
    };
  }
});
</script>