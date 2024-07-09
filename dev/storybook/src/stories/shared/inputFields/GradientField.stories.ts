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
      value1: ["#008FFF", "#FFFF00"],
      value2: ["#FF00F0", "#00FF00"],
      value3: ["#FFF000", "#FF0000"],
      value4: ["#FF0000", "#8FA0F0", "#8FA000"],
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
      <div style="width: 100%; border-bottom: 2px dotted lightgrey; margin: 18px;" />
      <FSGradientField
        v-model="args.value2"
        label="Required gradient"
        description="Description for this field"
        :required="true"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey; margin: 18px;" />
      <FSGradientField
        v-model="args.value3"
        label="Base gradient disabled"
        :editable="false"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey; margin: 18px;" />
      <FSGradientField
        v-model="args.value4"
        :colorCount="3"
        label="Gradient"
      />
    </FSCol>`
  })
}