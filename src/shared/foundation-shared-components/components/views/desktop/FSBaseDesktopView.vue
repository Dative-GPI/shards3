<template>
  <FSBaseDefaultDesktopView
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
  </FSBaseDefaultDesktopView>

  <FSBaseEntityDesktopView
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
  </FSBaseEntityDesktopView>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import FSBaseDefaultDesktopView from "./FSBaseDefaultDesktopView.vue";
import FSBaseEntityDesktopView from "./FSBaseEntityDesktopView.vue";

export default defineComponent({
  name: "FSBaseDesktopView",
  components: {
    FSBaseDefaultDesktopView,
    FSBaseEntityDesktopView
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