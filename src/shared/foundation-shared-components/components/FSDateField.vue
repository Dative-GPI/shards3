<template>
  <v-menu
    :closeOnContentClick="false"
    :modelValue="menu && $props.editable"
    @update:modelValue="(value) => menu = value"
  >
    <template #activator="{ props }">
      <FSTextField
        class="fs-date-field"
        :label="$props.label"
        :description="$props.description"
        :color="$props.color"
        :hideHeader="$props.hideHeader"
        :required="$props.required"
        :editable="$props.editable"
        :error="messages.length > 0"
        :readonly="true"
        :modelValue="epochToLongDateFormat($props.modelValue)"
        @click:clear="onClear"
        v-bind="props"
      >
        <template v-if="!$props.hideHeader" #label>
          <slot name="label">
            <FSRow :wrap="false">
              <FSSpan
                v-if="$props.label"
                class="fs-date-field-label"
                font="text-overline"
                :style="style"
              >
                {{ $props.label }}
              </FSSpan>
              <FSSpan
                v-if="$props.label && $props.required"
                class="fs-date-field-label"
                style="margin-left: -8px;"
                font="text-overline"
                :ellipsis="false"
                :style="style"
              >
                *
              </FSSpan>
              <v-spacer style="min-width: 40px;" />
              <FSSpan
                v-if="messages.length > 0"
                class="fs-date-field-messages"
                font="text-overline"
                :style="style"
              >
                {{ messages.join(", ") }}
              </FSSpan>
            </FSRow>
          </slot>
        </template>
        <template #prepend-inner>
          <slot name="prepend-inner">
            <FSButton
              variant="icon"
              icon="mdi-calendar"
              :editable="$props.editable"
              :color="ColorEnum.Dark"
            />
          </slot>
        </template>
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </FSTextField>
    </template>
    <FSCard
      width="394"
      :elevation="true"
      :border="false"
    >
      <FSCol width="fill">
        <FSCalendar
          :color="$props.color"
          v-model="innerDate"
        />
        <FSButton
          :fullWidth="true"
          :color="$props.color"
          :label="$tr('ui.date-menu.validate', 'Validate')"
          @click="onSubmit"
        />
      </FSCol>
    </FSCard>
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useTimeZone } from "@dative-gpi/foundation-shared-services/composables";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSTextField from "./FSTextField.vue";
import FSCalendar from "./FSCalendar.vue";
import FSButton from "./FSButton.vue";
import FSCard from "./FSCard.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSDateField",
  components: {
    FSTextField,
    FSCalendar,
    FSButton,
    FSCard,
    FSCol
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
    rules: {
      type: Array as PropType<Function[]>,
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
    const { modelValue, rules, editable } = toRefs(props);

    const { epochToLongDateFormat } = useTimeZone();

    const menu = ref(false);

    const innerDate = ref(modelValue.value);

    const errors = useColors().getColors(ColorEnum.Error);
    const lights = useColors().getColors(ColorEnum.Light);
    const darks = useColors().getColors(ColorEnum.Dark);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!editable.value) {
        return {
          "--fs-date-field-color": lights.dark
        };
      }
      return {
        "--fs-date-field-color"      : darks.base,
        "--fs-date-field-error-color": errors.base
      };
    });

    const messages = computed((): string[] => {
      const messages = [];
      for (const rule of rules.value) {
        const message = rule(modelValue.value ?? null);
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
      onSubmit,
      epochToLongDateFormat
    };
  }
});
</script>