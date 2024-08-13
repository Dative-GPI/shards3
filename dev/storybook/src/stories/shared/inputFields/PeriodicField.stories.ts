import type { Meta, StoryObj } from '@storybook/vue3';

import FSPeriodicField from "@dative-gpi/foundation-shared-components/components/fields/FSPeriodicField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/PeriodicField',
  component: FSPeriodicField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSPeriodicField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: null,
      value2: "Hello there",
      value3: "General Kenobi"
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSPeriodicField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSPeriodicField
      />
    </FSCol>`
  })
}