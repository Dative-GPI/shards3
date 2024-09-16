<template>
  <FSEditImageUI
    :source="source"
    :blurHash="image"
    @error="onError"
    @update:source="$emit('update:imageId', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { IMAGE_RAW_URL } from "@dative-gpi/foundation-shared-services/config";

import { useImage } from "@dative-gpi/foundation-shared-services/composables";

import FSEditImageUI from "./FSEditImageUI.vue";

export default defineComponent({
  name: "FSEditImage",
  components: {
    FSEditImageUI
  },
  props: {
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ["update:imageId"],
  setup(props) {
    const { get: getImage, entity: image } = useImage();
    
    const source = computed(() => {
      return props.imageId ? IMAGE_RAW_URL(props.imageId) : null;
    })

    const onError = (): void => {
      if (props.imageId) {
        console.error("Error loading image", props.imageId);
        getImage(props.imageId);
      }
    };

    return {
      image,
      source,
      onError
    };
  }
});
</script>