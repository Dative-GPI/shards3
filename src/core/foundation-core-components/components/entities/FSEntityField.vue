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
    @update:entityType="onEntityTypeChanged"
    :showEntities="$props.showEntities"
    :showCount="$props.showCount"
    @click:select="dialog = true"
  >
    <template
      #items
    >
      <FSSimpleEntitiesList
        :entity-type="$props.entityType"
        :filters="simpleListFilters"
        :showEdit="false"
        @click:remove="onRemove"
      />
    </template>
  </FSEntityFieldUI>
  <FSDialogSelectEntities
    :singleSelect="$props.singleSelect"
    :entity-type="$props.entityType"
    :filters="$props.filters"
    v-model="dialog"
    :selecteds="$props.modelValue || []"
    @update:selecteds="onModelValueChanged"
  />
</template>


<script lang="ts">
import { defineComponent, ref, type PropType, computed } from "vue";

import { EntityType } from "@dative-gpi/foundation-shared-domain/enums";

import type { DashboardOrganisationFilters, DashboardOrganisationTypeFilters, DeviceOrganisationFilters, FolderFilters, GroupFilters, LocationFilters, ModelFilters, UserOrganisationFilters } from "@dative-gpi/foundation-core-domain/models";

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
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false
    },
    showCount: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update","update:modelValue", "update:entityType"],
  setup(props, { emit }) {
    const dialog = ref(false);

    const simpleListFilters = computed(() => {
      switch(props.entityType) {
        case EntityType.Device:
          return { 
            deviceOrganisationsIds: props.modelValue
          } satisfies DeviceOrganisationFilters;
        case EntityType.Dashboard:
          return {
            dashboardOrganisationsIds: props.modelValue,
            dashboardOrganisationTypesIds: props.modelValue
          } satisfies DashboardOrganisationFilters & DashboardOrganisationTypeFilters;
        case EntityType.Group:
          return {
            groupsIds: props.modelValue
          } satisfies GroupFilters;
        case EntityType.Folder:
          return {
            foldersIds: props.modelValue
          } satisfies FolderFilters;
        case EntityType.Location:
          return {
            locationsIds: props.modelValue
          } satisfies LocationFilters;
        case EntityType.User:
          return {
            userOrganisationsIds: props.modelValue
          } satisfies UserOrganisationFilters;
        case EntityType.Model:
          return {
            modelsIds: props.modelValue
          } satisfies ModelFilters;
        default:
          return undefined;
      };
    })

    const onRemove = (id: string) => {
      emit("update:modelValue", props.modelValue.filter((i) => i !== id));
      emit("update", {
        entityType: props.entityType,
        modelValue: props.modelValue.filter((i) => i !== id)
      })
    }

    const onEntityTypeChanged = (entityType: EntityType) => {
      emit('update:entityType', entityType); 
      emit('update:modelValue', []);
      emit("update", {
        entityType,
        modelValue: []
      })
    }

    const onModelValueChanged = (modelValue: string[]) => {
      emit('update:modelValue', modelValue);
      emit("update", {
        entityType: props.entityType,
        modelValue
      })
    }

    return {
      dialog,
      simpleListFilters,
      onRemove,
      onEntityTypeChanged,
      onModelValueChanged
    }
  }
});
</script>
