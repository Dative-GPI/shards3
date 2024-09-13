<template>
  <v-img
    class="fs-image"
    ref="imageRef"
    :height="$props.height"
    :width="$props.width"
    :cover="$props.cover"
    :src="realSource"
    :style="style"
    @error="$emit('error')"
    v-bind="$attrs"
  >
    <template
      #placeholder
    >
      <FSLoader
        v-if="$props.loading"
        class="fs-image-load"
        height="100%"
        width="100%"
        :borderRadius="$props.borderRadius"
      />
    </template>
    <template
      #error
    >
      <FSLoader
        v-if="!$props.blurHash"
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
import { computed, defineComponent, type PropType, ref, type StyleValue, watch } from "vue";
import { decode, isBlurhashValid } from "blurhash";

import { type ImageDetails } from "@dative-gpi/foundation-shared-domain/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSLoader from "./FSLoader.vue";

export default defineComponent({
  name: "FSImageUI",
  components: {
    FSLoader
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
    imageB64: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    source: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    blurHash: {
      type: Object as PropType<ImageDetails | null>,
      required: false,
      default: null
    },
    borderRadius: {
      type: [String, Number],
      required: false,
      default: "4px"
    },
    cover: {
      type: Boolean,
      required: false,
      default: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {

    const imageRef = ref<HTMLFormElement | null>(null);
    const canvasRef = ref<HTMLCanvasElement | null>(null);

    const signatures = ref<{ [key: string]: string }>({
      JVBERi0    : "application/pdf",
      R0lGODdh   : "image/gif",
      R0lGODlh   : "image/gif",
      iVBORw0KGgo: "image/png",
      "/9j/"     : "image/jpg",
    });

    const style = computed((): StyleValue => ({
      "--fs-image-border-radius"   : sizeToVar(props.borderRadius),
      "--fs-image-blurhash-opacity": props.blurHash ? "1" : "0"
    }));

    const realSource = computed((): string | undefined => {
      console.log(props.width, props.height);
      if (props.imageB64) {
        if (imageType.value && imageData.value) {
          return `${imageType.value},${imageData.value}`;
        }
      }
      else if (props.source) {
        return props.source;
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

    watch(() => props.blurHash, () => {
      if (canvasRef.value && imageRef.value) {
        if (props.blurHash && isBlurhashValid(props.blurHash.blurHash).result) {
          const ctx = canvasRef.value.getContext("2d");
          if (ctx) {
            const width = (imageRef.value as any).$el.clientWidth;
            const height = (imageRef.value as any).$el.clientHeight;
            const pixels = decode(props.blurHash.blurHash, width, height);
            const imageData = ctx.createImageData(width, height);
            canvasRef.value.width = width;
            canvasRef.value.height = height;
            imageData.data.set(pixels);
            ctx.putImageData(imageData, 0, 0);
          }
        }
      }
    });

    return {
      realSource,
      canvasRef,
      imageRef,
      style
    };
  }
});
</script>