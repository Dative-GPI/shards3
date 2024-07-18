<template>
  <FSCol
    v-if="isExtraSmall"
    :height="$props.mode === 'expand' ? '100%' : ($props.mode === 'half' ? '50%' : 'hug')"
    :style="style"
    class="fs-map-overlay-left-mobile"
    width="hug"
    ref="mobileOverlayElement"
    align="bottom-center"
    gap="2px"
    @click="$event.target === mobileOverlayElement?.$el ? $emit('update:mode', 'collapse') : null"
  >
    <FSCard
      padding="0"
      :elevation="true"
      :border="false"
    >
      <FSCol
        gap="0px"
        height="fill"
      >
        <FSRow
          align="center-center"
          @touchstart="$props.mode === 'expand' ? $emit('update:mode', 'collapse') : $emit('update:mode', 'expand')"
        >
          <FSButton
            :icon="$props.mode === 'expand' ? 'mdi-chevron-down' : 'mdi-chevron-up'"
            variant="icon"
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
            :height="$props.mode === 'collapse' ? '0' : '100%'"
            maskHeight="0"
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
    v-else
    class="fs-map-overlay-left"
    width="hug"
    gap="2px"
  >
    <FSCard
      padding="4px"
      :elevation="true"
      :border="false"
    >
      <FSCol
        :height="`calc(${$props.height} - 40px)`"
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
import { computed, defineComponent, ref, type PropType } from 'vue'

import { useBreakpoints } from '../../composables';

import FSCard from '../FSCard.vue';
import FSCol from '../FSCol.vue';
import FSRow from '../FSRow.vue';
import FSButton from '../FSButton.vue';
import FSFadeOut from '../FSFadeOut.vue';

export default defineComponent({
  name: 'FSMapOverlay',
  props: {
    height: {
      type: [String, Number] as PropType<string | number | null>,
      default: '100%'
    },
    mode: {
      type: String as PropType<'collapse' | 'half' | 'expand'>,
      default: 'collapse'
    }
  },
  components: {
    FSCard,
    FSCol,
    FSRow,
    FSButton,
    FSFadeOut
  },
  emits: ['update:mode'],
  setup(props) {
    const { isExtraSmall } = useBreakpoints();

    const leftOverlayMenuMobile = ref(false);
    const mobileOverlayElement = ref(null);

    const style = computed((): { [key: string]: string | null | undefined } => {
      if (props.mode === 'expand') {
        return {
          "--fs-map-overlay-card-height": '95%',
        };
      }else{
        return {
          "--fs-map-overlay-card-height": '100%',
        };
      }
    });

    return {
      isExtraSmall,
      leftOverlayMenuMobile,
      mobileOverlayElement,
      style
    }
  }
})
</script>