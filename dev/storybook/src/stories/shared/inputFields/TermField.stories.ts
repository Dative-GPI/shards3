import type { Meta, StoryObj } from '@storybook/vue3';
import { reactive, computed, ref } from 'vue';

import { useDateFormat, useTermFieldDate } from '@dative-gpi/foundation-shared-services/composables';

import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSTermField from "@dative-gpi/foundation-shared-components/components/fields/FSTermField.vue";
import FSTextField from '@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue';

const meta = {
  title: 'Foundation/Shared/Input fields/TermField',
  component: FSTermField,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'before-after']
    },
    'onUpdate': { action: 'update' },
    'onUpdate:startDate': { action: 'update:startDate' },
    'onUpdate:endDate': { action: 'update:endDate' },
  },
} satisfies Meta<typeof FSTermField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    label: 'Term',
    description: null,
    startDate: 'now - 1d',
    endDate: 'now',
    variant: 'default',
    hideHeader: false,
    lastPeriod: false,
    required: false,
    editable: true,
  },
  render: (args, { argTypes }) => ({
    components: { FSCol, FSTermField, FSText, FSTextField },
    setup() {
      // Crée une copie locale réactive des args
      const localArgs = reactive({
        ...args
      });

      const { convert } = useTermFieldDate();
      const { epochToLongTimeFormat } = useDateFormat();

      const variables = ref({
        variable: 'now - 2d',
      });

      const convertedStartDate = computed(() => epochToLongTimeFormat(convert(localArgs.startDate, variables.value)));
      const convertedEndDate = computed(() => epochToLongTimeFormat(convert(localArgs.endDate, variables.value)));

      // Émet les événements d'update vers Storybook
      const updateStartDate = (value: string) => {
        localArgs.startDate = value;
        args['onUpdate:startDate']?.(value);
      };

      const updateEndDate = (value: string) => {
        localArgs.endDate = value;
        args['onUpdate:endDate']?.(value);
      };

      return { localArgs, convertedStartDate, convertedEndDate, updateStartDate, updateEndDate, variables };
    },
    template: `
      <FSCol
        gap="20px"
      >
        <FSTermField
          v-bind="localArgs"
          v-model:startDate="localArgs.startDate"
          v-model:endDate="localArgs.endDate"
          @update="localArgs['onUpdate']"
          @update:startDate="updateStartDate"
          @update:endDate="updateEndDate"
        />
        <FSCol gap="4px">
          <FSText
            font="text-h3"
          >
            Evaluation de la date de début et de fin avec useTermFieldDate:
          </FSText>
          <FSRow>
            <FSText
              font="text-button"
            >
              Date de début:
            </FSText>
            <FSText>{{ convertedStartDate }}</FSText>
          </FSRow>
          <FSRow>
            <FSText
              font="text-button"
            >
              Date de fin:
            </FSText>
            <FSText>{{ convertedEndDate }}</FSText>
          </FSRow>
          <FSText>
            Variables: {{ variables }}
          </FSText>
        </FSCol>
      </FSCol>
    `
  }),
};
