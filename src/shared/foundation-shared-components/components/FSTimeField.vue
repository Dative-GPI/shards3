<template>    
        <FSRow
          height="fill"
          gap="24px"
        >
        <FSNumberField
          class="fs-time-field"
          label="Valeur"
          :description="$props.description"
          :hideHeader="$props.hideHeader"
          :required="$props.required"
          :editable="$props.editable"
          :modelValue=$props.modelValue
        />     
        <FSSelectField
          label="Unité de temps écoulée"
          :items="$props.items"
          :multiple="false"
          :required="true"
          v-model="$props.items[0]"
        />
      </FSRow>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent, PropType, ref } from "vue";
  
  import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
  import { useColors } from "@dative-gpi/foundation-shared-components/composables";
  
  import FSNumberField from "./FSNumberField.vue";
  import FSSelectField from "./FSSelectField.vue";
  import FSRow from "./FSRow.vue";

  const timeScale = [
    { label: "Second", id: 1 },
    { label: "Minute", id: 60 },
    { label: "Hour", id: 3600 }
  ];
  
  export default defineComponent({
    name: "FSTimeField",
    components: {
      FSNumberField,
      FSSelectField,
      FSRow
    },
    props: {
      label: {
        type: String,
        required: false,
        default: null
      },
      description: {
        type: String,
        required: false,
        default: null
      },
      modelValue: {
        type: Number,
        required: false,
        default: null
      },
      color: {
        type: String as PropType<ColorBase>,
        required: false,
        default: ColorEnum.Primary
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
      items: {
        type: Array as PropType<any[]>,
        required: true,
        default: () => timeScale
      },
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
  
      const errors = useColors().getColors(ColorEnum.Error);
      const lights = useColors().getColors(ColorEnum.Light);
      const darks = useColors().getColors(ColorEnum.Dark);
  
      const menu = ref(false);
      const innerDate = ref(props.modelValue);
  
      const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
        if (!props.editable) {
          return {
            "--fs-time-field-color": lights.dark
          };
        }
        return {
          "--fs-time-field-color"      : darks.base,
          "--fs-time-field-error-color": errors.base
        };
      });
  
      const messages = computed((): string[] => {
        const messages = [];
        for (const rule of props.rules) {
          const message = rule(props.modelValue ?? null);
          if (typeof(message) === "string") {
            messages.push(message);
          }
        }
        return messages;
      });
  
      const onClear = (): void => {
        emit("update:modelValue", null);
        innerDate.value = null;
      };
  
      const onSubmit = (): void => {
        console.log(innerDate.value);
        emit("update:modelValue", innerDate.value);
        menu.value = false;
      };
  
      return {
        ColorEnum,
        innerDate,
        messages,
        style,
        menu,
        onClear,
        onSubmit
      };
    }
  });
  </script>