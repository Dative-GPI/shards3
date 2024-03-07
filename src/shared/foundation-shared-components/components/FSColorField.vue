<template> 
  <v-menu
    :closeOnContentClick="false"
    :modelValue="menu && $props.editable"
    @update:modelValue="(value) => menu = value"
  >  
    <template #activator="{ props }">
      <FSRow
        height="fill"
        v-bind="props"
      >
        <FSTextField
          class="fs-color-field"
          :label="$tr('ui.color-field.color', 'Color')"
          :description="$props.description"
          :editable="$props.editable"
          :required="$props.required"
          :clearable="false"
          :readonly="true"
          :modelValue="innerColor"
          v-bind="$props"
        >
          <template #prepend-inner>
            <slot name="prepend-inner">
              <FSIcon
                size="xl"
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
            />
          </template>
        </FSTextField>
        <FSTextField
          class="fs-color-field-opacity"
          :label="$tr('ui.color-field.opacity', 'Opacity')"
          :editable="$props.editable"
          :required="$props.required"
          :clearable="false"
          :readonly="true"
          :modelValue="(Math.round(getPercentageFromHex(innerOpacity)*100)) + ' %'"
        >
          <template #prepend-inner>
            <slot name="prepend-inner">
              <FSIcon
                icon="mdi-circle"
                size="xl"
                :color="ColorEnum.Dark"
                :editable="$props.editable"
                :style="{ opacity: getPercentageFromHex(innerOpacity) }"
              />
            </slot>
          </template>
          <template #append> 
            <FSButton
              prependIcon="mdi-pencil"
              variant="full"
              :editable="$props.editable"
            />
          </template>
        </FSTextField>
      </FSRow>
    </template> 
    <FSCard
      :elevation="true"
      :border="false"
    >
      <FSCol
        width="fill"
      >
        <v-color-picker
          class="fs-color-field-picker"
          mode="hexa"
          :elevation="0"
          :modes="['hexa', 'rgba']"
          :modelValue="fullColor"
          @update:modelValue="onSubmit"
        />
      </FSCol>
    </FSCard>
  </v-menu>
</template>
  
  <script lang="ts">
  import { computed, defineComponent, ref } from "vue";
  import { useColors } from "@dative-gpi/foundation-shared-components/composables";
  import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
  import { getPercentageFromHex, getHexFromPercentage } from "@dative-gpi/foundation-shared-components/utils";

  import FSTextField from "./fields/FSTextField.vue";
  import FSRow from "./FSRow.vue";
  import FSCol from "./FSCol.vue";
  import FSSpan from "./FSSpan.vue";
  import FSButton from "./FSButton.vue";
  import FSCard from "./FSCard.vue";
  import FSIcon from "./FSIcon.vue";

  export default defineComponent({
    name: "FSColorField",
    components: {
      FSTextField,
      FSRow,
      FSCol,
      FSSpan,
      FSButton,
      FSCard,
      FSIcon
    },
    props: {
      description: {
        type: String,
        required: false,
        default: null
      },
      modelValue: {
        type: Number,
        required: false,
        default: "#000000"
      },
      opacityValue: {
        type: Number,
        required: false,
        default: 1
      },
      editable: {
        type: Boolean,
        required: false,
        default: true
      },
      required: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    emits: ["update:modelValue", "update:opacity"],
    setup(props, { emit }) {
      const innerColor = ref(props.modelValue.toString().substring(0, 7));
      const innerOpacity = ref(getHexFromPercentage(props.opacityValue));
      const fullColor = ref(innerColor.value + innerOpacity.value);

      const menu = ref(false);

      const errors = useColors().getColors(ColorEnum.Error);
      const lights = useColors().getColors(ColorEnum.Light);
      const darks = useColors().getColors(ColorEnum.Dark);

      const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
        if (!props.editable) {
          return {
            "--fs-color-field-cursor"             : "default",
            "--fs-color-field-border-color"       : lights.base,
            "--fs-color-field-color"              : lights.dark,
            "--fs-color-field-active-border-color": lights.base
          };
        }
        return {
          "--fs-color-field-cursor"             : "text",
          "--fs-color-field-border-color"       : lights.dark,
          "--fs-color-field-color"              : darks.base,
          "--fs-color-field-active-border-color": darks.dark,
          "--fs-color-field-error-color"        : errors.base,
          "--fs-color-field-error-border-color" : errors.base
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
        ColorEnum,
        getPercentageFromHex,
        onSubmit,
        innerColor,
        innerOpacity,
        fullColor,
        style,
        menu
      };
    }
  });
  </script>