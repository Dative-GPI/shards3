<template>
  <FSBaseMobileView
    v-if="isExtraSmall"
    :variant="$props.variant"
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
  </FSBaseMobileView>

  <FSBaseDesktopView
    v-else
    :variant="$props.variant"
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
  </FSBaseDesktopView>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSBaseDesktopView from "./desktop/FSBaseDesktopView.vue";
import FSBaseMobileView from "./mobile/FSBaseMobileView.vue";

export default defineComponent({
  name: "FSBaseView",
  components: {
    FSBaseDesktopView,
    FSBaseMobileView
  },
  props: {
    variant: {
      type: String as PropType<"default" | "entity">,
      required: true,
      default: "default"
    }
  },
  setup() {
    const { isExtraSmall } = useBreakpoints();

    return {
      isExtraSmall
    };
  }
});
</script>