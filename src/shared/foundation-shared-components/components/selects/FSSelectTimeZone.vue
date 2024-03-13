<template>
  <FSSelectField
    :items="entities"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import { useTimeZones } from "@dative-gpi/foundation-shared-services/composables";

import FSSelectField from "../fields/FSSelectField.vue";

export default defineComponent({
  name: "FSSelectTimeZone",
  components: {
    FSSelectField
  },
  props: {
    modelValue: {
      type: String,
      required: false,
      default: null
    },
  },
  emits: ["update:modelValue"],
  setup() {
    const { getMany, entities } = useTimeZones();

    onMounted(() => {
      getMany();
    });

    return {
      entities
    };
  }
});
</script>