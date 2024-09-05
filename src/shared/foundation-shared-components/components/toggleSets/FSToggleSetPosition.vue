<template>
  <FSToggleSet
    :values="positions"
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
  </FSToggleSet>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import type { PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { Position } from "@dative-gpi/foundation-shared-domain/enums";

export default defineComponent({
  name: "FSToggleSetPosition",
  props: {
    modelValue: {
      type: Number as PropType<Position>,
      required: false,
      default: Position.Abscissa
    },
    useNone: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { $tr } = useTranslationsProvider();

    const positions = computed((): { id: Position; label: string }[] => {
      const items = [
        { id: Position.Abscissa, label: $tr("ui.position.abscissa", "Right") },
        { id: Position.Ordinate, label: $tr("ui.position.ordinate", "Bottom") }
      ];
      if (props.useNone) {
        items.unshift({ id: Position.None, label: $tr("ui.position.none", "None") });
      }
      return items;
    });

    return {
      positions
    };
  }
});
</script>