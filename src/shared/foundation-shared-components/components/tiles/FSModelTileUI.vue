<template>
  <FSClickable
    padding="16px"
    height="196px"
    width="148px"
    :border="false"
    v-bind="$attrs"
  >
    <template
      #default
    >
      <FSCol
        align="center-center"
      >
        <FSImage
          :imageId="imageId"
          width="116px"
          height="116px"
        />
        <FSSpan
          :lineClamp="2"
        >
          {{ label }}
        </FSSpan>
      </FSCol>
    </template>
  </FSClickable>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import FSCol from "../FSCol.vue";
import FSSpan from "../FSSpan.vue";
import FSImage from "../FSImage.vue";
import FSClickable from "../FSClickable.vue";

export default defineComponent({
  name: "FSModelTileUI",
  components: {
    FSCol,
    FSSpan,
    FSImage,
    FSClickable,
  },
  props:{
    label: {
      type: String,
      required: false,
      default: null,
    },
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null,
    }
  }
});
</script>