<template>
  <FSRow
    padding="16px"
    :width="$props.width"
  >
    <FSCol
      align="center-center"
      gap="16px"
    >
      <FSCol
        align="center-center"
      >
        <FSIcon
          size="42px"
          :color="ColorEnum.Error"
        >
          mdi-alert-outline
        </FSIcon>
        <FSText
          font="text-h3"
        >
          {{ $tr("window-error.no-access-title", "Nothing to see here") }}
        </FSText>
      </FSCol>
      <FSText
        :lineClamp="2"
      >
        {{ $tr("window-error.no-access-body", "It seems you either do not have access to this content, or there is nothing to display here") }}
      </FSText>
      <FSButton
        v-if="$props.goBack"
        :label="$tr('window-error.no-access-button', 'Go back')"
        :color="ColorEnum.Primary"
        @click="$props.goBack"
      />
    </FSCol>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { ColorEnum } from "../models";

import FSButton from "./FSButton.vue";
import FSIcon from "./FSIcon.vue";
import FSText from "./FSText.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSWindowError",
  components: {
    FSButton,
    FSIcon,
    FSText,
    FSCol,
    FSRow
  },
  props: {
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    goBack: {
      type: Function as PropType<((...args: any[]) => any)>,
      required: false,
      default: null
    }
  },
  setup() {
    return {
      ColorEnum
    };
  }
});
</script>