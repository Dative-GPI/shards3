import type { Meta, StoryObj } from '@storybook/vue3';

import FSGradientField from "@dative-gpi/foundation-shared-components/components/fields/FSGradientField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/GradientField',
  component: FSGradientField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSGradientField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: ["#FF00F0", "#FFFF00"],
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSGradientField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSGradientField
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
    </FSCol>`
  })
}