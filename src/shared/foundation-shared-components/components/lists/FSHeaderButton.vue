<template>
  <v-menu v-model="expanded">
    <template #activator="{ props }">
      <FSButton class="fs-header-button"
        icon="mdi-dots-vertical"
        variant="icon"
        :color="ColorEnum.Light"
        v-bind="props" />
    </template>
    <FSCard :elevation="true"
      :border="false">
      <FSCol gap="16px"
        padding="16px">
        <FSSpan font="text-overline">
          {{ $tr("ui.data-table.column-options", "Options for this column") }}
        </FSSpan>
        <FSCol padding="6px">
          <FSChip prependIcon="mdi-eye-off-outline"
            class="fs-header-button-chip"
            variant="borderless"
            :label="$tr('ui.data-table.hide-column', 'Hide column')"
            :height="[30, 24]"
            :editable="true"
            @click="$emit('update:hide')" />
          <FSChip v-if="!$props.first"
            class="fs-header-button-chip"
            variant="borderless"
            prependIcon="mdi-chevron-left"
            :label="$tr('ui.data-table.move-left', 'Move to the left')"
            :height="[30, 24]"
            :editable="true"
            @click="$emit('update:left')" />
          <FSChip v-if="!$props.last"
            class="fs-header-button-chip"
            variant="borderless"
            prependIcon="mdi-chevron-right"
            :label="$tr('ui.data-table.move-right', 'Move to the right')"
            :height="[30, 24]"
            :editable="true"
            @click="$emit('update:right')" />
        </FSCol>
      </FSCol>
    </FSCard>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSSpan from "../FSSpan.vue";
import FSChip from "../FSChip.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSHeaderButton",
  components: {
    FSButton,
    FSCard,
    FSChip,
    FSSpan,
    FSCol
  },
  props: {
    first: {
      type: Boolean,
      required: false,
      default: false
    },
    last: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:hide", "update:left", "update:right"],
  setup() {
    const expanded = ref(false);

    return {
      ColorEnum,
      expanded
    };
  }
})
</script>