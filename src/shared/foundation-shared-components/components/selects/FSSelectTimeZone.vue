<template>
  <FSSelectField itemTitle="id"
    :items="timeZones"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs">
    <template #append-inner>
      <slot name="append-inner">
        <FSChip v-if="offset"
          variant="standard"
          :color="ColorEnum.Dark"
          :label="offset" />
      </slot>
    </template>
  </FSSelectField>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";

import { useTimeZones } from "@dative-gpi/foundation-shared-services/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSSelectField from "../fields/FSSelectField.vue";
import FSChip from "../FSChip.vue";

export default defineComponent({
  name: "FSSelectTimeZone",
  components: {
    FSSelectField,
    FSChip
  },
  props: {
    modelValue: {
      type: String,
      required: false,
      default: null
    },
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getMany: getTimeZones, entities: timeZones } = useTimeZones();

    const offset = computed((): string | undefined => {
      return timeZones.value.find((entity) => entity.id === props.modelValue)?.offset;
    });

    onMounted(() => {
      getTimeZones();
    });

    return {
      ColorEnum,
      timeZones,
      offset
    };
  }
});
</script>