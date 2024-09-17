<template>
  <FSCol
    v-bind="$props"
    gap="12px"
  >
    <FSSearchField
      v-if="$props.searchable"
      padding="0 12px 0 0"
      :hideHeader="true"
      :modelValue="actualSearch"
      placeholder="Search"
      @update:modelValue="onSearch"
    />
    <FSFadeOut
      padding="0 4px 0 0"
      :maxHeight="$props.maxHeight"
      :maskHeight="0"
    >
      <component
        :is="$props.direction == 'row' ? FSRow : FSCol"
      >
        <template
          v-if="$props.loading"
        >
          <FSLoader
            v-for="i in 4"
            :key="i"
            :width="$props.direction == 'row' ? '220px' : '100%'"
            height="50px"
          />
        </template>
        <template
          v-else
        >
          <FSTile
            v-for="item in filteredItems"
            :key="item.id"
            v-bind="tileProps(item)"
            :width="$props.direction == 'row' ? 'fit-content' : '100%'"
            height="fit-content"
            :editable="false"
          >
            <slot
              name="item"
              :item="item"
            >
              <FSRow
                align="center-left"
                height="24px"
                :wrap="false"
              >
                <FSButtonDragIcon
                  v-if="showDraggable"
                />
                <slot
                  name="itemContent"
                  :item="item"
                >
                  <!-- TODO : add draggable option -->
                  <FSImage
                    v-if="item.imageId"
                    :imageId="item.imageId"
                    width="24px"
                    height="24px"
                  />
                  <FSIcon
                    size="24px"
                    v-else-if="item.icon"
                    :icon="item.icon"
                  />
                  <FSSpan
                    font="text-overline"
                  >
                    {{ item[itemLabel] }}
                  </FSSpan>
                </slot>
                <FSRow
                  align="center-right"
                >
                  <FSButtonEditIcon
                    v-if="showEdit"
                    @click="$emit('click:edit', item.id)"
                  />
                  <FSButtonRemoveIcon
                    v-if="showRemove"
                    @click="$emit('click:remove', item.id)"
                  />
                </FSRow>
              </FSRow>
            </slot>
          </FSTile>
        </template>
      </component>
    </FSFadeOut>
  </FSCol>
</template>


<script lang="ts">
import { computed } from "vue";
import { defineComponent, type PropType, ref, watch } from "vue";

import { ColorEnum } from "../../models"
import { filterItems } from "../../utils";

import FSRow from "../FSRow.vue";
import FSCol from "../FSCol.vue";
import FSIcon from "../FSIcon.vue";
import FSSpan from "../FSSpan.vue";
import FSImage from "../FSImage.vue";
import FSLoader from "../FSLoader.vue";
import FSTile from "../tiles/FSTile.vue";
import FSFadeOut from "../FSFadeOut.vue";
import FSSearchField from "../fields/FSSearchField.vue";
import FSButtonEditIcon from "../buttons/FSButtonEditIcon.vue";
import FSButtonDragIcon from "../buttons/FSButtonDragIcon.vue";
import FSButtonRemoveIcon from "../buttons/FSButtonRemoveIcon.vue";

export default defineComponent({
  name: "FSSimpleList",
  components: {
    FSRow,
    FSCol,
    FSTile,
    FSIcon,
    FSSpan,
    FSImage,
    FSLoader,
    FSFadeOut,
    FSSearchField,
    FSButtonEditIcon,
    FSButtonDragIcon,
    FSButtonRemoveIcon,
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
      type: String as PropType<"row" | "column">,
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
      FSRow,
      FSCol,
    }
  }
});
</script>