<template>
  <FSEntityFieldUI
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :label="$props.label"
    :messages="$props.messages"
    :entityType="$props.entityType"
    :allowedEntityTypes="$props.allowedEntityTypes || []"
    :itemsCount="($props.modelValue || []).length"
    @update:entityType="$emit('update:entityType', $event)"
    :showEntities="$props.showEntities"
  >
    <template #items>
      Hello
    </template>
  </FSEntityFieldUI>
</template>


<script lang="ts">
import { defineComponent, type PropType } from "vue";

import type { EntityType } from "@dative-gpi/foundation-shared-domain/enums";
import FSEntityFieldUI from "@dative-gpi/foundation-shared-components/components/fields/FSEntityFieldUI.vue";

export default defineComponent({
  name: "FSEntityField",
  components: {
    FSEntityFieldUI,
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
    modelValue: {
      type: Array as PropType<string[]>,
      required: true,
      default: () => []
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
      type: Array as PropType<any[]>,
      required: false,
      default: () => []
    },
    messages: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    entityType: {
      type: Number as PropType<EntityType>,
      required: true
    },
    allowedEntityTypes: {
      type: Array as PropType<EntityType[]>,
      required: false,
      default: () => []
    },
    showEntities: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup() {
  }
});
</script>