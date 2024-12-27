<template>
  <FSSelectField
    :items="entityTypes"
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
import { EntityType } from "@dative-gpi/foundation-shared-domain/enums";

import FSSelectField from "@dative-gpi/foundation-shared-components/components/fields/FSSelectField.vue";

export default defineComponent({
  name: "FSSelectEntityType",
  components: {
    FSSelectField
  },
  props: {
    modelValue: {
      type: Number as PropType<EntityType>,
      required: false,
      default: EntityType.Device
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

    const entityTypes = computed((): { id: EntityType; label: string }[] => {
      const items = [
        { id: EntityType.Model, label: $tr("ui.common.models", "Model(s)") },
        { id: EntityType.Device, label: $tr("ui.common.devices", "Device(s)") },
        { id: EntityType.Group, label: $tr("ui.common.groups", "Group(s)") },
        { id: EntityType.Location, label: $tr("ui.common.locations", "Location(s)") }
      ];
      if (props.useNone) {
        items.unshift({ id: EntityType.None, label: $tr("ui.common.none", "None") });
      }
      return items;
    });

    return {
      entityTypes
    };
  }
});
</script>