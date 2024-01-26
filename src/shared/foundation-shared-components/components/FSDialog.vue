<template>
  <v-dialog
    :width="$props.width"
    v-bind="$attrs"
  >
    <slot>
      <FSCard
        :class="$props.cardClasses"
        :color="$props.color"
      >
        <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
          <slot :name="name" v-bind="slotData" />
        </template>
      </FSCard>
    </slot>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSCard from "./FSCard.vue";

export default defineComponent({
  name: "FSDialog",
  components: {
    FSCard
  },
  props: {
    width: {
      type: String,
      required: false,
      default: "auto"
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    cardClasses: {
      type: Array<String>,
      required: false,
      default: null
    }
  }
});
</script>