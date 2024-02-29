<template>
  <v-img
    class="fs-image"
    :src="source"
    :cover="$props.cover"
    :width="computedWidth"
    :height="computedHeight"
    v-bind="$attrs"
  >
    <template #placeholder>
      <v-skeleton-loader
        type="image"
      />
    </template>
  </v-img>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";

import { useImageRaw, useImageBlurHash } from "@dative-gpi/foundation-shared-services/composables";

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
    const { fetching: fetchingRaw, fetch: fetchRaw, fetched: image } = useImageRaw();
    const { fetching: fetchingBlurHash, fetch: fetchBlurHash, fetched: blurHash } = useImageBlurHash();

    const computedWidth = computed((): number => {
      if (props.width) {
        return props.width;
      }
      if (props.height) {
        if (props.aspectRatio) {
          const split = props.aspectRatio.split('/');
          if (split.length === 2 && !isNaN(parseFloat(split[0])) && !isNaN(parseFloat(split[1]))) {
            return props.height * (parseFloat(split[0]) / parseFloat(split[1]));
          }
        }
        return props.height;
      }
      return 0;
    });

    const computedHeight = computed((): number => {
      if (props.height) {
        return props.height;
      }
      if (props.width) {
        if (props.aspectRatio) {
          const split = props.aspectRatio.split('/');
          if (split.length === 2 && !isNaN(parseFloat(split[0])) && !isNaN(parseFloat(split[1]))) {
            return props.width * (parseFloat(split[1]) / parseFloat(split[0]));
          }
        }
        return props.width;
      }
      return 0;
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

    onMounted(() => {
      fetch();
    });

    const fetch = async () => {
      await fetchRaw(props.imageId);
      if (!image.value) {
        await fetchBlurHash(props.imageId);
      }
    }

    return {
      source,
      computedWidth,
      computedHeight
    };
  }
});
</script>