<template>
  <v-menu
    :closeOnContentClick="false"
    v-model="expanded"
  >
    <template
      #activator="{ props }"
    >
      <FSChip
        prependIcon="mdi-eye-off-outline"
        :height="[30, 24]"
        :color="ColorEnum.Light"
        :editable="true"
        :label="$tr('ui.data-table.hidden-columns', '{0} hidden column(s)', $props.headers.length.toString())"
        v-bind="props"
      />
    </template>
    <FSCard
      class="fs-hidden-button-menu"
      :elevation="true"
      :border="false"
    >
      <FSCol
        gap="12px"
        padding="16px 0px 24px 16px"
      >
        <FSCol
          gap="12px"
          padding="0 16px 0 0"
        >
          <FSSpan
            font="text-overline"
          >
            {{ $tr("ui.data-table.show-columns", "Show columns") }}
          </FSSpan>
        </FSCol>
        <FSFadeOut
          padding="0 8px 0 0"
          height="360px"
        >
          <FSCol
            gap="6px"
          >
            <FSChip
              v-for="(header, index) in $props.headers"
              class="fs-hidden-button-chip"
              :height="[30, 24]"
              :key="index"
              :editable="true"
              :label="header.text"
              :color="$props.color"
              variant="full"
              @click="$emit('update:show', header)"
            >
            </FSChip>
          </FSCol>
        </FSFadeOut>
      </FSCol>
    </FSCard>
  </v-menu>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { defineComponent, ref } from "vue";

import type { ColorBase, FSDataTableColumn } from "@dative-gpi/foundation-shared-components/models";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSHiddenButton",
  components: {
    FSCard,
    FSChip,
    FSSpan,
    FSCol
  },
  props: {
    headers: {
      type: Array as PropType<FSDataTableColumn[]>,
      required: true
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    }
  },
  emits: ["update:show"],
  setup() {
    const expanded = ref(false);

    return {
      ColorEnum,
      expanded
    };
  }
});
</script>