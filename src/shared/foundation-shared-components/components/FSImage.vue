<template>
  <FSImageUI
    :height="$props.height || computedHeight"
    :width="$props.width || computedWidth"
    :aspectRatio="$props.aspectRatio"
    :blurHash="image"
    :source="source"
    @error="onError"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { IMAGE_THUMBNAIL_URL, IMAGE_RAW_URL } from "@dative-gpi/foundation-shared-services/config/urls";
import { useAppAuthToken, useImage } from "@dative-gpi/foundation-shared-services/composables";
import { varToSize } from "@dative-gpi/foundation-shared-components/utils";

import FSImageUI from "./FSImageUI.vue";

export default defineComponent({
  name: "FSImage",
  components: {
    FSImageUI
  },
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    aspectRatio: {
      type: Number as PropType<number | null>,
      required: false,
      default: 1
    }
  },
  setup(props) {
    const { get: getImage, entity: image } = useImage();
    const { authToken } = useAppAuthToken();

    const source = computed(() => {
      if (
        computedHeight.value && computedHeight.value < 90 &&
        computedWidth.value && computedWidth.value < 90
      ) {
        return props.imageId ? IMAGE_THUMBNAIL_URL(props.imageId, authToken.value) : null;
      }
      return props.imageId ? IMAGE_RAW_URL(props.imageId, authToken.value) : null;
    });

    const computedHeight = computed((): number | undefined => {
      if (props.height) {
        return varToSize(props.height);
      }
      if (props.width) {
        if (typeof (props.width) === "string") {
          return undefined;
        }
        if (props.aspectRatio) {
          return (varToSize(props.width) / props.aspectRatio);
        }
        return varToSize(props.width);
      }
      return undefined;
    });

    const computedWidth = computed((): number | undefined => {
      if (props.width) {
        return varToSize(props.width);
      }
      if (props.height) {
        if (typeof (props.height) === "string") {
          return undefined;
        }
        if (props.aspectRatio) {
          return (varToSize(props.height) * props.aspectRatio);
        }
        return varToSize(props.height);
      }
      return undefined;
    });

    const onError = (): void => {
      if (props.imageId) {
        getImage(props.imageId);
      }
    };

    return {
      computedHeight,
      computedWidth,
      source,
      image,
      onError
    };
  }
});
</script>