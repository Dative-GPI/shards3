<template>
  <v-img
    class="fs-image"
    ref="imageRef"
    :height="computedHeight"
    :width="computedWidth"
    :cover="$props.cover"
    :style="style"
    :src="source"
    @error="onError"
    v-bind="$attrs"
  >
    <template #placeholder>
      <FSLoader
        class="fs-image-load"
        height="100%"
        width="100%"
        :borderRadius="$props.borderRadius"
      />
    </template>
    <template #error>
      <FSLoader
        v-if="!blurHash"
        class="fs-image-load"
        height="100%"
        width="100%"
        :borderRadius="$props.borderRadius"
      />
      <canvas
        ref="canvasRef"
      />
    </template>
  </v-img>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from "vue";
import { decode, isBlurhashValid } from "blurhash";

import { useImageBlurHash } from "@dative-gpi/foundation-shared-services/composables";
import { IMAGE_RAW_URL } from "@dative-gpi/foundation-shared-services/config/urls";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSLoader from "./FSLoader.vue";

export default defineComponent({
  name: "FSImage",
  components: {
    FSLoader
  },
  props: {
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    imageB64: {
      type: String as PropType<string | null>,
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
      type: String as PropType<string | null>,
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
    const { get: fetchBlurHash, entity: blurHash } = useImageBlurHash();

    const imageRef = ref<HTMLFormElement | null>(null);
    const canvasRef = ref<HTMLCanvasElement | null>(null);

    const signatures = ref<{ [key: string]: string }>({
      JVBERi0    : "application/pdf",
      R0lGODdh   : "image/gif",
      R0lGODlh   : "image/gif",
      iVBORw0KGgo: "image/png",
      "/9j/"     : "image/jpg",
    });

    const style = computed((): { [key: string] : string | undefined } => {
      return {
        "--fs-image-border-radius"   : sizeToVar(props.borderRadius),
        "--fs-image-blurhash-opacity": blurHash.value ? "1" : "0"
      }
    });

    const computedHeight = computed((): number | string | undefined => {
      if (props.height) {
        return props.height;
      }
      if (props.width) {
        if (typeof (props.width) === "string") {
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

    const computedWidth = computed((): number | string | undefined => {
      if (props.width) {
        return props.width;
      }
      if (props.height) {
        if (typeof (props.height) === "string") {
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

    const source = computed((): string | undefined => {
      if (props.imageId) {
        return IMAGE_RAW_URL(props.imageId);
      }
      else if (props.imageB64) {
        if (imageType.value && imageData.value) {
          return `${imageType.value},${imageData.value}`;
        }
      }
    });

    const imageData = computed((): string | null => {
      if (props.imageB64 && props.imageB64.includes(",")) {
        return props.imageB64.split(",")[1];
      }
      return props.imageB64;
    });

    const imageType = computed((): string | null => {
      if (props.imageB64 && props.imageB64.includes(",")) {
        return props.imageB64.split(",")[0];
      }
      if (props.imageB64) {
        for (const s in signatures.value) {
          if (props.imageB64.startsWith(s)) {
            return `data:${signatures.value[s]};base64`;
          }
        }
      }
      return null;
    });

    const onError = (): void => {
      if (props.imageId) {
        fetchBlurHash(props.imageId);
      }
    };

    watch(() => blurHash.value, () => {
      if (canvasRef.value && imageRef.value) {
        if (blurHash.value && isBlurhashValid(blurHash.value.blurHash).result) {
          const ctx = canvasRef.value.getContext("2d");
          if (ctx) {
            const pixels = decode(blurHash.value.blurHash, (imageRef.value as any).$el.clientWidth, (imageRef.value as any).$el.clientHeight);
            const imageData = ctx.createImageData((imageRef.value as any).$el.clientWidth, (imageRef.value as any).$el.clientHeight);
            imageData.data.set(pixels);
            ctx.putImageData(imageData, 0, 0);
          }
        }
      }
    });

    return {
      computedHeight,
      computedWidth,
      canvasRef,
      imageRef,
      blurHash,
      source,
      style,
      onError
    };
  }
});
</script>