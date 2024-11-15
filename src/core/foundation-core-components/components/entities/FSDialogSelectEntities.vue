<template>
  <FSDialogSubmit
    :title="$tr('ui.common.select-entities', 'Select entities')"
    width="1130px"
    :model-value="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    @click:submit-button="onSubmit"
  >
    <template
      #body
    >
      <FSSelectEntitiesList
        :singleSelect="$props.singleSelect"
        :entityType="$props.entityType"
        :modelValue="actualSelecteds"
        :filters="$props.filters"
        @update:modelValue="actualSelecteds = $event"
      />
    </template>
  </FSDialogSubmit>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref, watch } from "vue";

import type { EntityType } from "@dative-gpi/foundation-shared-domain/enums";

import FSDialogSubmit from "@dative-gpi/foundation-shared-components/components/FSDialogSubmit.vue";
import FSSelectEntitiesList from "./FSSelectEntitiesList.vue";

export default defineComponent({
  name: "FSDialogSelectEntities",
  components: {
    FSSelectEntitiesList,
    FSDialogSubmit,
  },
  emits: ["update", "update:modelValue", "update:selecteds"],
  props: {
    entityType: {
      type: Number as PropType<EntityType>,
      required: true
    },
    selecteds: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false
    },
    filters: {
      type: Object,
      required: false,
      default: null
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props, { emit }){
    const actualSelecteds = ref<string[]>([]);

    const onSubmit = () => {
      emit("update:selecteds", actualSelecteds.value);
      emit("update:modelValue", false);
      emit("update", { selecteds: actualSelecteds.value, modelValue: false });
    }

    watch(() => props.selecteds, (value) => {
      actualSelecteds.value = value;
    }, { immediate: true });

    return {
      onSubmit,
      actualSelecteds
    }
  }
});
</script>