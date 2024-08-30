<template>
  <FSImageUI
    :blurHash="image"
    :source="source"
    @error="onError"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { IMAGE_RAW_URL } from "@dative-gpi/foundation-shared-services/config/urls";

import { useImage } from "@dative-gpi/foundation-shared-services/composables";

import FSImageUI from "./FSImageUI.vue";

export default defineComponent({
  name: "FSImage",
  components: {
    FSImageUI
  },
  props: {
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  setup(props) {
    const { get: getImage, entity: image } = useImage();

    const source = computed(() => {
      return props.imageId ? IMAGE_RAW_URL(props.imageId) : null;
    });

    const onError = (): void => {
      if (props.imageId) {
        getImage(props.imageId);
      }
    };

    return {
      source,
      image,
      onError
    };
  }
});
</script>