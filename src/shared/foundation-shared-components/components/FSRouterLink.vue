<template>
  <router-link
    :to="$props.to"
    @auxclick="handleRoutingEvent($event, $props.to)"
    @click="handleRoutingEvent($event, $props.to)"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="{ ...slotData }"
      />
    </template>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import { type RouteLocation } from "vue-router";

import { useRouting } from "@dative-gpi/foundation-shared-services/composables";

export default defineComponent({
  name: "FSRouterLink",
  props: {
    to: {
      type: Object as PropType<RouteLocation>,
      required: true
    }
  },
  setup() {
    const { handleRoutingEvent } = useRouting();

    return {
      handleRoutingEvent
    };
  }
});
</script>