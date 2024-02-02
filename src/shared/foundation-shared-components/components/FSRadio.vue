<template>
  <FSCol width="hug">
    <FSRow width="hug" align="center-left">
      <FSIcon
        class="fs-radio"
        size="l"
        :style="style"
        @click="onToggle"
      >
        {{ icon }}
      </FSIcon>
      <slot>
        <FSSpan
          v-if="$props.label"
          class="fs-radio-label"
          :style="style"
          :font="font"
          @click="onToggle"
        >
          {{ $props.label }}
        </FSSpan>
      </slot>
    </FSRow>
    <slot name="description">
      <FSSpan
        v-if="$props.description"
        class="fs-radio-description"
        font="text-underline"
        :style="style"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSRadio",
  components: {
    FSIcon,
    FSSpan,
    FSRow,
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
    value: {
      type: [String, Boolean, Number],
      required: true
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
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
  emits: ["update:value"],
  setup(props, { emit }) {
    const { value, selected, color, editable } = toRefs(props);

    const colors = computed(() => useColors().getColors(color.value));
    const lights = useColors().getColors(ColorEnum.Light);
    const darks = useColors().getColors(ColorEnum.Dark);

    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (!editable.value) {
        return {
          "--fs-radio-cursor"     : "default",
          "--fs-radio-radio-color": lights.dark,
          "--fs-radio-color"      : lights.dark
        };
      }
      return {
        "--fs-radio-cursor"     : selected.value ? "default" : "pointer",
        "--fs-radio-radio-color": selected.value ? colors.value.base : darks.base,
        "--fs-radio-color"      : darks.base
      };
    });

    const icon = computed((): string => selected.value ? "mdi-radiobox-marked" : "mdi-radiobox-blank");

    const font = computed((): string => selected.value ? "text-button" : "text-body");

    const onToggle = (): void => {
      if (!editable.value) {
        return;
      }
      if (!selected.value) {
        emit("update:value", value.value);
      }
    };

    return {
      style,
      icon,
      font,
      onToggle
    };
  }
});
</script>