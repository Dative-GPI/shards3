<template>
  <FSCol
    v-bind="$props"
    gap="12px"
  >
    <FSSearchField
      v-if="$props.searchable"
      :hideHeader="true"
      :modelValue="actualSearch"
      placeholder="Search"
      @update:modelValue="onSearch"
    />
    <FSFadeOut
      v-if="$props.direction == 'column'"
      :maxHeight="$props.maxHeight"
      :maskHeight="0"
    >
      <FSCol>
        <FSSimpleListItem 
          loaderWidth="100%"
          tileWidth="100%"
          :filteredItems="filteredItems"
          @click:edit="$emit('click:edit', $event)"
          @click:remove="$emit('click:remove', $event)"
          v-bind="$props"
        />
      </FSCol>
    </FSFadeOut>
    <FSRow
      v-else-if="$props.direction == 'row'"
    >
      <FSSimpleListItem 
        loaderWidth="220px"
        tileWidth="fit-content"
        :filteredItems="filteredItems"
        @click:edit="$emit('click:edit', $event)"
        @click:remove="$emit('click:remove', $event)"
        v-bind="$props"
      />
    </FSRow>
    <FSSlideGroup
      v-else
    >
      <FSSimpleListItem 
        loaderWidth="220px"
        tileWidth="fit-content"
        :filteredItems="filteredItems"
        @click:edit="$emit('click:edit', $event)"
        @click:remove="$emit('click:remove', $event)"
        v-bind="$props"
      />
    </FSSlideGroup>
  </FSCol>
</template>


<script lang="ts">
import { computed } from "vue";
import { defineComponent, type PropType, ref, watch } from "vue";

import { ColorEnum } from "../../models"
import { filterItems } from "../../utils";

import FSRow from "../FSRow.vue";
import FSCol from "../FSCol.vue";
import FSFadeOut from "../FSFadeOut.vue";
import FSSlideGroup from "../FSSlideGroup.vue"
import FSSearchField from "../fields/FSSearchField.vue";
import FSSimpleListItem from "./FSSimpleListItem.vue";

export default defineComponent({
  name: "FSSimpleList",
  components: {
    FSRow,
    FSCol,
    FSFadeOut,
    FSSlideGroup,
    FSSearchField,
    FSSimpleListItem
  },
  props: {
    items: {
      type: Array as PropType<{id: string, label?: string, icon?: string, imageId?: string, [index: string]: any}[]>,
      required: true
    },
    tileProps: {
      type: Function as PropType<(item: any) => Record<string, any>>,
      required: false,
      default: () => () => ({})
    },
    showEdit: {
      type: Boolean,
      required: false,
      default: true
    },
    showRemove: {
      type: Boolean,
      required: false,
      default: true
    },
    showDraggable: {
      type: Boolean,
      required: false,
      default: false
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false
    },
    search: {
      type: String,
      required: false,
      default: ""
    },
    noFilter: {
      type: Boolean,
      required: false,
      default: false
    },
    maxHeight: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null | undefined>,
      required: false,
      default: undefined
    },
    direction: {
      type: String as PropType<"row" | "column" | "slided">,
      required: false,
      default: "column"
    },
    itemLabel: {
      type: String,
      required: false,
      default: "label"
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["click:edit", "click:remove", "update:search"],
  setup(props, { emit }) {
    const actualSearch = ref<string | null>(props.search);
    const filteredItems = computed(() => {
      if(!actualSearch.value) {
        return props.items;
      }
      return filterItems(props.items, actualSearch.value);
    });

    const onSearch = (value: string) => {
      if(props.noFilter) {
        emit("update:search", value);
      } else {
        actualSearch.value = value;
      }
    }

    watch(() => props.search, (value) => {
      actualSearch.value = value;
    });

    return {
      actualSearch,
      filteredItems,
      ColorEnum,
      onSearch,
    }
  }
});
</script>