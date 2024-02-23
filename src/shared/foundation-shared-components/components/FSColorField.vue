<template> 
  <v-menu
    :closeOnContentClick="false"
    :modelValue="menu && $props.editable"
    @update:modelValue="(value) => menu = value"
  >  
    <template #activator="{ props }">
      <FSRow height="fill" v-bind="props">
          <FSTextField
            class="fs-color-field-value"
            :label="$props.label"
            :hideHeader="$props.hideHeader"
            :readonly="true"
            :description="$props.description"
            :clearable="false"
            :modelValue="innerColor"
            :editable="$props.editable"
          >
            <template v-if="!$props.hideHeader" #label>
              <slot name="label">
                <FSRow :wrap="false">
                  <FSSpan
                    v-if="$props.label"
                    class="fs-color-field-label"
                    font="text-overline"
                    :style="style"
                  >
                    {{ $props.label }}
                  </FSSpan>
                  <FSSpan
                    v-if="$props.label && $props.required"
                    class="fs-color-field-label"
                    style="margin-left: -8px;"
                    font="text-overline"
                    :ellipsis="false"
                    :style="style"
                  >
                    *
                  </FSSpan>
                  <v-spacer style="min-width: 40px;" />
                </FSRow>
              </slot>
            </template>
            <template #prepend-inner>
              <slot name="prepend-inner">
                <FSIcon
                  size="xl"
                  icon="mdi-circle"
                  :color="innerColor"
                />
              </slot>
            </template>
            <template #append> 
              <FSButton
                color="light"
                variant="full"
                :editable="$props.editable"
                >
                <template #prepend>
                  <FSIcon> mdi-pencil </FSIcon>
                </template>
              </FSButton>
            </template>
          </FSTextField>
          <FSTextField
            :editable="$props.editable"
            class="fs-color-field-opacity"
            :clearable="false"
            :required="$props.required"
            :hideHeader="$props.hideHeader"
            :readonly="true"
            :label= "$tr('ui.color-field.opacity', 'Opacity')"
            :modelValue="(Math.round(getPercentageFromHex(innerOpacity)*100)) + ' %'"
            >
            
            <template #prepend-inner>
              <slot name="prepend-inner">
                <FSIcon
                  size="xl"
                  variant="icon"
                  icon="mdi-circle"
                  :editable="$props.editable"
                  color="black"
                  :style="{ opacity: getPercentageFromHex(innerOpacity) }"
                />
              </slot>
            </template>
            <template #append> 
              <FSButton
                color="light"
                variant="full"
                :editable="$props.editable">
                <template #prepend>
                  <FSIcon> mdi-pencil </FSIcon>
                </template>
              </FSButton>
            </template>
          </FSTextField>
      </FSRow>
    </template> 
    <FSCard
      width="394"
      :elevation="true"
      :border="false"
    >
      <FSCol width="fill">
        <v-color-picker
          :modelValue="fullColor"
          :modes="['hexa', 'rgba']"
          mode="hexa"
          :disabled="!$props.editable"
          @update:modelValue="onSubmit"
        ></v-color-picker>
      </FSCol>
    </FSCard>
  </v-menu>
</template>
  
  <script lang="ts">
  import { computed, defineComponent, ref,  PropType } from "vue";
  import { useColors } from "@dative-gpi/foundation-shared-components/composables";
  import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
  import { getPercentageFromHex, getHexFromPercentage } from "@dative-gpi/foundation-shared-components/utils";
  import { useTranslationsProvider } from "@dative-gpi/foundation-shared-services/composables";

  import FSTextField from "./FSTextField.vue";
  import FSRow from "./FSRow.vue";
  import FSCol from "./FSCol.vue";
  import FSSpan from "./FSSpan.vue";
  import FSButton from "./FSButton.vue";
  import FSCard from "./FSCard.vue";
  import FSIcon from "./FSIcon.vue";

  const { $tr } = useTranslationsProvider();

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
      label: {
        type: String,
        required: false,
        default: $tr('ui.color-field.color', 'Color')
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
      description: {
        type: String,
        required: false,
        default: ""
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
      /**
       * @description: Returns the style for the color field
       */
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