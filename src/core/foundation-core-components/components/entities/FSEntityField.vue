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
    @update:entityType="$emit('update:entityType', $event); $emit('update:modelValue', [])"
    :showEntities="$props.showEntities"
    @click:select="dialog = true"
  >
    <template
      #items
    >
      <FSSimpleEntitiesList
        :entity-type="$props.entityType"
        :filters="listComponentFilters"
        :showEdit="false"
        @click:remove="onRemove"
      />
    </template>
  </FSEntityFieldUI>
  <FSDialogSelectEntities
    :entity-type="$props.entityType"
    :filters="$props.filters"
    v-model="dialog"
    :selecteds="$props.modelValue || []"
    @update:selecteds="$emit('update:modelValue', $event)"
  />
</template>


<script lang="ts">
import { defineComponent, ref, type PropType, computed } from "vue";

import { EntityType } from "@dative-gpi/foundation-shared-domain/enums";

import type { DeviceOrganisationFilters } from "@dative-gpi/foundation-core-domain/models";

import FSEntityFieldUI from "@dative-gpi/foundation-shared-components/components/fields/FSEntityFieldUI.vue";

import FSSimpleEntitiesList from "./FSSimpleEntitiesList.vue";
import FSDialogSelectEntities from "./FSDialogSelectEntities.vue";

export default defineComponent({
  name: "FSEntityField",
  components: {
    FSEntityFieldUI,
    FSSimpleEntitiesList,
    FSDialogSelectEntities
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
    filters: {
      type: Object,
      required: false,
      default: () => null
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
  emits: ["update:modelValue", "update:entityType"],
  setup(props, { emit }) {
    const dialog = ref(false);

    const listComponentFilters = computed(() => {
      switch(props.entityType) {
        case EntityType.Device:
          return { 
            deviceOrganisationsIds: props.modelValue
          } satisfies DeviceOrganisationFilters;
        default:
          return {};
      };
    });

    const onRemove = (id: string) => {
      emit("update:modelValue", props.modelValue.filter((i) => i !== id));
    }

    return {
      dialog,
      listComponentFilters,
      onRemove
    }
  }
});
</script>