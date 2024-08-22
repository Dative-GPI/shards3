<template>
  <template
    v-if="isExtraSmall"
  >
    <v-overlay
      :modelValue="$props.mode === 'expand'"
      :contained="true"
      @click="$emit('update:mode', 'collapse')"
      zIndex="0"
    />

    <FSCard
      class="fs-map-overlay-mobile"
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
  </template>

  <template 
    v-else
  >
    <FSCard
      class="fs-map-overlay-desktop"
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
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

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
  emits: ["update:mode"],
  setup() {
    const { isExtraSmall } = useBreakpoints();

    return {
      isExtraSmall
    };
  }
});
</script>