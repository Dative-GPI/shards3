<template>
  <v-img
    class="fs-image"
    :src="source"
    :cover="$props.cover"
    :width="$props.width"
    :height="$props.height"
    :aspectRatio="$props.aspectRatio"
    v-bind="$attrs"
  >
    <template #placeholder>
      <v-skeleton-loader type="image" />
    </template>
  </v-img>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, toRefs } from "vue";

import { useImageRaw, useImageBlurHash } from "@dative-gpi/foundation-shared-services";

export default defineComponent({
  name: "FSImage",
  props: {
    imageId: {
      type: String,
      required: true
    },
    cover: {
      type: Boolean,
      required: false,
      default: true
    },
    width: {
      type: Number,
      required: false,
      default: null
    },
    height: {
      type: Number,
      required: false,
      default: null
    },
    aspectRatio: {
      type: String,
      required: false,
      default: null
    }
  },
  setup(props) {
    const { imageId, height, width, aspectRatio } = toRefs(props);

    const { fetching: fetchingRaw, fetch: fetchRaw, fetched: image } = useImageRaw();
    const { fetching: fetchingBlurHash, fetch: fetchBlurHash, fetched: blurHash } = useImageBlurHash();

    const computedWidth = computed((): number => {
      if (width.value) {
        return width.value;
      }
      if (height.value) {
        if (aspectRatio.value) {
          const split = aspectRatio.value.split('/');
          if (split.length === 2 && !isNaN(parseFloat(split[0])) && !isNaN(parseFloat(split[1]))) {
            return height.value * (parseFloat(split[0]) / parseFloat(split[1]));
          }
        }
        return height.value;
      }
      return 0;
    });

    const computedHeight = computed((): number => {
      if (height.value) {
        return height.value;
      }
      if (width.value) {
        if (aspectRatio.value) {
          const split = aspectRatio.value.split('/');
          if (split.length === 2 && !isNaN(parseFloat(split[0])) && !isNaN(parseFloat(split[1]))) {
            return width.value * (parseFloat(split[1]) / parseFloat(split[0]));
          }
        }
        return width.value;
      }
      return 0;
    });

    // const pixels = () => {
    //   if (this.value && this.isValid)
    //     return decode(this.value, this.width, this.height, this.punch);
    //   return [];
    // }

    // const isValid = () => {
    //   return this.value && isBlurhashValid(this.value).result;
    // }

    // const reset = () => {
    //   const ctx = (this.$el as HTMLCanvasElement).getContext("2d");
    //   this.$nextTick(() => {
    //     if (this.pixels.length) {
    //       const imageData = ctx!.createImageData(this.width, this.height);
    //       imageData.data.set(this.pixels);
    //       ctx!.putImageData(imageData, 0, 0);
    //     }
    //   });
    // }

    onMounted(async () => {
      await fetchRaw(imageId.value);
      if (!image.value) {
        await fetchBlurHash(imageId.value);
      }
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
    });

    return {
      source,
      computedWidth,
      computedHeight
    };
  }
});
</script>