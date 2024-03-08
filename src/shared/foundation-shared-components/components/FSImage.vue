<template>
  <v-img
    class="fs-image"
    :src="source"
    :style="style"
    :cover="$props.cover"
    :width="computedWidth"
    :height="computedHeight"
    v-bind="$attrs"
  >
    <template #placeholder>
      <v-skeleton-loader
        class="fs-load-image"
        type="image"
        :style="style"
      />
    </template>
  </v-img>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watch } from "vue";

import { useImageRaw, useImageBlurHash } from "@dative-gpi/foundation-shared-services/composables";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

export default defineComponent({
  name: "FSImage",
  props: {
    imageId: {
      type: [String, null, undefined],
      required: false,
      default: null
    },
    cover: {
      type: Boolean,
      required: false,
      default: true
    },
    width: {
      type: [String, Number],
      required: false,
      default: null
    },
    height: {
      type: [String, Number],
      required: false,
      default: null
    },
    aspectRatio: {
      type: String,
      required: false,
      default: null
    },
    borderRadius: {
      type: [String, Number],
      required: false,
      default: "4px"
    }
  },
  setup(props) {
    const { getting: fetchingRaw, get: fetchRaw, entity: image } = useImageRaw();
    const { getting: fetchingBlurHash, get: fetchBlurHash, entity: blurHash } = useImageBlurHash();

    const style = computed((): { [code: string]: string } & Partial<CSSStyleDeclaration> => {
      return {
        "--fs-image-border-radius": sizeToVar(props.borderRadius)
      }
    });

    const computedWidth = computed((): number | string | undefined => {
      if (props.width) {
        return props.width;
      }
      if (props.height) {
        if (typeof(props.height) === "string") {
          return undefined;
        }
        if (props.aspectRatio) {
          const split = props.aspectRatio.split('/');
          if (split.length === 2 && !isNaN(parseFloat(split[0])) && !isNaN(parseFloat(split[1]))) {
            return props.height * (parseFloat(split[0]) / parseFloat(split[1]));
          }
        }
        return props.height;
      }
      return undefined;
    });

    const computedHeight = computed((): number | string | undefined => {
      if (props.height) {
        return props.height;
      }
      if (props.width) {
        if (typeof(props.width) === "string") {
          return undefined;
        }
        if (props.aspectRatio) {
          const split = props.aspectRatio.split('/');
          if (split.length === 2 && !isNaN(parseFloat(split[0])) && !isNaN(parseFloat(split[1]))) {
            return props.width * (parseFloat(split[1]) / parseFloat(split[0]));
          }
        }
        return props.width;
      }
      return undefined;
    });

    const source = computed((): string | null => {
      if (fetchingRaw.value) {
        return null;
      }
      if (image.value) {
        return image.value;
      }
      if (fetchingBlurHash.value) {
        return null;
      }
      if (blurHash.value) {
        return blurHash.value.blurHash;
      }
      return null;
    });

    onMounted(() => {
      fetch();
    });

    watch(() => props.imageId, () => {
      fetch();
    });

    const fetch = async () => {
      if (!props.imageId) {
        return;
      }
      await fetchRaw(props.imageId);
      if (!image.value) {
        await fetchBlurHash(props.imageId);
      }
    }

    return {
      style,
      source,
      computedWidth,
      computedHeight
    };
  }
});
</script>