import type { Meta, StoryObj } from '@storybook/vue3';
import { reactive, computed, ref } from 'vue';

import { useDateFormat, useTermFieldDate } from '@dative-gpi/foundation-shared-services/composables';
import { useAppTimeZone } from "@dative-gpi/foundation-shared-services/composables";

import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSDivider from '@dative-gpi/foundation-shared-components/components/FSDivider.vue';
import FSTermField from "@dative-gpi/foundation-shared-components/components/fields/FSTermField.vue";
import FSTextField from '@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue';
import FSAutocompleteTimeZone from '@dative-gpi/foundation-shared-components/components/autocompletes/FSAutocompleteTimeZone.vue';

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
    components: {
      FSCol,
      FSText,
      FSDivider,
      FSTermField,
      FSTextField,
      FSAutocompleteTimeZone
    },
    setup() {
      
      const localArgs = reactive({
        ...args
      });
      
      const { setAppTimeZone, timeZone } = useAppTimeZone();
      const { convert } = useTermFieldDate();
      const { epochToLongTimeFormat } = useDateFormat();

      const variables = ref({
        variable: 'now - 2d',
      });

      const convertedStartEpoch = computed(() => convert(localArgs.startDate, variables.value));
      const convertedEndEpoch = computed(() => convert(localArgs.endDate, variables.value));

      const convertedStartDate = computed(() => epochToLongTimeFormat(convertedStartEpoch.value));
      const convertedEndDate = computed(() => epochToLongTimeFormat(convertedEndEpoch.value));

      // Émet les événements d'update vers Storybook
      const updateStartDate = (value: string) => {
        localArgs.startDate = value;
        args['onUpdate:startDate']?.(value);
      };

      const updateEndDate = (value: string) => {
        localArgs.endDate = value;
        args['onUpdate:endDate']?.(value);
      };

      return {
        timeZone,
        variables,
        localArgs,
        convertedEndDate,
        convertedEndEpoch,
        convertedStartDate,
        convertedStartEpoch,
        updateEndDate,
        setAppTimeZone,
        updateStartDate,
      };
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
        <FSDivider />
        <FSCol gap="24px">
          <FSText
            font="text-h2"
          >
            Outils supplémentaires:
          </FSText>
          <FSCol>
            <FSText
              font="text-h3"
            >
              App time zone:
            </FSText>
            <FSAutocompleteTimeZone
              :modelValue="timeZone"
              @update:modelValue="setAppTimeZone"
            />
          </FSCol>
          <FSCol>
            <FSText
              font="text-h3"
            >
              Evaluation de la date de début et de fin avec useTermFieldDate:
            </FSText>
            <FSRow>
              <FSText
                font="text-button"
              >
                {{ localArgs.startDate }} :
              </FSText>
              <FSText>{{ convertedStartDate }} ( {{ convertedStartEpoch }} )</FSText>
            </FSRow>
            <FSRow>
              <FSText
                font="text-button"
              >
                {{ localArgs.endDate }} :
              </FSText>
              <FSText>{{ convertedEndDate }} ( {{ convertedEndEpoch }} )</FSText>
            </FSRow>
            <FSText>
              Variables: {{ variables }}
            </FSText>
          <FSCol>
        </FSCol>
      </FSCol>
    `
  }),
};
