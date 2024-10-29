<template>
  <router-link
    :to="$props.to"
    @auxclick="onAuxClick"
    @click="onClick"
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
import { type RouteLocation, useRouter } from "vue-router";

export default defineComponent({
  name: "FSRouterLink",
  props: {
    to: {
      type: Object as PropType<RouteLocation>,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();

    const onAuxClick = (event: MouseEvent) => {
      if (window.top != window.self) {
        event.preventDefault();
        window.open(document.referrer.slice(0, -1) + router.resolve(props.to).href, "_blank");
      }
    };

    const onClick = (event: MouseEvent) => {
      if (window.top != window.self) {
        if (event.metaKey || event.ctrlKey || event.button === 1) {
          event.preventDefault();
          window.open(document.referrer.slice(0, -1) + router.resolve(props.to).href, "_blank");
        }
      }
    };

    return {
      onAuxClick,
      onClick
    };
  }
});
</script>