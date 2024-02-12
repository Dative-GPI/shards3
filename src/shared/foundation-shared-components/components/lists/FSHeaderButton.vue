<template>
  <v-menu
    v-model="expanded"
  >
    <template #activator="{ props }">
      <FSButton
        class="fs-header-button"
        icon="mdi-dots-vertical"
        variant="icon"
        :color="ColorEnum.Light"
        v-bind="props"
      />
    </template>
    <FSContainer
      padding="16px"
    >
      <FSCol
        :gap="16"
      >
        <FSSpan
          font="text-overline"
        >
          {{ $tr("ui.data-table.column-options", "Options for this column") }}
        </FSSpan>
        <FSCol
          padding="16px"
        >
          <FSButton
            variant="icon"
            icon="mdi-eye-off-outline"
            :label="$tr('ui.data-table.hide-column', 'Hide column')"
            :color="ColorEnum.Dark"
            @click="$emit('update:hide')"
          />
          <FSButton
            variant="icon"
            icon="mdi-chevron-left"
            :label="$tr('ui.data-table.move-left', 'Move to the left')"
            :color="ColorEnum.Dark"
            @click="$emit('update:left')"
          />
          <FSButton
            variant="icon"
            icon="mdi-chevron-right"
            :label="$tr('ui.data-table.move-right', 'Move to the right')"
            :color="ColorEnum.Dark"
            @click="$emit('update:right')"
          />
        </FSCol>
      </FSCol>
    </FSContainer>
  </v-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSContainer from "../FSContainer.vue";
import FSButton from "../FSButton.vue";
import FSSpan from "../FSSpan.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSHeaderButton",
  components: {
    FSContainer,
    FSButton,
    FSSpan,
    FSCol
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