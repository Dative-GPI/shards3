<template>
  <FSCol
    padding="18px 32px"
    class="fs-error-toast"
    align="center-center"
    gap="24px"
    :style="style"
  >
    <slot
      name="body"
    >
      <FSRow
        align="center-center"
        :wrap="false"
      >
        <FSIcon>
          mdi-alert-outline
        </FSIcon>
        <FSSpan>
          {{ $tr(error.code, error.default) }}
        </FSSpan>
      </FSRow>
    </slot>
    <slot
      name="footer"
    />
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { getError, sizeToVar } from "@dative-gpi/foundation-shared-components/utils";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSRow from "./FSRow.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSErrorToast",
  components: {
    FSIcon,
    FSSpan,
    FSRow,
    FSCol
  },
  props: {
    errorCode: {
      type: String,
      required: true
    },
    variant: {
      type: String as PropType<"standard" | "full">,
      required: false,
      default: "full"
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

    const style = computed((): { [key: string]: string | undefined } => {
      switch (props.variant) {
        case "standard": return {
          "--fs-error-toast-border-radius": sizeToVar(props.borderRadius),
          "--fs-error-toast-background-color": errors.light,
          "--fs-error-toast-color": errors.dark
        };
        default: return {
          "--fs-error-toast-border-radius": sizeToVar(props.borderRadius),
          "--fs-error-toast-background-color": errors.base,
          "--fs-error-toast-color": errors.light
        };
      }
    });

    const error = computed((): { code: string, default: string, status: number } => getError(props.errorCode));

    return {
      error,
      style
    };
  }
});
</script>