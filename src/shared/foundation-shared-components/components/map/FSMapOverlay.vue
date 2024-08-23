<template>
  <v-overlay
    v-show="isExtraSmall"
    :modelValue="$props.mode === 'expand'"
    :contained="true"
    @click="$emit('update:mode', 'collapse')"
    zIndex="0"
  />
  <FSCard
    v-show="isExtraSmall"
    class="fs-map-overlay-mobile"
    ref="mobileOverlay"
    :elevation="true"
    :height="$props.mode === 'expand' ? '90%' : ($props.mode === 'half' ? '50%' : '20px')"
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

    const resizeObserver = ref<ResizeObserver | null>(null);
    const mobileOverlay = ref<InstanceType<typeof FSCard> | null>(null);
    const desktopOverlay = ref<InstanceType<typeof FSCard> | null>(null);

    onMounted(() => {
      resizeObserver.value = new ResizeObserver(entries => {
        entries.forEach((entry) => {
          if (desktopOverlay.value && entry.target === desktopOverlay.value.$el) {
            console.log("desktopOverlay change");
            emit("update:width", entry.contentRect.width);
          }
          if (mobileOverlay.value && entry.target === mobileOverlay.value.$el) {
            console.log("mobileOverlay change");
            emit("update:height", entry.contentRect.height);
          }
        });
      });
      if (mobileOverlay.value) {
        resizeObserver.value.observe(mobileOverlay.value.$el);
      }
      if (desktopOverlay.value) {
        resizeObserver.value.observe(desktopOverlay.value.$el);
      }
    });

    onUnmounted((): void => {
      if (resizeObserver.value) {
        resizeObserver.value.disconnect();
      }
    });

    return {
      isExtraSmall,
      mobileOverlay,
      desktopOverlay
    };
  }
});
</script>