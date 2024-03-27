<template>
  <FSRow
    padding="18px 0 18px 32px"
    class="fs-error-toast"
    align="center-left"
    :style="style"
  >
    <FSIcon>
      mdi-alert-outline
    </FSIcon>
    <FSSpan>
      {{ $tr(error.code, error.default) }}
    </FSSpan>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import { getError, sizeToVar } from "@dative-gpi/foundation-shared-components/utils";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSErrorToast",
  components: {
    FSIcon,
    FSSpan,
    FSRow
  },
  props: {
    errorCode: {
      type: String,
      required: true
    },
    borderRadius: {
      type: [String, Number],
      required: false,
      default: "4px"
    }
  },
  setup(props) {
    const { getColors } = useColors();

    const errors = getColors(ColorEnum.Error);

    const style = computed((): { [key: string] : string } => {
      return {
        "--fs-error-toast-border-radius"   : sizeToVar(props.borderRadius),
        "--fs-error-toast-background-color": errors.base,
        "--fs-error-toast-color"           : errors.light
      };
    });

    const error = computed((): { code: string, default: string, status: number } => getError(props.errorCode));

    return {
      error,
      style
    };
  }
});
</script>