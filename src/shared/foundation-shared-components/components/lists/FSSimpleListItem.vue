<template>
  <template
    v-if="$props.loading"
  >
    <FSLoader
      v-for="i in 4"
      :key="i"
      :width="loaderWidth"
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
      :width="tileWidth"
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
              width="24px"
              height="24px"
              :imageId="item.imageId"
              :thumbnail="true"
            />
            <FSIcon
              size="24px"
              v-else-if="item.icon"
              :icon="item.icon"
            />
            <FSSpan
              font="text-overline"
            >
              {{ item[$props.itemLabel || 'label'] }}
            </FSSpan>
          </slot>
          <FSRow
            v-if="showEdit || showRemove"
            align="center-right"
            :wrap="false"
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
</template>


<script lang="ts">
import { defineComponent, type PropType } from "vue";

import FSRow from "../FSRow.vue";
import FSIcon from "../FSIcon.vue";
import FSSpan from "../FSSpan.vue";
import FSImage from "../FSImage.vue";
import FSLoader from "../FSLoader.vue";
import FSTile from "../tiles/FSTile.vue";
import FSButtonEditIcon from "../buttons/FSButtonEditIcon.vue";
import FSButtonDragIcon from "../buttons/FSButtonDragIcon.vue";
import FSButtonRemoveIcon from "../buttons/FSButtonRemoveIcon.vue";

export default defineComponent({
  name: "FSSimpleListItem",
  components: {
    FSRow,
    FSTile,
    FSIcon,
    FSSpan,
    FSImage,
    FSLoader,
    FSButtonEditIcon,
    FSButtonDragIcon,
    FSButtonRemoveIcon,
  },
  props: {
    filteredItems: {
      type: Array as PropType<{id: string, label?: string, icon?: string, imageId?: string | null, [index: string]: any}[]>,
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
    itemLabel: {
      type: String,
      required: false,
      default: "label"
    },
    loaderWidth:{
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null | undefined>,
      required: false,
      default: undefined
    },
    tileWidth:{
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null | undefined>,
      required: false,
      default: undefined
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["click:edit", "click:remove"]
});
</script>