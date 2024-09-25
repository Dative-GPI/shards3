<template>
  <FSBaseDefaultMobileView
    v-if="$props.variant === 'default'"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
  </FSBaseDefaultMobileView>

  <FSBaseEntityMobileView
    v-if="$props.variant === 'entity'"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
  </FSBaseEntityMobileView>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import FSBaseDefaultMobileView from "./FSBaseDefaultMobileView.vue";
import FSBaseEntityMobileView from "./FSBaseEntityMobileView.vue";

export default defineComponent({
  name: "FSBaseMobileView",
  components: {
    FSBaseDefaultMobileView,
    FSBaseEntityMobileView
  },
  props: {
    variant: {
      type: String as PropType<"default" | "entity">,
      required: false,
      default: "default"
    }
  }
});
</script>