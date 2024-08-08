<template>
  <FSCol
    v-show="isExtraSmall"
    class="fs-map-overlay-left-mobile"
    ref="mobileOverlayElement"
    align="bottom-center"
    width="hug"
    gap="2px"
    :height="$props.mode === 'expand' ? '100%' : ($props.mode === 'half' ? '50%' : 'hug')"
    :id="`left-overlay-mobile-${$props.mapId}`"
    :style="style"
    @click="$event.target === mobileOverlayElement?.$el ? $emit('update:mode', 'collapse') : null"
  >
    <FSCard
      padding="0px"
      :elevation="true"
      :border="false"
    >
      <FSCol
        height="fill"
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
          class="fs-map-overlay-left-mobile-content"
          height="fill"
        >
          <slot
            name="leftoverlay-header"
          />
          <FSFadeOut
            maskHeight="0px"
            :height="$props.mode === 'collapse' ? '0px' : '100%'"
          >
            <slot
              name="leftoverlay-body"
            />
          </FSFadeOut>
        </FSCol>
      </FSCol>
    </FSCard>
  </FSCol>
  <FSCol
    v-show="!isExtraSmall"
    class="fs-map-overlay-left"
    width="hug"
    gap="2px"
    :id="`left-overlay-${$props.mapId}`"
    :style="style"
  >
    <FSCard
      padding="4px"
      :elevation="true"
      :border="false"
    >
      <FSCol
        class="fs-map-overlay-left-content"
      >
        <slot
          name="leftoverlay-header"
        />
        <FSFadeOut
          maskHeight="0"
          height="100%"
        >
          <slot
            name="leftoverlay-body"
          />
        </FSFadeOut>
      </FSCol>
    </FSCard>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, type StyleValue } from "vue";

import { useBreakpoints } from "../../composables";

import FSFadeOut from "../FSFadeOut.vue";
import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSMapOverlay",
  props: {
    height: {
      type: [String, Number] as PropType<string | number | null>,
      required: false,
      default: "100%"
    },
    mode: {
      type: String as PropType<"collapse" | "half" | "expand">,
      required: false,
      default: "collapse"
    },
    mapId: {
      type: String,
      required: true
    }
  },
  components: {
    FSFadeOut,
    FSButton,
    FSCard,
    FSCol,
    FSRow
  },
  emits: ["update:mode"],
  setup(props) {
    const { isExtraSmall } = useBreakpoints();

    const leftOverlayMenuMobile = ref(false);
    const mobileOverlayElement = ref(null);

    const style = computed((): StyleValue => {
      if (props.mode === "expand") {
        return {
          "--fs-map-overlay-max-height": `calc(${props.height} - 40px)`,
          "--fs-map-overlay-card-height": "95%",
        };
      }
      else {
        return {
          "--fs-map-overlay-max-height": `calc(${props.height} - 40px)`,
          "--fs-map-overlay-card-height": "100%",
        };
      }
    });

    return {
      leftOverlayMenuMobile,
      mobileOverlayElement,
      isExtraSmall,
      style
    };
  }
});
</script>