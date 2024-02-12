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
        :modelValue="epochToLongTimeFormat($props.modelValue)"
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
    <FSWindow
      :modelValue="tabs"
    >
      <FSCard
        width="394"
        :elevation="true"
        :border="false"
        :value="0"
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
            @click="tabs++"
          />
        </FSCol>
      </FSCard>
      <FSCard
        width="394"
        :elevation="true"
        :border="false"
        :value="1"
      >
        <FSCol width="fill">
          <FSClock
            :color="$props.color"
            v-model="innerTime"
          />
          <FSButton
            :fullWidth="true"
            :color="$props.color"
            :label="$tr('ui.date-menu.validate', 'Validate')"
            @click="onSubmit"
          />
        </FSCol>
      </FSCard>
    </FSWindow>
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs, watch } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useTimeZone } from "@dative-gpi/foundation-shared-services/composables";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSTextField from "./FSTextField.vue";
import FSCalendar from "./FSCalendar.vue";
import FSWindow from "./FSWindow.vue";
import FSButton from "./FSButton.vue";
import FSClock from "./FSClock.vue";
import FSCard from "./FSCard.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSDateTimeField",
  components: {
    FSTextField,
    FSCalendar,
    FSWindow,
    FSButton,
    FSClock,
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

    const { getUserOffsetMillis, epochToLongTimeFormat } = useTimeZone();

    const menu = ref(false);
    const tabs = ref(0);

    // FSClock just gives two numbers without consideration for the time zone
    // We must adjust the time to the user's time zone
    const innerTime = ref(0);
    const innerDate = ref(null);
    if (modelValue.value) {
      innerTime.value = Math.floor((modelValue.value + getUserOffsetMillis()) % (24 * 60 * 60 * 1000));
      innerDate.value = modelValue.value - innerTime.value;
    }

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
      innerTime.value = 0;
    };

    const onSubmit = (): void => {
      emit("update:modelValue", innerDate.value + innerTime.value);
      menu.value = false;
    };

    watch(menu, (): void => {
      if (!menu.value) {
        setTimeout(() => tabs.value = 0, 100);
      }
    });

    return {
      ColorEnum,
      innerDate,
      innerTime,
      messages,
      style,
      menu,
      tabs,
      onClear,
      onSubmit,
      epochToLongTimeFormat
    };
  }
});
</script>