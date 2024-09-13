<template>
  <FSRow
    align="center-center"
    class="fs-tag"
    :height="$props.height"
    :width="$props.width"
    :style="style"
    :wrap="false"
    v-bind="$attrs"
  >
    <slot
      v-bind="{ color: $props.color, colors }"
    >
      <FSSpan
        v-if="$props.label"
        class="fs-tag-label"
      >
        {{ $props.label }}
      </FSSpan>
    </slot>
    <slot
      name="button"
      v-bind="{ color: $props.color, colors }"
    >
      <v-btn
        v-if="$props.editable"
        class="fs-tag-button"
        :ripple="false"
        @click="$emit('remove')"
      >
        <FSIcon
          size="s"
        >
          mdi-close
        </FSIcon>
      </v-btn>
    </slot>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSTag",
  components: {
    FSIcon,
    FSSpan,
    FSRow
  },
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "hug"
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "hug"
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    variant: {
      type: String as PropType<"standard" | "full">,
      required: false,
      default: "full"
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
  emits: ["remove"],
  setup(props) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));

    const style = computed((): StyleValue => {
      switch (props.variant) {
        case "standard": return {
          "--fs-tag-background-color"       : colors.value.light,
          "--fs-tag-color"                  : colors.value.lightContrast!,
          "--fs-tag-hover-background-color" : colors.value.base,
          "--fs-tag-hover-color"            : colors.value.baseContrast!,
          "--fs-tag-active-background-color": colors.value.dark,
          "--fs-tag-active-color"           : colors.value.darkContrast!
        };
        case "full": return {
          "--fs-tag-background-color"       : colors.value.base,
          "--fs-tag-color"                  : colors.value.baseContrast!,
          "--fs-tag-hover-background-color" : colors.value.base,
          "--fs-tag-hover-color"            : colors.value.baseContrast!,
          "--fs-tag-active-background-color": colors.value.dark,
          "--fs-tag-active-color"           : colors.value.darkContrast!
        };
      }
    });

    return {
      colors,
      style
    };
  }
});
</script>