<template>
  <FSRow
    width="hug"
    gap="4px"
  >
    <FSClickable
      variant="full"
      :color="ColorEnum.Light"
      borderRadius="50%"
      padding="2px"
      @click="$emit('click:backward')"
    >
      <FSIcon
        size="18px"
        icon="mdi-skip-backward"
      />
    </FSClickable>
    <FSClickable
      variant="full"
      :color="ColorEnum.Light"
      borderRadius="50%"
      padding="2px"
      @click="$emit('update:modelValue', !$props.modelValue)"
    >
      <FSIcon
        size="18px"
        :icon="$props.modelValue ? 'mdi-pause' : 'mdi-play'"
      />
    </FSClickable>
    <FSClickable
      variant="full"
      :color="ColorEnum.Light"
      borderRadius="50%"
      padding="2px"
      @click="$emit('click:forward')"
    >
      <FSIcon
        size="18px"
        icon="mdi-skip-forward"
      />
    </FSClickable>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';

import FSIcon from '@dative-gpi/foundation-shared-components/components/FSIcon.vue';
import FSClickable from '@dative-gpi/foundation-shared-components/components/FSClickable.vue';

export default defineComponent({
  name: "FSPlayButtons",
  components: {
    FSClickable,
    FSIcon
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    }
  },
  emits: ['update:modelValue', 'click:backward', 'click:forward'],
  setup() {
    return {
      ColorEnum
    };
  },
});
</script>