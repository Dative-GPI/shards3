import type { Meta, StoryObj } from '@storybook/vue3';

import FSDatePicker from "@dative-gpi/foundation-shared-components/components/FSDatePicker.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/DatePicker',
  component: FSDatePicker,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSDatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      // value1: [1703000000000, 1706158800000] // 19/12/2023, 25/01/2024
      // value1: [1701234000000, 1706850000000] // 29/11/2023, 02/02/2024
      value1: [1701234000000] // 29/11/2023
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSDatePicker, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSDatePicker
        label="Date picker - dark color, primary button color, no button label"
        v-model="args.value1"
      />
    </FSCol>`
  })
}