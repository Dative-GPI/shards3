<template>
  <FSCol
    width="fill"
    :gap="16"
  >
    <FSRow
      align="center-center"
    >
      <v-text-field
        class="fs-clock-field"
        variant="outlined"
        type="number"
        hide-details
        :style="style"
        :readonly="!$props.editable"
        :modelValue="innerHours.toString().padStart(2, '0')"
        @update:modelValue="onChangeHours"
      />
      :
      <v-text-field
        class="fs-clock-field"
        variant="outlined"
        type="number"
        hide-details
        :style="style"
        :readonly="!$props.editable"
        :modelValue="innerMinutes.toString().padStart(2, '0')"
        @update:modelValue="onChangeMinutes"
      />
    </FSRow>
    <FSCol>
      <FSSpan
        font="text-overline"
      >
        {{ $tr("ui.clock.hours", "Hours") }}
      </FSSpan>
      <FSSlider
        :readonly="!$props.editable"
        :color="$props.color"
        :step="1"
        :max="23"
        :min="0"
        v-model="innerHours"
      />
    </FSCol>
    <FSCol>
      <FSSpan
        font="text-overline"
      >
        {{ $tr("ui.clock.minutes", "Minutes") }}
      </FSSpan>
      <FSSlider
        :readonly="!$props.editable"
        :color="$props.color"
        :step="1"
        :max="59"
        :min="0"
        v-model="innerMinutes"
      />
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs, watch } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSSlider from "./FSSlider.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSClock",
  components: {
    FSSlider,
    FSCol,
    FSRow
  },
  props: {
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
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { modelValue, color, editable } = toRefs(props);

    const colors = computed(() => useColors().getColors(color.value));
    const backgrounds = useColors().getColors(ColorEnum.Background);
    const lights = useColors().getColors(ColorEnum.Light);
    const darks = useColors().getColors(ColorEnum.Dark);

    const innerHours = ref(modelValue.value ? Math.floor(modelValue.value / (60 * 60 * 1000)) : 0);
    const innerMinutes = ref(modelValue.value ? Math.floor((modelValue.value % (60 * 60 * 1000)) / (60 * 1000)) : 0);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!editable.value) {
        return {
          "--fs-clock-field-cursor"             : "default",
          "--fs-clock-field-background-color"   : backgrounds.base,
          "--fs-clock-field-border-color"       : lights.base,
          "--fs-clock-field-color"              : lights.dark,
          "--fs-clock-field-active-border-color": lights.base
        };
      }
      return {
        "--fs-clock-field-cursor"             : "text",
        "--fs-clock-field-background-color"   : colors.value.light,
        "--fs-clock-field-border-color"       : colors.value.base,
        "--fs-clock-field-color"              : darks.base,
        "--fs-clock-field-active-border-color": colors.value.dark
      };
    });

    const onChangeHours = (value: number): void => {
      value = Math.min(23, Math.max(0, value));
      innerHours.value = value;
    };

    const onChangeMinutes = (value: number): void => {
      value = Math.min(59, Math.max(0, value));
      innerMinutes.value = value;
    };

    watch([innerHours, innerMinutes], () => {
      emit("update:modelValue", (innerHours.value * 60 * 60 * 1000) + (innerMinutes.value * 60 * 1000));
    });

    return {
      style,
      innerHours,
      innerMinutes,
      onChangeHours,
      onChangeMinutes
    };
  }
});
</script>