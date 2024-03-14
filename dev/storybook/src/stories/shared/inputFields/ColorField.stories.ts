import type { Meta, StoryObj } from '@storybook/vue3';

import FSColorField from "@dative-gpi/foundation-shared-components/components/fields/FSColorField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/ColorField',
  component: FSColorField,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof FSColorField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      value1: "#FF0000",
      opacity1: 1,
      value2: "#00FF12",
      opacity2: 0,
      value3: "#0030FF",
      opacity3: 0.5
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSColorField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSColorField
        label="Color"
        v-model="args.value1"
        v-model:opacityValue="args.opacity1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Required color, with description"
        description="Description for this field"
        :required="true"
        v-model="args.value2"
        v-model:opacityValue="args.opacity2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Uneditable color, with description"
        description="Uneditable description"
        :editable="false"
        v-model="args.value3"
        v-model:opacityValue="args.opacity3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSColorField
        label="Uneditable color, with description"
        description="Uneditable description"
        :allowOpacity="false"
        v-model="args.value3"
        v-model:opacityValue="args.opacity3"
      />
    </FSCol>`
  })
}