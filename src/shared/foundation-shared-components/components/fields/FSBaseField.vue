<template>
  <FSCol>
    <slot
      v-if="!$props.hideHeader"
      name="label"
    >
      <FSRow
        :wrap="false"
      >
        <FSSpan
          class="fs-base-field-label"
          font="text-overline"
          :style="style"
        >
          {{ $props.label }}
        </FSSpan>
        <FSSpan
          v-if="$props.label && $props.required"
          class="fs-base-field-label"
          style="margin-left: -8px;"
          font="text-overline"
          :ellipsis="false"
          :style="style"
        >
          *
        </FSSpan>
        <v-spacer
          style="min-width: 40px;"
        />
        <FSSpan
          v-if="$props.messages.length > 0"
          class="fs-base-field-messages"
          font="text-overline"
          :style="style"
        >
          {{ $props.messages.join(", ") }}
        </FSSpan>
      </FSRow>
    </slot>
    <slot />
    <slot
      name="description"
    >
      <FSSpan
        v-if="$props.description"
        class="fs-base-field-description"
        font="text-underline"
        :style="style"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSBaseField",
  components: {
    FSSpan,
    FSCol,
    FSRow
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
    messages: {
      type: Array,
      required: false,
      default: () => []
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { getColors } = useColors();
    const { slots } = useSlots();

    delete slots.label;
    delete slots.description;

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): { [key: string] : string | null | undefined } => {
      if (!props.editable) {
        return {
          "--fs-base-field-color": lights.dark
        };
      }
      return {
        "--fs-base-field-color"      : darks.base,
        "--fs-base-field-error-color": errors.base
      };
    });

    return {
      style,
      slots
    };
  }
});
</script>