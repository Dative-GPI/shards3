import type { Meta, StoryObj } from '@storybook/vue3';

import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSInstantPicker from "@dative-gpi/foundation-shared-components/components/FSInstantPicker.vue";

const meta = {
  title: 'Foundation/Shared/InstantPicker',
  component: FSInstantPicker,
  tags: ['autodocs'],
  argTypes: {
    'onUpdate:startDate': { action: 'update:startDate' },
    'onUpdate:endDate': { action: 'update:endDate' },
    'onUpdate:modelValue': { action: 'update:modelValue' },
  },
} satisfies Meta<typeof FSInstantPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startDate: 'now - 3d',
    endDate: 'now',
    modelValue: 0,
  },
  render: (args, { argTypes }) => ({
    components: { FSCol, FSInstantPicker },
    setup() {
      return { args };
    },
    template: `
      <FSCol
        gap="20px"
      >
        <FSInstantPicker
          v-bind="args"
          v-model="args.modelValue"
          v-model:start-date="args.startDate"
          v-model:end-date="args.endDate"
          @update:startDate="args['update:startDate']"
          @update:endDate="args['update:endDate']"
          @update:modelValue="args['update:modelValue']"
        />
      </FSCol>
    `
  }),
};
