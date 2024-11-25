<template>
  <FSSelectField
    :clearable="false"
    :items="items"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #item-prepend="{ item }"
    >
      <v-icon>{{ item.icon }}</v-icon>
    </template>
  </FSSelectField>
</template>
  
  <script lang="ts">
import type { PropType} from "vue";
import { defineComponent } from "vue";
  
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { ListModes } from "@dative-gpi/foundation-shared-domain/enums";
  
import FSSelectField from "../fields/FSSelectField.vue";
  
export default defineComponent({
  name: "FSSelectViewMode",
  components: {
    FSSelectField
  },
  props: {
    modelValue: {
      type: String as PropType<ListModes>,
      required: true
    },
  },
  emits: ["update:modelValue"],
  setup() {
    const { $tr } = useTranslationsProvider();
  
    const items = [
      { id: ListModes.Table, label: $tr("ui.common.table", "Table"), icon: "mdi-format-list-bulleted" },
      { id: ListModes.Iterator, label: $tr("ui.common.iterator", "Tile"), icon: "mdi-view-grid-outline" },
    ];
  
    return {
      items
    };
  }
});
  </script>