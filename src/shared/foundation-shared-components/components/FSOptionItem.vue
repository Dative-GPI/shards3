<template>
  <FSClickable
    padding="4px"
    :editable="$props.editable"
    :height="['32px', '28px']"
    :variant="$props.variant"
    :color="$props.color"
    :load="$props.load"
    :border="false"
    :width="width"
    @click.stop="onClick"
    v-bind="$attrs"
  >
    <FSRow
      align="center-center"
      width="fill"
      :wrap="false"
    >
      <slot
        name="prepend"
        v-bind="{ color: $props.color, colors }"
      >
        <FSIcon
          v-if="$props.prependIcon || $props.icon"
          size="l"
        >
          {{ $props.prependIcon ?? $props.icon }}
        </FSIcon>
      </slot>
      <slot
        v-bind="{ color: $props.color, colors }"
      >
        <FSSpan
          v-if="$props.label"
        >
          {{ $props.label }}
        </FSSpan>
      </slot>
      <slot
        name="append"
        v-bind="{ color: $props.color, colors }"
      >
        <FSIcon
          v-if="$props.appendIcon"
          size="l"
        >
          {{ $props.appendIcon }}
        </FSIcon>
      </slot>
    </FSRow>
  </FSClickable>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { computed, defineComponent } from "vue";

import type { ColorBase} from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar, varToSize } from "@dative-gpi/foundation-shared-components/utils";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSClickable from "./FSClickable.vue";
import FSSpan from "./FSSpan.vue";
import FSIcon from "./FSIcon.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSOptionItem",
  components: {
    FSClickable,
    FSSpan,
    FSIcon,
    FSRow
  },
  props: {
    prependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    appendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    icon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    variant: {
      type: String as PropType<"standard" | "background" | "full">,
      required: false,
      default: "standard"
    },
    ItemWidth: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => ["32px","28px"]
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    load: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const { getColors } = useColors();

    const colors = computed(() => getColors(props.color));

    const width = computed((): string => {
      if (props.label) {
        return "fit-content";
      }
      return sizeToVar(varToSize(props.ItemWidth));
    });

    const onClick = (event: MouseEvent) => {
      if (props.editable && !props.load) {
        emit("click", event);
      }
    };

    return {
      colors,
      width,
      onClick
    };
  }
})
</script>