<template>
  <FSCol>
    <template
      v-if="isExtraSmall"
    >
      <FSTextField
        class="fs-date-field"
        :label="$props.label"
        :description="$props.description"
        :color="$props.color"
        :hideHeader="$props.hideHeader"
        :required="$props.required"
        :editable="$props.editable"
        :readonly="true"
        :rules="$props.rules"
        :messages="messages"
        :validateOn="validateOn"
        :validationValue="$props.modelValue"
        :modelValue="epochToLongDateFormat($props.modelValue)"
        @update:modelValue="onClear"
        @click="openMobileOverlay"
        @blur="blurred = true"
      >
        <template
          #prepend-inner
        >
          <slot
            name="prepend-inner"
          >
            <FSButton
              variant="icon"
              icon="mdi-calendar"
              :editable="$props.editable"
              :color="ColorEnum.Dark"
              @click="openMobileOverlay"
            />
          </slot>
        </template>
        <template
          v-for="(_, name) in $slots"
          v-slot:[name]="slotData"
        >
          <slot
            :name="name"
            v-bind="slotData"
          />
        </template>
      </FSTextField>
      <FSDialogMenu
        v-model="dialog"
      >
        <template
          #body
        >
          <FSCol
            width="hug"
          >
            <FSCalendar
              :color="$props.color"
              v-model="innerDate"
            />
            <FSButton
              width="100%"
              :color="$props.color"
              :label="$tr('ui.common.validate', 'Validate')"
              @click="onSubmit"
            />
          </FSCol>
        </template>
      </FSDialogMenu>
    </template>
    <template
      v-else
    >
      <v-menu
        :closeOnContentClick="false"
        :modelValue="menu && $props.editable"
        @update:modelValue="menu = $event"
      >
        <template
          #activator="{ props }"
        >
          <FSTextField
            class="fs-date-field"
            :label="$props.label"
            :description="$props.description"
            :color="$props.color"
            :hideHeader="$props.hideHeader"
            :required="$props.required"
            :editable="$props.editable"
            :readonly="true"
            :rules="$props.rules"
            :messages="messages"
            :validateOn="validateOn"
            :validationValue="$props.modelValue"
            :modelValue="epochToLongDateFormat($props.modelValue)"
            @update:modelValue="onClear"
            @blur="blurred = true"
            v-bind="props"
          >
            <template
              #prepend-inner
            >
              <slot
                name="prepend-inner"
              >
                <FSButton
                  variant="icon"
                  icon="mdi-calendar"
                  :editable="$props.editable"
                  :color="ColorEnum.Dark"
                />
              </slot>
            </template>
            <template
              v-for="(_, name) in $slots"
              v-slot:[name]="slotData"
            >
              <slot
                :name="name"
                v-bind="slotData"
              />
            </template>
          </FSTextField>
        </template>
        <FSCard
          padding="8px"
          :elevation="true"
          :border="false"
        >
          <FSCol
            width="hug"
          >
            <FSCalendar
              :color="$props.color"
              v-model="innerDate"
            />
            <FSButton
              width="100%"
              :color="$props.color"
              :label="$tr('ui.common.validate', 'Validate')"
              @click="onSubmit"
            />
          </FSCol>
        </FSCard>
      </v-menu>
    </template>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { useBreakpoints, useColors, useRules } from "@dative-gpi/foundation-shared-components/composables";
import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import FSDialogMenu from "../FSDialogMenu.vue";
import FSTextField from "./FSTextField.vue";
import FSCalendar from "../FSCalendar.vue";
import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSDateField",
  components: {
    FSDialogMenu,
    FSTextField,
    FSCalendar,
    FSButton,
    FSCard,
    FSCol
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
      type: Number as PropType<number | null>,
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
    rules: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => []
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { validateOn, blurred, getMessages} = useRules();
    const { epochToLongDateFormat } = useAppTimeZone();
    const { isExtraSmall } = useBreakpoints();
    const { getColors } = useColors();

    const dialog = ref(false);
    const menu = ref(false);
    const innerDate = ref<number | null>(props.modelValue);

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [key: string] : string | undefined } => {
      if (!props.editable) {
        return {
          "--fs-date-field-color": lights.dark
        };
      }
      return {
        "--fs-date-field-color"      : darks.base,
        "--fs-date-field-error-color": errors.base
      };
    });

    const messages = computed((): string[] => getMessages(props.modelValue, props.rules));

    const openMobileOverlay = () => {
      if (!props.editable) {
        return;
      }
      dialog.value = true;
    };

    const onClear = (): void => {
      emit("update:modelValue", null);
      innerDate.value = null;
    };

    const onSubmit = (): void => {
      emit("update:modelValue", innerDate.value);
      dialog.value = false;
      menu.value = false;
    };

    return {
      isExtraSmall,
      validateOn,
      ColorEnum,
      innerDate,
      messages,
      blurred,
      dialog,
      style,
      menu,
      epochToLongDateFormat,
      openMobileOverlay,
      onSubmit,
      onClear
    };
  }
});
</script>