<template>
  <FSClickable
    :height="height"
    :width="width"
    v-bind="$attrs"
    :style="{ backgroundImage: `url(${src})` }"
  >
    <FSRow
      height="fill"
      align="bottom-left"
    >
      <FSCard
        width="100%"
        padding="8px"
        :border="false"
        bgcolor="#ff0000"
      >
        <FSRow
          align="center-left"
        >
          <FSText>
            {{ $props.label }}
          </FSText>
        </FSRow>
      </FSCard>
    </FSRow>
  </FSClickable>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import FSCard from "./FSCard.vue";
import FSClickable from "./FSClickable.vue";
import FSRow from "./FSRow.vue";
import FSText from "./FSText.vue";

export default defineComponent({
  name: "FSImageCard",
  components: {
    FSCard,
    FSClickable,
    FSRow,
    FSText
  },
  props: {
    src: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: '110px'
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: '200px'
    },
  }
});

</script>