<template> 
  <v-menu
    :closeOnContentClick="false"
    :modelValue="menu && $props.editable"
    @update:modelValue="(value) => menu = value"
  >  
    <template #activator="{ props }">
      <FSCol>
        <FSRow
          height="fill"
          v-bind="props"
        >
          <FSTextField
            class="fs-color-field"
            :hideHeader="$props.hideHeader"
            :required="$props.required"
            :editable="$props.editable"
            :clearable="false"
            :readonly="true"
            :modelValue="innerColor"
            v-bind="$attrs"
          >
            <template #prepend-inner>
              <slot name="prepend-inner">
                <FSIcon
                  :color="innerColor"
                >
                  mdi-circle
                </FSIcon>
              </slot>
            </template>
            <template #append> 
              <FSButton
                prependIcon="mdi-pencil"
                variant="full"
                :editable="$props.editable"
                v-bind="props"
              />
            </template>
          </FSTextField>
          <FSTextField
            v-if="$props.allowOpacity && !$props.onlyBaseColors"
            class="fs-color-field-opacity"
            :label="$tr('ui.color-field.opacity', 'Opacity')"
            :hideHeader="$props.hideHeader"
            :required="$props.required"
            :editable="$props.editable"
            :clearable="false"
            :readonly="true"
            :modelValue="(Math.round(getPercentageFromHex(innerOpacity)*100)) + ' %'"
          >
            <template #prepend-inner>
              <slot name="prepend-inner">
                <FSIcon
                  :color="ColorEnum.Dark"
                  :editable="$props.editable"
                  :style="{ opacity: getPercentageFromHex(innerOpacity) }"
                >
                  mdi-circle
                </FSIcon>
              </slot>
            </template>
            <template #append> 
              <FSButton
                prependIcon="mdi-pencil"
                variant="full"
                :editable="$props.editable"
                v-bind="props"
              />
            </template>
          </FSTextField>
        </FSRow>
        <slot name="description">
          <FSSpan
            v-if="$props.description"
            class="fs-color-field-description"
            font="text-underline"
            :style="style"
          >
            {{ $props.description }}
          </FSSpan>
        </slot>
      </FSCol>
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
import { computed, defineComponent, PropType, ref } from "vue";

import { getPercentageFromHex, getHexFromPercentage } from "@dative-gpi/foundation-shared-components/utils";
import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSTextField from "./FSTextField.vue";
import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSIcon from "../FSIcon.vue";
import FSRow from "../FSRow.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSColorField",
  components: {
    FSTextField,
    FSButton,
    FSCard,
    FSIcon,
    FSCol,
    FSRow
  },
  props: {
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
    const innerColor = ref(props.modelValue.toString().substring(0, 7));
    const innerOpacity = ref(getHexFromPercentage(props.opacityValue));
    const fullColor = ref(innerColor.value + innerOpacity.value);

    const style = computed((): { [key: string] : string | undefined } => {
      if (!props.editable) {
        return {
          "--fs-color-field-color": lights.dark
        };
      }
      return {
        "--fs-color-field-color": darks.base
      };
    });


    const onSubmit = (value: string) => {
      innerColor.value = value.substring(0, 7);
      innerOpacity.value = value.length === 9 ? value.substring(7, 9) : "FF";
      fullColor.value = innerColor.value + innerOpacity.value;
      emit("update:modelValue", innerColor.value);
      emit("update:opacity", getPercentageFromHex(innerOpacity.value));
    };

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