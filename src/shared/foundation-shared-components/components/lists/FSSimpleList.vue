<template>
  <component
    :is="$props.direction == 'row' ? FSRow : FSCol"
    v-bind="$attrs"
  >
    <FSTile
      v-for="item in items"
      :key="item.id"
      v-bind="tileProps(item)"
      :width="$props.direction == 'row' ? 'fit-content' : '100%'"
      height="fit-content"
    >
      <slot
        name="item"
        :item="item"
      >
        <FSRow
          align="center-left"
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
            <FSSpan>{{ item[itemLabel] }}</FSSpan>
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
  </component>
</template>


<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { ColorEnum } from "../../models"

import FSRow from "../FSRow.vue";
import FSCol from "../FSCol.vue";
import FSImage from "../FSImage.vue";
import FSIcon from "../FSIcon.vue";
import FSSpan from "../FSSpan.vue";
import FSTile from "../tiles/FSTile.vue";
import FSButtonRemoveIcon from "../buttons/FSButtonRemoveIcon.vue";
import FSButtonEditIcon from "../buttons/FSButtonEditIcon.vue";
import FSButtonDragIcon from "../buttons/FSButtonDragIcon.vue";

export default defineComponent({
  name: "FSSimpleList",
  components: {
    FSRow,
    FSCol,
    FSTile,
    FSImage,
    FSIcon,
    FSSpan,
    FSButtonRemoveIcon,
    FSButtonEditIcon,
    FSButtonDragIcon,
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
    direction: {
      type: String as PropType<"row" | "column">,
      required: false,
      default: "column"
    },
    itemLabel: {
      type: String,
      required: false,
      default: "label"
    }
  },
  emits: ["click:edit", "click:remove"],
  setup(){
    return {
      ColorEnum,
      FSRow,
      FSCol
    }
  }
});
</script>