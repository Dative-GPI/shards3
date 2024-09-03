<template>
  <FSTextArea
    :editable="$props.editable"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
    <template
      #append
    >
      <FSButton
        height="100%"
        style=""
        :prependIcon="$props.buttonPrependIcon"
        :appendIcon="$props.buttonAppendIcon"
        :variant="$props.buttonVariant"
        :color="$props.buttonColor"
        @click="dialog = true"
      /> 
      <slot
        name="append"
      />
    </template>
  </FSTextArea>
  <FSDialogSubmit
    :title="$tr('ui.translate-text-area.title', 'Handle translations')"
    :submitButtonColor="$props.buttonColor"
    @click:submitButton="onSubmit"
    v-model="dialog"
  >
    <template
      #body
    >
      <FSCol
        gap="32px"
      >
        <FSTextArea
          :label="$tr('ui.translate-text-area.default-value', 'Default value')"
          :editable="false"
          :rows="($attrs.rows as number)"
          :modelValue="$props.modelValue"
        />
        <FSCol
          gap="20px"
        >
          <FSTextArea
            v-for="(language, index) in languages"
            :editable="$props.editable"
            :key="index"
            :modelValue="getTranslation(language.code)"
            :rows="($attrs.rows as number)"
            @update:modelValue="setTranslation(language.code, $event)"
          >
            <template
              #label
            >
              <FSRow
                :wrap="false"
                align="center-left"
              >
                <FSSpan
                  font="text-overline"
                  :style="style"
                >
                  {{ $tr("ui.translate-field.translate-in", "Translate in {0}", language.label) }}
                </FSSpan>
                <FSIcon>
                  {{ language.icon }}
                </FSIcon>
              </FSRow> 
            </template>
          </FSTextArea>
        </FSCol>
      </FSCol>
    </template>
  </FSDialogSubmit>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, type StyleValue } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useAppLanguages } from "@dative-gpi/foundation-shared-services/composables";

import { useColors } from "../../composables";

import FSDialogSubmit from "../FSDialogSubmit.vue";
import FSTextArea from "./FSTextArea.vue";
import FSButton from "../FSButton.vue";
import FSIcon from "../FSIcon.vue";
import FSSpan from "../FSSpan.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSTranslateTextArea",
  components: {
    FSDialogSubmit,
    FSTextArea,
    FSButton,
    FSIcon,
    FSSpan,
    FSRow
  },
  props: {
    buttonPrependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: "mdi-translate"
    },
    buttonLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    buttonAppendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    buttonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    property: {
      type: String as PropType<string>,
      required: false,
      default: "label"
    },
    translations: {
      type: Array as PropType<{ languageCode: string; [key: string]: string }[]>,
      required: false,
      default: () => []
    },
    buttonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue", "update:translations"],
  setup(props, { emit }) {
    const { languages } = useAppLanguages();
    const { getColors } = useColors();
    
    const dialog = ref(false);

    const innerTranslations = ref(props.translations);

    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): StyleValue => {
      if (!props.editable) {
        return {
          "--fs-translate-field-color": lights.dark
        };
      }
      return {
        "--fs-translate-field-color": darks.base
      };
    });

    const getTranslation = (languageCode: string): string => {
      if (!innerTranslations.value) {
        return "";
      }
      const translation = innerTranslations.value.find((t) => t.languageCode === languageCode);
      if (!translation || !translation[props.property]) {
        return "";
      }
      return translation[props.property];
    };

    const setTranslation = (languageCode: string, value: string): void => {
      if (!innerTranslations.value) {
        innerTranslations.value = [{
          languageCode,
          [props.property]: value
        }]
        return;
      }
      const translation = innerTranslations.value.find((t) => t.languageCode === languageCode);
      if (translation) {
        translation[props.property] = value;
      }
      else {
        innerTranslations.value.push({
          languageCode,
          [props.property]: value
        });
      }
    };

    const onSubmit = (): void => {
      dialog.value = false;
      if (props.editable) {
        emit("update:translations", innerTranslations.value);
      }
    };

    return {
      innerTranslations,
      ColorEnum,
      languages,
      dialog,
      style,
      getTranslation,
      setTranslation,
      onSubmit
    };
  }
});
</script>