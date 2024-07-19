<template>
  <v-menu
    :closeOnContentClick="false"
    :modelValue="menu && $props.editable"
    @update:modelValue="menu = $event"
  >
    <template
      #activator="{ props }"
    >
      <FSBaseField
        class="fs-color-field"
        :hideHeader="$props.hideHeader"
        :required="$props.required"
        :editable="$props.editable"
        :modelValue="innerColor"
        :description="$props.description"
        :label="$props.label"
        :style="style"
        :width="$props.width"
        v-bind="$attrs"
      >
        <FSCard
          width="100%"
          padding="8px"
          v-bind="props"
          :class="{ 'fs-color-field-disabled': !$props.editable }"
        >
          <FSRow
            align="center-center"
          >
            <FSIcon
              :color="innerColor"
              size="20px"
              icon="mdi-circle-half"
            />
            <FSText
              font="text-overline"
            >
              {{ innerColor }}
            </FSText>
          </FSRow>
        </FSCard>
      </FSBaseField>
    </template>
    <FSCard
      :elevation="true"
      :border="false"
    >
      <FSCol
        width="fill"
      >
        <v-color-picker
          v-if="!$props.onlyBaseColors"
          class="fs-color-field-picker"
          mode="hexa"
          :elevation="0"
          :modes="allowOpacity ? ['hexa', 'rgba'] : ['hex', 'rgb']"
          :modelValue="fullColor"
          @update:modelValue="onSubmit"
        />
        <v-color-picker
          v-else
          class="fs-color-field-picker"
          :elevation="0"
          :modelValue="fullColor"
          @update:modelValue="onSubmit"
          swatches-max-height="400px"
          show-swatches
          hide-inputs
          hide-canvas
          hide-sliders
          :swatches="getBasePaletteColors()"
        />
      </FSCol>
    </FSCard>
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, watch } from "vue";

import { getPercentageFromHex, getHexFromPercentage } from "@dative-gpi/foundation-shared-components/utils";
import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSBaseField from "./FSBaseField.vue";
import FSCard from "../FSCard.vue";
import FSIcon from "../FSIcon.vue";
import FSText from "../FSText.vue";
import FSRow from "../FSRow.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSColorField",
  components: {
    FSBaseField,
    FSText,
    FSCard,
    FSIcon,
    FSCol,
    FSRow
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    description: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: String,
      required: false,
      default: "#000000"
    },
    opacityValue: {
      type: Number,
      required: false,
      default: 1
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    allowOpacity: {
      type: Boolean,
      required: false,
      default: true
    },
    onlyBaseColors: {
      type: Boolean,
      required: false,
      default: false
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "fill"
    }
  },
  emits: ["update:modelValue", "update:opacity"],
  setup(props, { emit }) {
    const { getColors, getBasePaletteColors } = useColors();
    const { slots } = useSlots();

    delete slots.description;

    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const menu = ref(false);

    const innerColor = ref(getColors(props.modelValue).base);
    const innerOpacity = ref(getHexFromPercentage(props.opacityValue));
    const fullColor = ref(innerColor.value + innerOpacity.value);

    const style = computed((): { [key: string]: string | undefined } => {
      if (!props.editable) {
        return {
          "--fs-color-field-cursor"             : "default",
          "--fs-color-field-border-color"       : lights.base,
          "--fs-color-field-color"              : lights.dark,
          "--fs-color-field-colorvalue"         : fullColor.value,
        };
      }
      return {
        "--fs-color-field-cursor"             : "pointer",
        "--fs-color-field-border-color"       : lights.dark,
        "--fs-color-field-color"              : darks.base,
        "--fs-color-field-colorvalue"         : fullColor.value,
      };
    });


    const onSubmit = (value: string) => {
      innerColor.value = value.substring(0, 7);
      innerOpacity.value = value.length === 9 ? value.substring(7, 9) : "FF";
      fullColor.value = innerColor.value + innerOpacity.value;
      emit("update:modelValue", innerColor.value);
      emit("update:opacity", getPercentageFromHex(innerOpacity.value));
    };

    const reset = (): void => {
      innerColor.value = getColors(props.modelValue)['base'];
      innerOpacity.value = getHexFromPercentage(props.opacityValue);
      fullColor.value = innerColor.value + innerOpacity.value;
    };

    watch(() => props.modelValue, () => {
      reset();
    });

    return {
      getPercentageFromHex,
      getBasePaletteColors,
      innerOpacity,
      innerColor,
      fullColor,
      ColorEnum,
      onSubmit,
      style,
      menu
    };
  }
});
</script>