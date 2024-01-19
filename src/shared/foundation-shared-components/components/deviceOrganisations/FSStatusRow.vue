<template>
  <FSRow
    width="hug"
    gap="2"
    :wrap="false"
  >
    <v-tooltip
      v-for="(statusGroup, index) in $props.statusGroups"
      location="top"
      :key="index"
    >
      <template #activator="{ props }">
        <FSColor
          width="24px"
          height="24px"
          align="center-center"
          :color="statusGroup.color"
          v-bind="props"
        >
          <template #default="{ color }">
            <FSIcon size="s" :color="color">
              {{ statusGroup.icon }}
            </FSIcon>
          </template>
        </FSColor>
      </template>
    </v-tooltip>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { FSDeviceStatusGroup } from "@dative-gpi/foundation-shared-components/models";

import FSColor from "../FSColor.vue";
import FSIcon from "../FSIcon.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSStatusRow",
  components: {
    FSColor,
    FSIcon,
    FSRow
  },
  props: {
    statusGroups: {
      type: Array as PropType<FSDeviceStatusGroup[]>,
      required: true
    }
  }
});
</script>