<template>
  <FSDialog
    :modelValue="$props.dialog"
    @update:modelValue="$emit('update:dialog', $event)"
  >
    <FSCard
      :elevation="true"
      @click.stop
    >
      <FSCol
        padding="16px"
        gap="12px"
      >
        <FSCalendar
          v-model="calendarValue"
        />
        <FSButton
          color="primary"
          width="100%"
          :label="$tr('ui.agenda.calendar.dialog.submit', 'Validate')"
          @click="onSubmit"
        />
      </FSCol>
    </FSCard>
  </FSDialog>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

import FSCalendar from '../FSCalendar.vue';
import FSButton from '../FSButton.vue';
import FSCard from '../FSCard.vue';
import FSCol from '../FSCol.vue';
import FSDialog from '../FSDialog.vue';

export default defineComponent({
  name: 'FSAgendaDialogCalendar',
  components: {
    FSCalendar,
    FSButton,
    FSCard,
    FSCol,
    FSDialog,
  },
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
    modelValue: {
      type: Number,
      required: true,
    },
  },
  emits: ['update:modelValue', 'update:dialog'],
  setup(props, { emit }) {
    const calendarValue = ref<number>(props.modelValue);

    const onSubmit = () => {
      emit('update:modelValue', calendarValue.value);
      emit('update:dialog', false);
    };

    watch(() => props.modelValue, (newValue) => {
      if (newValue) {
        calendarValue.value = newValue;
      }
    }, {immediate: true});

    return {
      calendarValue,
      onSubmit
    };
  },
});
</script>