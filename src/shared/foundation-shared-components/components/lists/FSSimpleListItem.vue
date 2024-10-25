<template>
  <FSTile
    v-bind="$props.tileProps"
    :width="$props.width"
    height="fit-content"
    :editable="false"
  >
    <slot
      name="item"
      :item="{ label, icon, imageId, id }"
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
          :item="{ label, icon, imageId, id }"
        >
          <!-- TODO : add draggable option -->
          <FSImage
            v-if="$props.imageId"
            width="24px"
            height="24px"
            :imageId="$props.imageId"
            :thumbnail="true"
          />
          <FSIcon
            size="24px"
            v-else-if="$props.icon"
            :icon="$props.icon"
          />
          <FSSpan
            font="text-overline"
          >
            {{ $props.label }}
          </FSSpan>
        </slot>
        <FSRow
          v-if="showEdit || showRemove"
          align="center-right"
          :wrap="false"
        >
          <FSButtonEditIcon
            v-if="showEdit"
            @click="$emit('click:edit', $props.id)"
          />
          <FSButtonRemoveIcon
            v-if="showRemove"
            @click="$emit('click:remove', $props.id)"
          />
        </FSRow>
      </FSRow>
    </slot>
  </FSTile>
</template>


<script lang="ts">
import { defineComponent, type PropType } from "vue";

import FSRow from "../FSRow.vue";
import FSIcon from "../FSIcon.vue";
import FSSpan from "../FSSpan.vue";
import FSImage from "../FSImage.vue";
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
    FSButtonEditIcon,
    FSButtonDragIcon,
    FSButtonRemoveIcon,
  },
  props: {
    tileProps: {
      type: Object as PropType<Record<string, any>>,
      required: false,
      default: () => ({})
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
    width:{
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null | undefined>,
      required: false,
      default: undefined
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    imageId: {
      type: String as PropType<string | null>,
      required: false
    }
  },
  emits: ["click:edit", "click:remove"]
});
</script>