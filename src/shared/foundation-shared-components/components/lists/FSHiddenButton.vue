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
        :label="$tr('data-table.hidden-columns', '{0} hidden column(s)', $props.headers.length.toString())"
        v-bind="props"
      />
    </template>
    <FSCard
      class="fs-hidden-button-menu"
      :elevation="true"
      :border="false"
    >
      <FSCol
        padding="24px"
        gap="12px"
      >
        <FSCol
          gap="12px"
        >
          <FSSpan
            font="text-overline"
          >
            {{ $tr("data-table.show-columns", "Show columns") }}
          </FSSpan>
        </FSCol>
        <FSFadeOut
          maxHeight="360px"
        >
          <FSCol
            gap="6px"
          >
            <FSChip
              v-for="(header, index) in $props.headers"
              class="fs-hidden-button-chip"
              variant="full"
              :height="['30px', '24px']"
              :color="$props.color"
              :label="header.text"
              :editable="true"
              :key="index"
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
import { defineComponent, type PropType, ref } from "vue";

import { type ColorBase, ColorEnum, type FSDataTableColumn } from "@dative-gpi/foundation-shared-components/models";

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