<template>
  <FSSelectField
    :items="selectedEntities"
    :clearable="false"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import type { PropType} from "vue";
import { computed, defineComponent } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { SelectedEntities } from "@dative-gpi/foundation-core-domain/models";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

export default defineComponent({
  name: "FSSelectSelectedEntities",
  components: {
    FSSelectField
  },
  props: {
    modelValue: {
      type: Number as PropType<SelectedEntities>,
      required: false,
      default: SelectedEntities.Devices
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

    const selectedEntities = computed((): { id: SelectedEntities; label: string }[] => {
      const items = [
        { id: SelectedEntities.Models, label: $tr("ui.selected-entities.models", "Models") },
        { id: SelectedEntities.Devices, label: $tr("ui.selected-entities.devices", "Devices") },
        { id: SelectedEntities.Groups, label: $tr("ui.selected-entities.groups", "Groups") },
        { id: SelectedEntities.Locations, label: $tr("ui.selected-entities.locations", "Locations") }
      ];
      if (props.useNone) {
        items.unshift({ id: SelectedEntities.None, label: $tr("ui.selected-entities.none", "None") });
      }
      return items;
    });

    return {
      selectedEntities
    };
  }
});
</script>