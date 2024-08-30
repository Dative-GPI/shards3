<template>
  <v-overlay
    v-if="isExtraSmall"
    :modelValue="$props.mode === 'expand'"
    :contained="true"
    @click="$emit('update:mode', 'collapse')"
    zIndex="0"
  />
  <div
    v-show="isExtraSmall"
    ref="mobileOverlayWrapper"
    class="fs-map-overlay-mobile"
    :style="{ height: $props.mode === 'expand' ? '90%' : ($props.mode === 'half' ? '50%' : '20px') }"
  >
    <FSCard
      width="100%"
      height="100%"
      :elevation="true"
      :border="false"
    >
      <FSCol
        height="100%"
        gap="0px"
      >
        <FSRow
          align="center-center"
          @touchstart="$props.mode === 'expand' ? $emit('update:mode', 'collapse') : $emit('update:mode', 'expand')"
        >
          <FSButton
            variant="icon"
            :icon="$props.mode === 'expand' ? 'mdi-chevron-down' : 'mdi-chevron-up'"
            @click="$props.mode === 'expand' ? $emit('update:mode', 'collapse') : $emit('update:mode', 'expand')"
          />
        </FSRow>
        <FSCol
          v-if="$props.mode !== 'collapse'"
          height="fill"
          style="min-height: 0;"
        >
          <slot
            name="body"
          />
        </FSCol>
      </FSCol>
    </FSCard>
  </div>

  <FSCard
    v-show="!isExtraSmall"
    class="fs-map-overlay-desktop"
    ref="desktopOverlay"
    :elevation="true"
    :border="false"
  >
    <FSCol
      height="fill"
    >
      <slot
        name="body"
      />
    </FSCol>
  </FSCard>
</template>

<script lang="ts">
import { defineComponent, type PropType, onUnmounted, onMounted, ref } from "vue";
import { useBreakpoints } from "../../composables";
import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSMapOverlay",
  props: {
    mode: {
      type: String as PropType<"collapse" | "half" | "expand">,
      required: false,
      default: "collapse"
    }
  },
  components: {
    FSButton,
    FSCard,
    FSCol,
    FSRow
  },
  emits: ["update:mode", "update:height", "update:width"],
  setup(_, { emit }) {
    const { isExtraSmall } = useBreakpoints();

    const mobileOverlayWrapper = ref<HTMLDivElement | null>(null);
    const desktopOverlay = ref<InstanceType<typeof FSCard> | null>(null);

    const mobileResizeObserver = ref<ResizeObserver | null>(null);
    const desktopResizeObserver = ref<ResizeObserver | null>(null);

    onMounted(() => {
      mobileResizeObserver.value = new ResizeObserver(entries => {
        entries.forEach((entry) => {
          emit("update:height", entry.contentRect.height);
        });
      });

      desktopResizeObserver.value = new ResizeObserver(entries => {
        entries.forEach((entry) => {
          emit("update:width", entry.contentRect.width);
        });
      });

      if (mobileOverlayWrapper.value) {
        mobileResizeObserver.value.observe(mobileOverlayWrapper.value);
      }

      if (desktopOverlay.value) {
        desktopResizeObserver.value.observe(desktopOverlay.value.$el);
      }
    });

    onUnmounted((): void => {
      if (mobileResizeObserver.value) {
        mobileResizeObserver.value.disconnect();
      }
      if (desktopResizeObserver.value) {
        desktopResizeObserver.value.disconnect();
      }
    });

    return {
      isExtraSmall,
      mobileOverlayWrapper,
      desktopOverlay
    };
  }
});
</script>