<template>
  <FSEntityViewUI
    :imageSource="source"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { IMAGE_RAW_URL } from "@dative-gpi/foundation-shared-services/config";

import FSEntityViewUI from "./FSEntityViewUI.vue";

export default defineComponent({
  name: "FSEntityView",
  components: {
    FSEntityViewUI
  },
  props: {
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  setup(props) {
    const source = computed(() => {
      return props.imageId ? IMAGE_RAW_URL(props.imageId) : null;
    });

    return {
      source
    };
  }
});
</script>