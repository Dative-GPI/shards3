import type { Meta, StoryObj } from '@storybook/vue3';

import FSProgressBar from "@dative-gpi/foundation-shared-components/components/FSProgressBar.vue";

const meta = {
  title: 'Foundation/Shared/ProgressBar',
  component: FSProgressBar,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FSProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: 0.70,
    showValue: true,
  },
  render: (args, { argTypes }) => ({
    components: { FSProgressBar },
    setup() {
      return { args };
    },
    template: `
      <FSProgressBar
        v-bind="args"
      />
    `
  }),
};
